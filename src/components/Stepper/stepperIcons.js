import React from "react";

export const getActiveIcon = ({ id, classes, isDisabled }) => (
    <svg
        className={classes.circleIcon}
        style={{ fill: isDisabled ? "#1b191975" : "#1DD4CE" }}
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="12" />
        <text className={classes.circleIconText} x="8.5" y="16">{id}</text>
    </svg>
);

export const getCheckedIcon = ({ isDisabled, classes }) => (
    <svg
        className={classes.checkedIcon}
        style={{ fill: isDisabled ? "#1b191975" : "#1DD4CE" }}
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24">
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 16.518l-4.5-4.319 1.396-1.435 3.078 2.937 6.105-6.218 1.421 1.409-7.5 7.626z" />
    </svg>
);

export const getErrorIcon = ({ isDisabled }) => (
    <svg
        style={{ fill: isDisabled ? "#1b191975" : "#ba1d1d" }}
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 24 24">
        <path d="M16.142 2l5.858 5.858v8.284l-5.858 5.858h-8.284l-5.858-5.858v-8.284l5.858-5.858h8.284zm.829-2h-9.942l-7.029 7.029v9.941l7.029 7.03h9.941l7.03-7.029v-9.942l-7.029-7.029zm-8.482 16.992l3.518-3.568 3.554 3.521 1.431-1.43-3.566-3.523 3.535-3.568-1.431-1.432-3.539 3.583-3.581-3.457-1.418 1.418 3.585 3.473-3.507 3.566 1.419 1.417z" />
    </svg>
);

