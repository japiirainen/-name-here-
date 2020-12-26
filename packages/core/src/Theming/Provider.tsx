import React from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme, ThemeIf } from './theme'

interface ProviderProps {
	theme?: ThemeIf
}

export const NameHereProvider: React.FC<ProviderProps> = ({
	theme,
	children,
}) => {
	return (
		<ThemeProvider theme={theme || defaultTheme}>{children}</ThemeProvider>
	)
}
