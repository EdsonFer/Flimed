import { useState, FormEvent } from 'react';
import { useTodo } from '../../contexts/TodoContext';

import { Form } from './styles';

export function CreateTaskForm() {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [content, setContent] = useState('');
	const { createNewTask } = useTodo();

	function handleSubmit(event: FormEvent) {
		event.preventDefault();
		createNewTask({
			title: title,
			description: description,
			content: content,
			check: false,
		});
		setTitle('');
		setDescription('');
		setContent('');
	}

	return (
		<Form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Título da Tarefa"
				value={title}
				onChange={event => setTitle(event.target.value)}
				required
			/>
			<input
				type="text"
				placeholder="Descrição da Tarefa"
				value={description}
				onChange={event => setDescription(event.target.value)}
			/>

			<textarea
				placeholder="Tarefa"
				value={content}
				onChange={event => setContent(event.target.value)}
				required
			/>
			<button>Salvar Tarefa</button>
		</Form>
	);
}
