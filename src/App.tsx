import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';
import { TodoContextProvider } from './contexts/TodoContext';

import { Home } from './pages/Home';
import { TodoList } from './pages/TodoList';

import './styles/global.scss';

function App() {
	return (
		<BrowserRouter>
			<AuthContextProvider>
				<TodoContextProvider>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/notas" element={<TodoList />} />
					</Routes>
				</TodoContextProvider>
			</AuthContextProvider>
		</BrowserRouter>
	);
}

export default App;
