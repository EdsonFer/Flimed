import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

import gohan from '../../assets/gohan.png';
import { FcGoogle } from 'react-icons/fc';
import { LoginBoxWrapper } from './styles';

export function LoginBox() {
	const navigate = useNavigate();
	const { user, signInWithGoogle } = useAuth();

	async function signIn() {
		if (!user) {
			await signInWithGoogle();
		}
		navigate('/tarefas');
	}

	return (
		<LoginBoxWrapper>
			<img src={gohan} width="800" />
			<strong>Entre e faça sua lista de Tarefas</strong>
			<button className="signInWithGoogle" onClick={signIn}>
				<FcGoogle size="24" />
				Entrar com Google
			</button>
		</LoginBoxWrapper>
	);
}
