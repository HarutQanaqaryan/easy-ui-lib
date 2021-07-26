import React from "react";
import PropTypes from "prop-types";
import { useStepLabelStyles } from "./styles";
export const StepLabel = ({
  className,
  children
}) => {
  const classes = useStepLabelStyles();
  return /*#__PURE__*/React.createElement("span", {
    className: className ? className : classes.labelContainer
  }, /*#__PURE__*/React.createElement("span", {
    className: classes.label
  }, children));
};
StepLabel.propTypes = {
  className: PropTypes.string
};