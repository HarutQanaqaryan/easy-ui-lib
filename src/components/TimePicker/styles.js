import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    wrapper: {
        display: "inline-block",
        fontFamily: "inherit",
    },
    clickedLabel: {
        fontSize: "14px",
        width: "82px",
        marginLeft: "6px",
        transition: "color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms"
    },
    label: {
        fontSize: "16px",
        padding: "4px",
        width: "82px",
        marginLeft: "6px",
        transform: "translate(0px, 23px) scale(1)",
        transition: "color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms"
    },
    timeInput: {
        fontFamily: "inherit",
        paddingLeft: "10px",
        width: "150px",
        border: "0px",
        borderBottom: [1, "solid", "grey"],
        fontSize: "18px",
        "&:focus": {
            outline: "none",
            borderBottom: [2, "solid", "#1dd4ce"]
        }
    },
    modalButton: {
        border: "0",
        margin: "0",
        display: "flex",
        cursor: "pointer",
        outline: "none",
        verticalAlign: "middle",
        textDecoration: "none",
        alignItems: "center",
        justifyContent: "center",
        background: "transparent"
    },
    errorMessage: {
        margin: "0",
        fontSize: "11px",
        color: "red"
    },
});


export const modalStyles = createUseStyles({
    modalWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: "0px",
        bottom: "0px",
        left: "0px",
        right: "0px",
        backgroundColor: "#2c3e50a3 ",
    },
    modalContainer: {
        width: "472px",
        height: "281px",
        backgroundColor: "#1DD4CE",
        display: "flex",
        flexDirection: "row"
    },
    modalTimeContainer: {
        height: "281px",
        width: "40%",
        backgroundColor: "#1DD4CE",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    },
    modalClockContainer: {
        height: "281px",
        width: "60%",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    hours: props => ({
        color: !props.isMinutesClicked ? "white" : "#ffffffa3",
        cursor: "pointer",
        height: "40px",
        marginRight: "5px",
        marginLeft: "5px",
        fontSize: "31px"
    }),
    minutes: props => ({
        color: props.isMinutesClicked ? "white" : "#ffffffa3",
        cursor: "pointer",
        height: "40px",
        marginRight: "5px",
        marginLeft: "5px",
        fontSize: "31px"
    }),
    AMorPM: {
        color: "white",
        cursor: "pointer",
        height: "40px",
        marginRight: "5px",
        marginLeft: "5px",
        fontSize: "31px"
    },
    AMPMcontainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "23px",
    },
    AMbtn: props => ({
        cursor: "pointer",
        fontSize: "20px",
        border: "0",
        marginTop: "10px",
        background: "transparent",
        color: props.isAMButtonSelected ? "white" : "#ffffffa3",
    }),
    PMbtn: props => ({
        cursor: "pointer",
        fontSize: "20px",
        border: "0",
        marginTop: "10px",
        background: "transparent",
        color: !props.isAMButtonSelected ? "white" : "#ffffffa3",
    }),
    clock: {
        width: "240px",
        height: "240px",
        borderRadius: "50%",
        position: "relative",
        "&::after": {
            content: "''",
            position: "absolute",
            backgroundColor: "#1dd4ce",
            width: "15px",
            height: "14px",
            top: "50%",
            left: "51%",
            transform: "translate(-50%, -50%)",
            borderRadius: "50%"
        }
    },
    number: {
        display: "-webkit-box",
        position: "absolute",
        width: "fit-content",
        height: "fit-content",
        textAlign: "center",
        fontFamily: "sans-serif",
        cursor: "default",
        pointerEvents: "all",
        fontSize: "17px",
        "&:hover": {
            fontSize: "20px"
        }
    },
    hand: props => ({
        zIndex: 11,
        cursor: "pointer",
        position: "absolute",
        borderRadius: "10px",
        bottom: "50%",
        left: "50%",
        width: "5px",
        height: "90px",
        backgroundColor: "#1dd4ce",
        transformOrigin: "bottom",
        transform: `rotateZ(${props.rotation}deg)`,
    }),

})

export default useStyles;