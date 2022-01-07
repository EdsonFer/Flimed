import styled from 'styled-components';

export const Container = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 1rem;

	.title {
		font-family: var(--type-second);
		line-height: 1;
		font-size: 5rem;
		margin: 1rem 0;
		position: relative;
		z-index: 1;

		&::after {
			content: ' ';
			display: block;
			width: 1.5rem;
			height: 1.5rem;
			background: #fb1;
			position: absolute;
			bottom: 5px;
			left: -5px;
			border-radius: 0.2rem;
			z-index: -1;
		}
	}
`;
