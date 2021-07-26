import React from "react";
import PropTypes from "prop-types";
import { useStepConectorStyles } from "./styles";
export const StepConnector = ({ className }) => {
  const classes = useStepConectorStyles();
  return /*#__PURE__*/React.createElement("span", {
    className: className ? className : classes.connectorContainer
  });
};
StepConnector.propTypes = {
  className: PropTypes.string
};