import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';

import { Home } from './pages/Home';
import { TodoList } from './pages/TodoList';

import './styles/global.scss';

function App() {
	return (
		<BrowserRouter>
			<AuthContextProvider>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/tarefas" element={<TodoList />} />
				</Routes>
			</AuthContextProvider>
		</BrowserRouter>
	);
}

export default App;
