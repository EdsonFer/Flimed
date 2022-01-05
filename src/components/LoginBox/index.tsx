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
		navigate('/notas');
	}

	return (
		<LoginBoxWrapper>
			<img src={gohan} />
			<strong>Entre e faça suas Anotações</strong>
			<a className="signInWithGoogle" onClick={signIn}>
				<FcGoogle size="40" />
				Entrar com Google
			</a>
		</LoginBoxWrapper>
	);
}
