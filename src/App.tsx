import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';
import { TodoContextProvider } from './contexts/TodoContext';

import { Home } from './pages/Home';
import { TodoList } from './pages/TodoList';
import { NotFound } from './components/NotFound';
import ProtectedRoute from './components/ProtectedRoute';

import './styles/global.scss';

function App() {
	return (
		<BrowserRouter>
			<AuthContextProvider>
				<TodoContextProvider>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route element={<ProtectedRoute />}>
							<Route path="/tarefas" element={<TodoList />} />
						</Route>

						<Route path="*" element={<NotFound />} />
					</Routes>
				</TodoContextProvider>
			</AuthContextProvider>
		</BrowserRouter>
	);
}

export default App;
