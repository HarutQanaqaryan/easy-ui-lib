import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Size } from "./table";
import useStyles from "./styles";
export const TableRow = ({
  className,
  children,
  onClick,
  ...props
}) => {
  const tablesSize = useContext(Size);
  props = {
    ...props,
    tablesSize
  };
  const classes = useStyles(props);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    className: className ? className : classes.tableRow
  }, children);
};
TableRow.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func
};
