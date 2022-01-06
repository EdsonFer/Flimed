import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from 'react';

import { database } from '../services/firebase';
import {
	collection,
	addDoc,
	deleteDoc,
	Timestamp,
	query,
	orderBy,
	onSnapshot,
	DocumentData,
	doc,
} from 'firebase/firestore';

type Tasks = {
	id: string;
	title: string;
	description: string;
	content: string;
	check: boolean;
};

type TasksInput = Omit<Tasks, 'id'>;

type TodoContextData = {
	tasks: Tasks[] | DocumentData;
	createNewTask: (task: TasksInput) => void;
	deleteTask: (id: string) => void;
};

type TodoProviderProps = {
	children: ReactNode;
};

export const TodoContext = createContext({} as TodoContextData);

export function TodoContextProvider({ children }: TodoProviderProps) {
	const [tasks, setTasks] = useState<Tasks[] | DocumentData>([]);

	useEffect(() => {
		const result = query(
			collection(database, 'tasks'),
			orderBy('created', 'desc')
		);
		onSnapshot(result, querySnapshot => {
			setTasks(
				querySnapshot.docs.map(doc => ({
					id: doc.id,
					data: doc.data(),
				}))
			);
		});
	}, []);

	async function createNewTask(taskInput: TasksInput) {
		try {
			await addDoc(collection(database, 'tasks'), {
				title: taskInput.title,
				description: taskInput.description,
				content: taskInput.content,
				check: taskInput.check,
				created: Timestamp.now(),
			});
		} catch (error) {
			alert(error);
		}
	}

	async function deleteTask(id: string) {
		const taskDocRef = doc(database, 'tasks', id);
		try {
			await deleteDoc(taskDocRef);
		} catch (error) {
			alert(error);
		}
	}

	return (
		<TodoContext.Provider
			value={{
				tasks,
				createNewTask,
				deleteTask,
			}}
		>
			{children}
		</TodoContext.Provider>
	);
}

export const useTodo = () => {
	return useContext(TodoContext);
};
