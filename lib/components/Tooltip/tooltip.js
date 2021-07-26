import React from "react";
import "./tooltip.css";
export const Tooltip = ({
  className,
  children,
  tooltipStyle,
  position,
  content
}) => {
  if (!tooltipStyle) {
    tooltipStyle = "tooltip--primary";
  }

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: className ? className : `${tooltipStyle} ${position}`,
    content: content
  }, children));
};