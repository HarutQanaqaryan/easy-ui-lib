import { useEffect, useRef, useState } from "react";
import React from "react";
import "./dropdown.css";
const dropDownIcon = /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  style: {
    fill: "white"
  },
  width: "16",
  height: "16",
  viewBox: "0 -3 24 24"
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"
}));
let contentStyle = "";
let contentItemStyle = "";
let titleStyle = "";
export const DropDown = ({
  className,
  children,
  dropDownTitle,
  dropDownStyle,
  search
}) => {
  const [isBloc, setIsBloc] = useState(false);
  const [contentItems, setContentItems] = useState(children);
  const ref = useRef(null);

  const hideShowDropDown = () => {
    !isBloc ? setIsBloc(true) : setIsBloc(false);
  };

  const handleBlur = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsBloc(false);
    }
  };

  const renderContent = item => {
    return item.map(el => /*#__PURE__*/React.createElement("a", {
      href: el.props.href,
      className: `${contentItemStyle}`,
      key: el.props.id
    }, el.props.children));
  };

  useEffect(() => {
    document.addEventListener("click", handleBlur, true);
    return () => {
      document.removeEventListener("click", handleBlur, true);
    };
  }, []);

  const searchContentItem = ({
    target: {
      value
    }
  }) => {
    let filteredContent = contentItems.filter(el => {
      return el.props.children.toLowerCase().search(value.toLowerCase()) !== -1;
    });
    setContentItems(filteredContent);

    if (value.length === 0) {
      setContentItems(children);
    }
  };

  switch (dropDownStyle) {
    case "dropdown--primary":
      contentItemStyle = "dropdown--primary--content-item";
      contentStyle = "dropdown--primary--content";
      titleStyle = "dropdown--primary--title";
      break;

    case "dropdown--destructive":
      contentItemStyle = "dropdown--destructive--content-item";
      contentStyle = "dropdown--destructive--content";
      titleStyle = "dropdown--destructive--title";
      break;

    case "dropdown--neutral":
      contentItemStyle = "dropdown--neutral--content-item";
      contentStyle = "dropdown--neutral--content";
      titleStyle = "dropdown--neutral--title";
      break;

    default:
      contentItemStyle = "dropdown--primary--content-item";
      contentStyle = "dropdown--primary--content";
      titleStyle = "dropdown--primary--title";
  }

  return /*#__PURE__*/React.createElement("div", {
    onClick: hideShowDropDown,
    ref: ref,
    className: className ? className : `dropdown ${dropDownStyle}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `${titleStyle}`
  }, search ? /*#__PURE__*/React.createElement("input", {
    placeholder: dropDownTitle,
    className: "search-dropdown",
    onChange: e => searchContentItem(e)
  }) : /*#__PURE__*/React.createElement("div", {
    className: "dropdown-title"
  }, dropDownTitle), /*#__PURE__*/React.createElement("i", null, dropDownIcon)), /*#__PURE__*/React.createElement("div", {
    className: `${contentStyle}`,
    onBlur: handleBlur
  }, isBloc && renderContent(contentItems)));
};