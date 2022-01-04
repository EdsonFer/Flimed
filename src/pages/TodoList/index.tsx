import { useAuth } from '../../contexts/AuthContext';
import { Container } from './styles';

export function TodoList() {
	const { user } = useAuth();
	return (
		<Container>
			<h1>{user?.name}</h1>
		</Container>
	);
}
