export interface Theme {
    name: string;
    color: {
        backgroundColor: string;
        primary: string;
        secondary: string;
    };
}
export declare const lightTheme: Theme;
export declare const darkTheme: Theme;
