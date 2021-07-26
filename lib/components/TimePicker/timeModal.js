import React, { useState, useEffect, useCallback } from "react";
import ModalTimeContainer from "./modalTimeContainer";
import ModalClockContainer from "./modalClockContainer";
import { modalStyles } from "./styles";

const TimeModal = ({
  time,
  convention,
  closeModal,
  changeTime
}) => {
  const [rotation, setRotation] = useState(0);
  const [hour, setHour] = useState(time.split(":")[0]);
  const [activeBar, setActiveBar] = useState("hour");
  const [minutes, setMinutes] = useState(time.split(":")[1]);
  const [timeConvention, setTimeConvention] = useState(convention.toLowerCase());
  useEffect(() => {
    if (!time) {
      const date = new Date();
      const hour = String(date.getHours() % 12);
      const min = String(date.getMinutes());
      setHour(hour.length === 1 ? `0${hour}` : `${hour}`);
      setMinutes(min.length === 1 ? `0${min}` : `${min}`);
    }
  }, []);
  const handleCloseModal = useCallback(() => {
    closeModal(false);
    changeTime(`${hour}:${minutes} ${timeConvention.toUpperCase()}`);
  }, [hour, minutes, timeConvention]);
  const classes = modalStyles({
    isMinutesClicked: activeBar === 'minutes',
    isAMButtonSelected: timeConvention === 'am'
  });
  return /*#__PURE__*/React.createElement("div", {
    onClick: handleCloseModal,
    className: classes.modalWrapper
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    className: classes.modalContainer
  }, /*#__PURE__*/React.createElement(ModalTimeContainer, {
    activeBar: activeBar,
    setActiveBar: setActiveBar,
    hour: hour,
    minutes: minutes,
    timeConvention: timeConvention,
    setTimeConvention: setTimeConvention
  }), /*#__PURE__*/React.createElement(ModalClockContainer, {
    hour: hour,
    minutes: minutes,
    rotation: rotation,
    setRotation: setRotation,
    activeBar: activeBar,
    setHour: setHour,
    setMinutes: setMinutes
  })));
};

TimeModal.defaultProps = {
  convention: 'am'
};
export default TimeModal;