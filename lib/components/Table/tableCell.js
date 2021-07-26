import React from "react";
import PropTypes from "prop-types";
import useStyles from "./styles";
export const TableCell = ({
  className,
  children,
  onClick,
  ...props
}) => {
  const classes = useStyles(props);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    className: className ? className : classes.tableCell
  }, children);
};
TableCell.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func
};