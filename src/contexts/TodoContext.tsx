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
	updateDoc,
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
};

type TasksEdit = Omit<Tasks, 'check'>;
type TasksInput = Omit<Tasks, 'id'>;

type TodoContextData = {
	tasks: Tasks[] | DocumentData;
	createNewTask: (task: TasksInput) => void;
	updateTask: (task: TasksEdit) => void;
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

	async function updateTask(task: TasksEdit) {
		const taskDocRef = doc(database, 'tasks', task.id);
		try {
			await updateDoc(taskDocRef, {
				title: task.title,
				description: task.description,
				content: task.content,
			});
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
				updateTask,
			}}
		>
			{children}
		</TodoContext.Provider>
	);
}

export const useTodo = () => {
	return useContext(TodoContext);
};
