export interface Theme {
	name: string;
	color: {
		backgroundColor: string;
		primary: string;
		secondary: string;
	};
}

export const lightTheme: Theme = {
	name: 'LIGHT',
	color: {
		backgroundColor: '#fff',
		primary: '#007bff',
		secondary: '#6c757d',
	},
};

export const darkTheme: Theme = {
	name: 'DARK',
	color: {
		backgroundColor: '#000',
		primary: '#fff',
		secondary: '#6c757d',
	},
};
