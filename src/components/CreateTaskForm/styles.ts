import styled from 'styled-components';

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
		border-radius: 16px;
		background: #cccccc;
		color: black;
	}

	textarea {
		width: 100%;
		border: 0;
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
		font-size: 24px;
		line-height: 20px;
		font-weight: bold;
		background: #ffee32;
		cursor: pointer;
	}
`;
