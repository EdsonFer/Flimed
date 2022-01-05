import { useState, SyntheticEvent } from 'react';
import { useTodo } from '../../contexts/TodoContext';

import { Form } from './styles';

export function Task() {
	const [inputTitle, setInputTitle] = useState('');
	const [inputDescription, setInputDescription] = useState('');
	const [inputContent, setInputContent] = useState('');
	const { handleAddTask } = useTodo();

	async function handleSubmit(event: SyntheticEvent) {
		event.preventDefault();
		handleAddTask(inputTitle, inputDescription, inputContent);
	}

	return (
		<Form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Título da Tarefa"
				value={inputTitle}
				onChange={event => setInputTitle(event.target.value)}
				required
			/>
			<input
				type="text"
				placeholder="Descrição da Tarefa"
				value={inputDescription}
				onChange={event => setInputDescription(event.target.value)}
			/>

			<textarea
				placeholder="Tarefa"
				value={inputContent}
				onChange={event => setInputContent(event.target.value)}
				required
			/>
			<button>Salvar Tarefa</button>
		</Form>
	);
}
