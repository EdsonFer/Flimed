import styled from 'styled-components';

export const LoginBoxWrapper = styled.div`
	height: 100vh;
	width: 100%;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	strong {
		font-size: 40px;
		line-height: 36px;
	}

	.signInWithGoogle {
		background: #e8e8e4;
		margin-top: 32px;
		padding: 0 40px;
		height: 65px;
		color: #09090a;
		font-size: 18px;
		font-weight: bold;
		cursor: pointer;
		text-transform: uppercase;
		text-decoration: none;

		display: flex;
		align-items: center;
		justify-content: center;

		svg {
			margin-right: 16px;
		}

		&:hover {
			filter: brightness(0.9);
		}
	}
`;
