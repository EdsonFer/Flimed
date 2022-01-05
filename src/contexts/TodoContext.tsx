import { createContext, ReactNode, useContext, useState } from 'react';

type Tasks = {
	id: number;
	title: string;
	description: string;
	content: string;
};

type TodoContextData = {
	task: Tasks[];
	handleAddTask: (title: string, description: string, content: string) => void;
	handleRemoveTask: (id: number) => void;
};

type TodoProviderProps = {
	children: ReactNode;
};

export const TodoContext = createContext({} as TodoContextData);

export function TodoContextProvider({ children }: TodoProviderProps) {
	const [task, SetTask] = useState<Tasks[]>([]);

	const handleAddTask = (
		title: string,
		description: string,
		content: string
	) => {
		let newTask = [...task];
		newTask.push({
			id: task.length + 1,
			title: title,
			description: description,
			content: content,
		});
		SetTask(newTask);
	};

	const handleRemoveTask = (id: number) => {
		const filteredTasks = task.filter(task => task.id !== id);
		SetTask(filteredTasks);
	};

	return (
		<TodoContext.Provider value={{ task, handleAddTask, handleRemoveTask }}>
			{children}
		</TodoContext.Provider>
	);
}

export const useTodo = () => {
	return useContext(TodoContext);
};
