import React from "react";
import PropTypes from "prop-types";
import { useStepConectorStyles } from "./styles";

export const StepConnector = ({ className }) => {
    const classes = useStepConectorStyles();
    return (
        <span className={className ? className : classes.connectorContainer}></span>
    )
};

StepConnector.propTypes = {
    className: PropTypes.string
};