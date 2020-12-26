type colorT = { primary: string; secondary: string }

export interface ThemeIf {
	colors: colorT
}

export const defaultTheme: ThemeIf = {
	colors: {
		primary: '#f72585',
		secondary: '#4cc9f0',
	},
}
