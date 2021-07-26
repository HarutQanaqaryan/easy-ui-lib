import { createUseStyles } from 'react-jss';


export const useStepperStyles = createUseStyles({
    stepperContainer: {
        display: "flex",
        margin: "0 auto",
        padding: 24,
        minWidth: "400px",
        alignItems: "flex-start",
        flexDirection: "row",
        backgroundColor: "#fff",
    }
});

export const useStepStyles = createUseStyles({
    step: {
        flex: 1,
        paddingRight: 8,
        paddingLeft: 8,
        zIndex: 0
    },
    stepWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center"
    },
    circleIcon: {
        fill: "#1DD4CE",
    },
    circleIconText: {
        fontSize: "0.75rem",
        fontWeight: 700,
        fill: "#fff"
    },
    checkedIcon: {
        fill: "#1DD4CE"
    }

});

export const useStepLabelStyles = createUseStyles({
    labelContainer: {
        width: "100%",
    },
    label: {
        margin: 0,
        textAlign: "center",
        marginTop: 16,
        fontWeight: 500,
        lineHeight: 1.43,
        letterSpacing: "0.01071em"
    }
});

export const useStepConectorStyles = createUseStyles({
    connectorContainer: {
        height: "1px",
        backgroundColor: "#00000045",
        flex: "1 1 auto",
        marginTop: "13px",
    }
});

