import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: "#556ee6",
            dark: "#3147ad",
            light: "#a6b0cf",
            contrastText: "#FFFFFF"
        },
        secondary: {
            main: "#79829c",
            dark: "#2a3042",
            light: "#f3f3f8",
            contrastText: "#212529"
        }
    },
    typography: {
        fontSize: 13,
        fontFamily: [
            "Cairo",
            "sans-serif"
        ].join(',')
    }
});

export default theme;