import React from "react";
import "./native-select.css";
const STYLES = ["native--select--primary", "native--select--neutral", "native--select--dark", "native--select--normal"];
export const NativeSelect = ({
  className,
  children,
  onChange,
  disabled,
  selectStyle,
  placeholder,
  form,
  multiple,
  name
}) => {
  const checkSelectStyle = STYLES.includes(selectStyle) ? selectStyle : STYLES[0];
  return /*#__PURE__*/React.createElement("select", {
    className: className ? className : `native--select ${checkSelectStyle}`,
    onChange: onChange,
    disabled: disabled,
    placeholder: placeholder,
    form: form,
    multiple: multiple,
    name: name
  }, children);
};