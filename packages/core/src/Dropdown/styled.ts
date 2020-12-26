import styled from 'styled-components'
import { defaultTheme } from '../Theming/theme'

export const DdButtton = styled.button`
	position: relative;
	border: none;
	color: ${(props) => props.theme.colors.textColor};
	background-color: ${(props) => props.theme.colors.primary};
	font-family: ${(props) => props.theme.colors.fontFamily};
	font-size: 20px;
	font-weight: normal;
	display: flex;
	align-self: flex-start;
	padding: 3px 5px;
	border-radius: 3px;

	:hover {
		cursor: pointer;
		color: #fafa;
	}

	:focus {
		outline: none;
	}
`

DdButtton.defaultProps = {
	theme: defaultTheme,
}

export const DdButtonContainer = styled.div`
	display: flex;
	align-items: center;
`
