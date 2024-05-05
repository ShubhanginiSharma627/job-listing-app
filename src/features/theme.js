import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#1976d2", // Example primary color
        },
        success: {
            main: "#4caf50", // Success color for salary, etc.
        },
    },
    typography: {
        fontFamily: "Arial, sans-serif",
        body1: {
            color: "#333",
        },
    },
    overrides: {
        MuiCard: {
            root: {
                borderRadius: 15,
                margin: "16px",
                padding: "16px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                backgroundColor: "#ffffff",
            },
        },
        MuiTypography: {
            h5: {
                fontWeight: "bold",
                fontSize: "1rem",
            },
            body1: {
                color: "#666",
                fontSize: "0.8rem",
            },
        },
        MuiButton: {
            root: {
                marginTop: "16px",
            },
        },
    },
});
