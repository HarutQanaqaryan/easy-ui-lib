import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import "./Input.css";
import { getClass, getStyle, getHelperClass } from "./styles";
export const TextFieldInput = ({
  className,
  label,
  variant,
  required,
  disabled,
  readOnly,
  defaultValue,
  helperText,
  error,
  placeholder,
  onChange,
  value,
  id
}) => {
  const [inputValue, setInputValue] = useState(value);

  const handleOnChange = e => {
    setInputValue(e.target.value);
    onChange(e);
  };

  useEffect(() => () => {
    getStyle(placeholder, inputValue, variant);
  }, [inputValue]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-block"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: className ? className : "container"
  }, /*#__PURE__*/React.createElement("input", {
    id: id,
    value: value,
    onChange: handleOnChange,
    type: "text",
    className: getClass(variant, error),
    placeholder: placeholder,
    disabled: disabled,
    readOnly: readOnly,
    defaultValue: defaultValue
  }), /*#__PURE__*/React.createElement("label", {
    className: getClass(`${variant}-text`, error),
    style: getStyle(placeholder, inputValue, variant)
  }, label, required && " *"), helperText && /*#__PURE__*/React.createElement("span", {
    className: getHelperClass(error)
  }, helperText)));
};
TextFieldInput.defaultProps = {
  variant: "standard",
  onChange: () => {}
};
TextFieldInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  helperText: PropTypes.string,
  defaultValue: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  error: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.any
};