import React from "react";
import PropTypes from "prop-types";
import useStyles from "./styles";
export const Table = ({
  className,
  children,
  size,
  onClick,
  ...props
}) => {
  const classes = useStyles(props);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    className: className ? className : classes.table
  }, /*#__PURE__*/React.createElement(Size.Provider, {
    value: size
  }, children));
};
export const Size = /*#__PURE__*/React.createContext(Table);
Table.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func
};