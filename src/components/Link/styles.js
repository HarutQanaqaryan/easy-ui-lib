import { createUseStyles } from "react-jss";

export const useLinkStyles = createUseStyles({
    link: ({ color, size }) => ({
        textDecoration: "none",
        fontSize: size === "small" ? "15px" : "20px",
        fontFamily: "sans-serif",
        padding: size === "small" ? "5px" : "10px",
        cursor: "pointer",
        display: "inline-block",
        color: color === "primary" ? "#1DD4CE" : "#2C3E50",
        "&:link": {
            textDecoration: "none",
            fontSize: "20px",
        },
        "&:visited": {
            color: color === "primary" ? "#1DD4CE" : "#2C3E50"
        },
        "&:hover": {
            textDecoration: "underline",
            paddingBottom: "10px",
            textUnderlineOffset: "2.5px",
            textDecorationThickness: ".125em",
            textDecorationColor: color === "primary" ? "#1DD4CE" : "#2C3E50",
        }
    })
});