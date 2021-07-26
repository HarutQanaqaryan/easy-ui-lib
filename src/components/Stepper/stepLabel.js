import React from "react";
import PropTypes from "prop-types";
import { useStepLabelStyles } from "./styles";

export const StepLabel = ({ className, children }) => {
    const classes = useStepLabelStyles();
    return (
        <span
            className={className ? className : classes.labelContainer}>
            <span className={classes.label}>
                {children}
            </span>
        </span>
    )
};

StepLabel.propTypes = {
    className: PropTypes.string
};

