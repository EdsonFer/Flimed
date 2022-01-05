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

	img {
		width: 80%;
	}

	.signInWithGoogle {
		background: #4895ef;
		margin: 32px 0 32px 0;
		padding: 0 40px;
		height: 65px;
		color: #242526;
		font-size: 20px;
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
