import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Task } from '../../components/Task';
import { useAuth } from '../../contexts/AuthContext';
import { useTodo } from '../../contexts/TodoContext';

import { FcFullTrash } from 'react-icons/fc';
import { AiOutlineArrowRight } from 'react-icons/ai';

import { Card, Cards, Container, Header } from './styles';

export function TodoList() {
	const { user } = useAuth();
	const { task, handleRemoveTask } = useTodo();
	const navigate = useNavigate();

	useEffect(() => {
		if (!user) {
			navigate('/');
		}
	}, []);

	return (
		<Container>
			<Header>
				<img src={user?.avatar} />
				<h1>{user?.name}</h1>
			</Header>

			<Task />

			<Cards>
				{task.map(tasks => (
					<Card key={tasks.id}>
						<h2>{tasks.title}</h2>
						<p>{tasks.content}</p>
						<a className="trash" onClick={() => handleRemoveTask(tasks.id)}>
							<FcFullTrash size="50" className="trashIcon" />
						</a>
						<div>
							<AiOutlineArrowRight
								size="50"
								color="#f72585"
								className="arrowIcon"
							/>
						</div>
					</Card>
				))}
			</Cards>
		</Container>
	);
}
