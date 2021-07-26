import React from "react";
import PropTypes from "prop-types";
import { useStepperStyles } from "./styles";

export const Stepper = ({ className, activeStep, children }) => {
    const classes = useStepperStyles();
    return (
        <div className={className && className} style={{ display: "inline-block" }}>
            <div className={classes.stepperContainer}>
                <CurrentStep.Provider value={activeStep + 1}>
                    {children}
                </CurrentStep.Provider>
            </div>
        </div>
    )
};
export const CurrentStep = React.createContext(Stepper);

Stepper.propTypes = {
    className: PropTypes.string,
    activeStep: PropTypes.number
};
