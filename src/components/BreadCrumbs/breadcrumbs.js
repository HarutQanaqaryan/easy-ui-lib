import { cloneElement, useEffect, useState } from "react";
import React from "react";
import "./breadcrumbs.css";

export const BreadCrumbs = ({ className, children, breadcrumbsStyle, separator, tag }) => {
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

  const renderCrumbs = (crumbs) => {
    if (!breadcrumbsStyle) {
      breadcrumbsStyle = "crumbs--primary";
    }
    return crumbs.map((el, idx) => {
      return lastItemIndex === idx ? (
        <span key={idx}>
          {cloneElement(el, {
            className: tag
              ? "crumbs last-crumb tag--crumb"
              : `crumbs last-crumb`,
          })}
        </span>
      ) : (
        <span key={idx}>
          {cloneElement(el, {
            className: tag
              ? `crumbs ${breadcrumbsStyle} tag--crumb`
              : `crumbs ${breadcrumbsStyle}`,
          })}
          <span>{separator}</span>
        </span>
      );
    });
  };

  const renderLongChildren = (crumbs) => {
    return (
      <>
        <span>
          {cloneElement(crumbs[0], {
            className: tag
              ? `crumbs ${breadcrumbsStyle} tag--crumb`
              : `crumbs ${breadcrumbsStyle}`,
          })}
        </span>
        <button className="crumb-btn" onClick={showHiddenCrumbs}>
          ...
        </button>
        <span>
          {cloneElement(lastItem, {
            className: tag
              ? "crumbs last-crumb tag--crumb"
              : `crumbs last-crumb`,
          })}
        </span>
      </>
    );
  };

  return (
    <nav className={className ? className : `breadcrumbs-container ${breadcrumbsStyle}`}>
      {isHiddenCrumb ? renderCrumbs(children) : renderLongChildren(children)}
    </nav>
  );
};
