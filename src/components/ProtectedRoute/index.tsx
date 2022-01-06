import { useAuth } from '../../contexts/AuthContext';
import { Home } from '../../pages/Home';
import { TodoList } from '../../pages/TodoList';

export default function ProtectedRoute() {
	const { user } = useAuth();

	return user ? <TodoList /> : <Home />;
}
