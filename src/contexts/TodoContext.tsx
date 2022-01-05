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
		console.log(task);
	};

	return (
		<TodoContext.Provider value={{ task, handleAddTask }}>
			{children}
		</TodoContext.Provider>
	);
}

export const useTodo = () => {
	return useContext(TodoContext);
};
