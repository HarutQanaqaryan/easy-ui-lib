import React from "react";
import { modalStyles } from "./styles";

const ModalTimeContainer = ({
  activeBar,
  setActiveBar,
  hour,
  minutes,
  timeConvention,
  setTimeConvention
}) => {
  const classes = modalStyles({
    isMinutesClicked: activeBar === 'minutes',
    isAMButtonSelected: timeConvention === 'am'
  });
  return /*#__PURE__*/React.createElement("div", {
    className: classes.modalTimeContainer
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "row"
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => setActiveBar('hour'),
    className: classes.hours
  }, hour), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: "3px",
      color: "white"
    }
  }, ":"), /*#__PURE__*/React.createElement("span", {
    onClick: () => setActiveBar('minutes'),
    className: classes.minutes
  }, minutes), /*#__PURE__*/React.createElement("span", {
    className: classes.AMorPM
  }, timeConvention.toUpperCase())), /*#__PURE__*/React.createElement("div", {
    className: classes.AMPMcontainer
  }, /*#__PURE__*/React.createElement("button", {
    className: classes.AMbtn,
    onClick: () => setTimeConvention('am')
  }, "AM"), /*#__PURE__*/React.createElement("button", {
    className: classes.PMbtn,
    onClick: () => setTimeConvention('pm')
  }, "PM")));
};

export default ModalTimeContainer;