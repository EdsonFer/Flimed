import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

import { Container, Form, Header } from './styles';

export function EditTask() {
	const navigate = useNavigate();
	const { id } = useParams();
	const { user } = useAuth();
	const [inputTitle, setInputTitle] = useState('');
	const [inputDescription, setInputDescription] = useState('');
	const [inputContent, setInputContent] = useState('');
	const [task, setTask] = useState([]);

	useEffect(() => {
		if (!id) {
			navigate('/');
		}
		/* 	async function ListTaskById(id: number) {
			const response = await api.get(`/editar/${id}`);
			if (response.data.id === id) {
				setTask(response.data);
				console.log(response.data);
			}
		}
		ListTaskById(Number(id)); */
	}, []);

	return (
		<Container>
			<Header>
				<img src={user?.avatar} />
				<h1>{user?.name}</h1>
			</Header>

			<Form>
				<input type="hidden" value={id} readOnly />
				<input
					type="text"
					placeholder="Título da Tarefa"
					value={inputTitle}
					onChange={event => setInputTitle(event.target.value)}
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
				<button>Editar Tarefa</button>
				<a href="/tarefas">Voltar</a>
			</Form>
		</Container>
	);
}
