import styled from 'styled-components';

export const Container = styled.div`
	max-width: 1200px;
	margin: 0 auto;
`;

export const Header = styled.div`
	display: flex;
	gap: 1.5em;
	align-items: center;
	padding-top: 2rem;
	border-bottom: 1px solid #444;
	padding-bottom: 1.3rem;
`;

export const Form = styled.form`
	margin-top: 4rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-bottom: 4rem;

	input {
		padding: 24px;
		font-size: 24px;
		outline: none;
		border: none;
		border-radius: 16px;
		background: #cccccc;
		color: black;
	}

	textarea {
		width: 100%;
		border: none;
		padding: 20px;
		outline: none;
		border-radius: 16px;
		background: #cccccc;
		color: black;
		resize: vertical;
		min-height: 185px;
		font-size: 24px;
	}

	button {
		padding: 24px;
		border-radius: 16px;
		border: none;
		font-size: 24px;
		line-height: 20px;
		font-weight: bold;
		background: #ffee32;
		cursor: pointer;
	}

	a {
		cursor: pointer;
		text-align: center;
		font-size: 24px;
		font-weight: bold;
	}
`;
