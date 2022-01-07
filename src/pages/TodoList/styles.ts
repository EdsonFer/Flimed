import styled from 'styled-components';

export const Container = styled.div`
	max-width: 1200px;
	height: 100vh;
	margin: 0 auto;
	padding: 10px;
`;

export const Header = styled.div`
	display: flex;
	gap: 1.5em;
	align-items: center;
	padding-top: 2rem;
	border-bottom: 1px solid #444;
	padding-bottom: 1.3rem;
`;

export const Cards = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	justify-content: center;
	padding-bottom: 2rem;
`;

export const Card = styled.div`
	width: 365px;
	height: 500px;
	display: flex;
	flex-direction: column;
	border-radius: 16px;
	background: #c9cad9;
	color: black;
	word-break: break-all;
	overflow-y: hidden;
	position: relative;

	transition: 0.3s;

	&:hover {
		transform: scale(1.05);
		box-shadow: 0 0 40px -10px rgba(0, 0, 0, 0.25);
	}

	h1 {
		height: 80px;
		padding: 15px;
		display: flex;
		flex-direction: column;

		&::after {
			content: '';
			width: 70%;
			height: 5px;
			background: #f72585;
		}
	}

	.description {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-transform: uppercase;
		&::after {
			content: '';
			width: 40%;

			height: 2px;
			background: #333;
		}
	}

	p {
		text-align: center;
		font-size: 20px;
		padding: 15px;
	}

	.trash {
		position: absolute;
		bottom: 0;
		left: 5px;

		.trashIcon {
			cursor: pointer;
		}
	}

	button {
		position: absolute;
		bottom: 0;
		right: 5px;
		background: none;
		border: none;
		outline: none;

		.arrowIcon {
			cursor: pointer;
		}
	}
`;
