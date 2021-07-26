import { cloneElement, useEffect, useState } from "react";
import React from "react";
import "./breadcrumbs.css";
export const BreadCrumbs = ({
  className,
  children,
  breadcrumbsStyle,
  separator,
  tag
}) => {
  const [isHiddenCrumb, setIsHiddenCrumb] = useState(false);
  const lastItemIndex = children.length - 1;
  const lastItem = children[children.length - 1];
  useEffect(() => {
    if (children.length < 5) {
      setIsHiddenCrumb(true);
    }
  }, []);

  const showHiddenCrumbs = () => {
    setIsHiddenCrumb(true);
  };

  const renderCrumbs = crumbs => {
    if (!breadcrumbsStyle) {
      breadcrumbsStyle = "crumbs--primary";
    }

    return crumbs.map((el, idx) => {
      return lastItemIndex === idx ? /*#__PURE__*/React.createElement("span", {
        key: idx
      }, /*#__PURE__*/cloneElement(el, {
        className: tag ? "crumbs last-crumb tag--crumb" : `crumbs last-crumb`
      })) : /*#__PURE__*/React.createElement("span", {
        key: idx
      }, /*#__PURE__*/cloneElement(el, {
        className: tag ? `crumbs ${breadcrumbsStyle} tag--crumb` : `crumbs ${breadcrumbsStyle}`
      }), /*#__PURE__*/React.createElement("span", null, separator));
    });
  };

  const renderLongChildren = crumbs => {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/cloneElement(crumbs[0], {
      className: tag ? `crumbs ${breadcrumbsStyle} tag--crumb` : `crumbs ${breadcrumbsStyle}`
    })), /*#__PURE__*/React.createElement("button", {
      className: "crumb-btn",
      onClick: showHiddenCrumbs
    }, "..."), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/cloneElement(lastItem, {
      className: tag ? "crumbs last-crumb tag--crumb" : `crumbs last-crumb`
    })));
  };

  return /*#__PURE__*/React.createElement("nav", {
    className: className ? className : `breadcrumbs-container ${breadcrumbsStyle}`
  }, isHiddenCrumb ? renderCrumbs(children) : renderLongChildren(children));
};