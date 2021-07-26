import React from "react";
import useStyles from "./styles";
import PropTypes from "prop-types";
export const TablePagination = ({
  className,
  rowsPerPageOptions,
  nextPageIconClick,
  onPrevPageonClick,
  ...props
}) => {
  const classes = useStyles(props);
  return /*#__PURE__*/React.createElement("div", {
    className: className ? className : classes.tablePagination
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.rowCountWrapper
  }, /*#__PURE__*/React.createElement("span", null, "Rows per page:"), /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("select", {
    style: {
      height: "26px",
      cursor: "pointer",
      fontSize: "15px"
    }
  }, rowsPerPageOptions.map((el, i) => {
    return /*#__PURE__*/React.createElement("option", {
      key: i
    }, el);
  })))), /*#__PURE__*/React.createElement("div", {
    className: classes.iconWrapper
  }, /*#__PURE__*/React.createElement("i", {
    className: classes.ripple,
    onClick: onPrevPageonClick
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "22",
    height: "14",
    viewBox: "1 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
  }))), /*#__PURE__*/React.createElement("i", {
    className: classes.ripple,
    onClick: nextPageIconClick
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "22",
    height: "14",
    viewBox: "1 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"
  })))));
};
TablePagination.defaultProps = {
  rowsPerPageOptions: [],
  size: "medium"
};
TablePagination.propTypes = {
  rowsPerPageOptions: PropTypes.array.isRequired,
  nextPageIconClick: PropTypes.func,
  onPrevPageonClick: PropTypes.func,
  className: PropTypes.string
};