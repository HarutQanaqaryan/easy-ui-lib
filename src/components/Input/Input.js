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

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
    onChange(e);
  };

  useEffect(() => () => { getStyle(placeholder, inputValue, variant) }, [inputValue]);

  return (
    <div style={{ display: "inline-block" }}>
      <div className={className ? className : "container"}>
        <input
          id={id}
          value={value}
          onChange={handleOnChange}
          type="text"
          className={getClass(variant, error)}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          defaultValue={defaultValue}
        />
        <label
          className={getClass(`${variant}-text`, error)}
          style={getStyle(placeholder, inputValue, variant)}
        >
          {label}
          {required && " *"}
        </label>
        {helperText && <span className={getHelperClass(error)}>{helperText}</span>}
      </div >
    </div>
  )
};

TextFieldInput.defaultProps = {
  variant: "standard",
  onChange: () => { }
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

