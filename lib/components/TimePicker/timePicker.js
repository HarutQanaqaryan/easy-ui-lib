import React, { useState } from "react";
import Proptypes from "prop-types";
import useStyles from "./styles";
import TimeModal from "./timeModal";
export const TimePicker = ({ className, label, onChange }) => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBlur = () => {
    if (!inputValue) {
      setErrorMessage(false);
    }
  };

  const handleInput = ({
    target: {
      value
    }
  }) => {
    const reg = /^(0?[1-9]|1[012])(:[0-5]\d)$/;

    if (!isNaN(value.replace(":", ""))) {
      if (value.length <= 5) {
        setInputValue(value);
      }

      if (value.length === 5) {
        if (!reg.test(value)) {
          setErrorMessage(true);
        } else {
          setErrorMessage(false);
        }

        setInputValue(prevState => prevState + "AM");
      }

      if (value.length === 2) {
        setInputValue(prevState => prevState + ":");
      }
    }
  };

  const openModal = () => {
    if (errorMessage === false) {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: className ? className : classes.wrapper
  }, /*#__PURE__*/React.createElement("label", {
    className: inputValue !== "" ? classes.clickedLabel : classes.label
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      flexDirection: "row"
    }
  }, /*#__PURE__*/React.createElement("input", {
    onInput: handleInput,
    value: inputValue,
    type: "text",
    onBlur: handleBlur,
    className: classes.timeInput,
    onChange: onChange
  }), /*#__PURE__*/React.createElement("button", {
    className: classes.modalButton
  }, /*#__PURE__*/React.createElement("span", {
    className: classes.iconContainer,
    onClick: openModal
  }, /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    xmlns: "http://www.w3.org/2000/svg",
    fillRule: "evenodd",
    clipRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 11h6v1h-7v-9h1v8z"
  }))))), /*#__PURE__*/React.createElement("p", {
    className: classes.errorMessage
  }, errorMessage ? "* This is not a valid time !" : "")), isModalOpen && /*#__PURE__*/React.createElement(TimeModal, {
    changeTime: value => {
      setInputValue(value);
      onChange && onChange({
        target: {
          value
        }
      });
    },
    closeModal: setIsModalOpen,
    time: inputValue.split(' ')[0],
    convention: inputValue.split(' ')[1]
  }));
};
TimePicker.proptypes = {
  label: Proptypes.string,
  className: Proptypes.string,
  onChange: Proptypes.func
};