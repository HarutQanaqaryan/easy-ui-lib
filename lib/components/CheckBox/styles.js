import { createUseStyles } from "react-jss";
export const useCheckBoxStyles = createUseStyles({
  checkBoxContainer: ({
    disabled
  }) => ({
    display: "inline-block",
    padding: "5px",
    width: "fit-content",
    height: "fit-content",
    borderRadius: "50%",
    zIndez: -1000,
    "&:hover": {
      background: !disabled ? "#f6f6f6" : ""
    }
  }),
  checkBox: ({
    disabled,
    clicked,
    indeterminate,
    currentColor
  }) => ({
    width: "16px",
    height: "16px",
    border: setBorderColor(disabled, clicked, currentColor),
    borderRadius: "4px",
    backgroundColor: setBackgroundColor(indeterminate, clicked, currentColor),
    cursor: "pointer",
    pointerEvents: disabled ? "none" : "all",
    "&:hover": {
      background: !indeterminate ? "#fff" : ""
    }
  }),
  indeterminateIcon: ({
    disabled,
    clicked,
    indeterminate,
    currentColor
  }) => ({
    fill: setIconColor(disabled, clicked, currentColor),
    zIndex: -1
  })
});

const setIconColor = (disabled, clicked, currentColor) => {
  if (disabled) {
    return "#cabcbc";
  }

  if (clicked) {
    return `${currentColor}`;
  } else {
    return "#fff";
  }
};

const setBorderColor = (disabled, clicked, currentColor) => {
  if (disabled) {
    return "2px solid #cabcbc";
  }

  if (clicked) {
    return `2px solid ${currentColor}`;
  }

  if (disabled && clicked) {
    return "2px solid #cabcbc";
  } else {
    return "2px solid #cabcbc";
  }
};

const setBackgroundColor = (indeterminate, clicked, currentColor) => {
  if (clicked) {
    return "#fff";
  }

  if (indeterminate && clicked) {
    return `${currentColor}`;
  } else if (indeterminate && !clicked) {
    return "#cabcbc";
  }
};

export const getStyle = (indeterminate, clicked, disabled, currentColor) => {
  if (!indeterminate && clicked) {
    return disabled ? {
      fill: "rgba(189,184,184,1)"
    } : {
      fill: `${currentColor}`
    };
  } else if (clicked) {
    return {
      fill: `${currentColor}`
    };
  }

  return {
    fill: "#fff"
  };
};
export const getClassName = (indeterminate, clicked) => {
  if (indeterminate && !clicked) return `.indeterminateIcon`;
  return;
};
export const getPath = (indeterminate, clicked) => {
  if (!indeterminate && clicked) return "M9 21.035l-9-8.638 2.791-2.87 6.156 5.874 12.21-12.436 2.843 2.817z";
  if (indeterminate) return "M0 10h24v4h-24z";
  return "";
};