import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useTodo } from '../../contexts/TodoContext';
import { EditTask } from '../EditTask';
import { CreateTaskForm } from '../../components/CreateTaskForm';

import { FcFullTrash } from 'react-icons/fc';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Card, Cards, Container, Header } from './styles';

import { DocumentData } from 'firebase/firestore';

export function TodoList() {
	const { user } = useAuth();
	const [id, setId] = useState('');
	const { tasks, deleteTask } = useTodo();
	const [isEditTaskModalOpen, setIsEditTaskModalOpen] = useState(false);

	function handleOpenEditTaskModal() {
		setIsEditTaskModalOpen(true);
	}

	function handleCloseEditTaskModal() {
		setIsEditTaskModalOpen(false);
	}

	return (
		<Container>
			<Header>
				<img src={user?.avatar} />
				<h1>{user?.name}</h1>
			</Header>

			<CreateTaskForm />

			<Cards>
				{tasks.map((task: DocumentData) => (
					<Card key={task.id}>
						<h1>{task.data.title}</h1>
						<p className="description">{task.data.description}</p>
						<p>{task.data.content}</p>
						<a className="trash" onClick={() => deleteTask(task.id)}>
							<FcFullTrash size="50" className="trashIcon" />
						</a>
						<button onClick={handleOpenEditTaskModal}>
							<AiOutlineArrowRight
								size="50"
								color="#f72585"
								className="arrowIcon"
								onClick={() => setId(task.id)}
							/>
						</button>

						<EditTask
							id={id}
							isOpen={isEditTaskModalOpen}
							onRequestClose={handleCloseEditTaskModal}
						/>
					</Card>
				))}
			</Cards>
		</Container>
	);
}
