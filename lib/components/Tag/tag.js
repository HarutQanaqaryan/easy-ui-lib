import React, { useCallback, useState } from "react";
import "./tag.css";
const types = {
  primary: "#1DD4CE",
  secondary: " #2C3E50"
};
export const Tag = ({
  className,
  placeholder,
  type
}) => {
  const [tags, setTags] = useState([]);
  const handleRemove = useCallback(el => setTags(prevState => prevState.filter(tag => tag !== el)), []);
  const handleKeyDown = useCallback(e => {
    const inputValue = e.target.value.trim();

    if (e.key === "Enter" && inputValue) {
      if (!tags.find(el => el.toLowerCase() === inputValue.toLowerCase())) {
        setTags([...tags, inputValue]);
      }

      e.target.value = null;
    } else if (e.key === "Backspace" && !inputValue) {
      handleRemove(tags[tags.length - 1]);
    }
  }, [tags, handleRemove]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-block"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: className ? className : "tag-container"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "tag-wrapper"
  }, tags.map((el, idx) => /*#__PURE__*/React.createElement("li", {
    key: el,
    className: "tag",
    style: {
      backgroundColor: `${types[type]}`
    }
  }, el, /*#__PURE__*/React.createElement("button", {
    onClick: () => handleRemove(el),
    className: "remove-btn"
  }, "x"))), /*#__PURE__*/React.createElement("li", {
    className: "main-container"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    onKeyDown: handleKeyDown,
    className: "tag-holder",
    placeholder: placeholder
  })))));
};
Tag.defaultProps = {
  type: "primary",
  placeholder: "Type here ..."
};