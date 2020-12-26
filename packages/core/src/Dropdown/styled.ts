import styled from 'styled-components'

export const DdButtton = styled.button`
	position: relative;
	border: none;
	color: var(--puheettextcolor);
	background-color: inherit;
	font-family: var(--puheetmainfont);
	font-size: var(--puheetmainfontsize);
	font-weight: var(--puheetmainfontweight);
	display: flex;
	align-self: flex-start;

	:hover {
		cursor: pointer;
		color: #fafa;
	}

	:focus {
		outline: none;
	}
`

export const DdButtonContainer = styled.div`
	display: flex;
	align-items: center;
`
