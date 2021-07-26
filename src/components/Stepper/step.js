import React from "react";
import PropTypes from 'prop-types';

import { useStepStyles } from "./styles";
import { useContext, useEffect, useState } from "react";
import { CurrentStep } from "./stepper";
import { getActiveIcon, getCheckedIcon, getErrorIcon } from "./stepperIcons";

const colors = {
    isDisabled: "#1b191975",
    error: "#ba1d1d"
};

const getColor = ({ isDisabled, error }) => {
    if (isDisabled) {
        return colors[isDisabled]
    } else if (error) {
        return colors[error]
    }
};

export const Step = ({ className, error, checked, disabled, id, children }) => {
    const [isDisabled, setIsDisabled] = useState(disabled);
    const [isChecked, setIsChecked] = useState(checked);
    const [isActive, setIsActive] = useState();
    const activeStep = useContext(CurrentStep);

    useEffect(() => {
        if (!activeStep && !error && !isChecked) {
            setIsActive(true);
        }
    }, [activeStep, error, isChecked]);


    useEffect(() => {
        if (id < activeStep) {
            setIsChecked(true);
            setIsActive(false);
            setIsDisabled(true);
        } else if (id === activeStep) {
            setIsActive(true);
            setIsChecked(false);
            setIsDisabled(false);
        } else if (id > activeStep) {
            setIsActive(true);
            setIsChecked(false);
            setIsDisabled(true);
        }
    }, [id, activeStep])

    const classes = useStepStyles();

    return (
        <span
            disabled={isDisabled}
            error={error}
            checked={isChecked}
            className={className ? className : classes.step}
            style={{ color: getColor({ isDisabled, error }) }}
        >
            <span className={classes.stepWrapper}>
                <span>
                    {isActive && getActiveIcon({ id, classes, isDisabled })}
                    {error && getErrorIcon({ isDisabled })}
                    {isChecked && !error && getCheckedIcon({ isDisabled, classes })}
                </span>
                {children}
            </span>
        </span>
    )
};

Step.propTypes = {
    id: PropTypes.number.isRequired,
    error: PropTypes.bool,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    className: PropTypes.string
};


