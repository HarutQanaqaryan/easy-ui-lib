import Icon from "@mdi/react";
import React from "react";
import { mdiEmail, mdiBell, mdiChatProcessing, mdiBiohazard, mdiAccessPoint, mdiAccountCircle, mdiAlert, mdiAlertCircle } from "@mdi/js";
import "./Badge.css";
import PropTypes from "prop-types";
const iconTypes = {
  email: mdiEmail,
  notification: mdiBell,
  chat: mdiChatProcessing,
  toxic: mdiBiohazard,
  wireless: mdiAccessPoint,
  account: mdiAccountCircle,
  alert: mdiAlert,
  error: mdiAlertCircle
};
const badgeSizes = {
  small: 1,
  medium: 2,
  large: 3
};

const getIcon = icon => `${iconTypes[icon]}`;

export const Badge = ({
  size,
  rotate,
  color,
  icon,
  badgeContent,
  onClick
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: "inline-block"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "inline-block"
  }
}, /*#__PURE__*/React.createElement("button", {
  className: "badge-container",
  onClick: onClick
}, /*#__PURE__*/React.createElement(Icon, {
  path: getIcon(icon),
  size: badgeSizes[size],
  horizontal: true,
  vertical: true,
  rotate: rotate,
  color: color
}), /*#__PURE__*/React.createElement("span", {
  className: `badge-number--${size}`
}, badgeContent > 999 ? "+999" : badgeContent))));
Badge.defaultProps = {
  size: "medium",
  rotate: 180,
  icon: "email"
};
Badge.propTypes = {
  badgeContent: PropTypes.number,
  color: PropTypes.string,
  onClick: PropTypes.func
};