import React from "react";
import "./tooltip.css";

export const Tooltip = ({ className, children, tooltipStyle, position, content }) => {
  if (!tooltipStyle) {
    tooltipStyle = "tooltip--primary";
  }
  return (
    <div>
      <div className={className ? className : `${tooltipStyle} ${position}`} content={content}>
        {children}
      </div>
    </div>
  );
};
