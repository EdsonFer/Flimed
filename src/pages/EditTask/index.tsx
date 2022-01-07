import { FormEvent, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useTodo } from '../../contexts/TodoContext';
import Modal from 'react-modal';

import { Container, Form, Header } from './styles';

type EditTaskProps = {
	isOpen: boolean;
	onRequestClose: () => void;
	id: string;
	initialTitle: string;
	initialDescription: string;
	initialContent: string;
};

export function EditTask({
	isOpen,
	onRequestClose,
	id,
	initialTitle,
	initialDescription,
	initialContent,
}: EditTaskProps) {
	const { user } = useAuth();
	const { updateTask } = useTodo();
	const [title, setTitle] = useState(initialTitle);
	const [description, setDescription] = useState(initialDescription);
	const [content, setContent] = useState(initialContent);

	function handleSubmit(event: FormEvent) {
		event.preventDefault();
		updateTask({
			id: id!,
			title: title,
			description: description,
			content: content,
		});
		setTitle('');
		setDescription('');
		setContent('');
	}

	return (
		<Modal isOpen={isOpen} onRequestClose={onRequestClose}>
			<Container>
				<Header>
					<img src={user?.avatar} />
					<h1>{user?.name}</h1>
				</Header>

				<Form onSubmit={handleSubmit}>
					<input type="text" value={id} readOnly />

					<input
						type="text"
						placeholder="Título da Tarefa"
						value={title}
						onChange={event => setTitle(event.target.value)}
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
					<button>Editar Tarefa</button>
					<a href="/tarefas">Voltar</a>
				</Form>
			</Container>
		</Modal>
	);
}
