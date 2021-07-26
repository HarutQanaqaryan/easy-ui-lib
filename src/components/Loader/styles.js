import { createUseStyles } from "react-jss";

export const useLoaderStyles = createUseStyles({
    loaderContainer: {
        display: "flex",
        flexDirection: "column",
        width: "fit-content",
        height: "fit-content"
    },
    loaderLabel: {
        color: "#989292"
    },
    "@keyframes spin": {
        from: { transform: "rotate(0deg)" },
        to: { transform: "rotate(360deg)" },
    },
    loader: ({ sizes, loaderColor }) => ({
        width: `${sizes.loaderSize}`,
        height: `${sizes.loaderSize}`,
        border: "2px solid",
        borderColor: `${loaderColor} transparent transparent`,
        borderRadius: "500rem",
        animation: `$spin 0.5s linear infinite`
    })
});


