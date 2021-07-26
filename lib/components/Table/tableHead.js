import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Size } from "./table";
import useStyles from "./styles";
export const TableHead = ({
  className,
  children,
  onClick,
  ...props
}) => {
  const Tablesize = useContext(Size);
  props = {
    ...props,
    Tablesize
  };
  const classes = useStyles(props);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    className: className ? className : classes.tableHead
  }, children);
};
TableHead.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func
};