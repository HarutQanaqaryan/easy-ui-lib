import React from "react";
import PropTypes from "prop-types";
import useStyles from "./styles";
export const TableContainer = ({
  onClick,
  className,
  children,
  ...props
}) => {
  const classes = useStyles(props);
  return /*#__PURE__*/React.createElement("div", {
    className: className ? className : classes.tableContainer,
    onClick: onClick
  }, children);
};
TableContainer.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func
};