import React from "react";
import PropTypes from 'prop-types';
import { useLinkStyles } from "./styles";

export const Link = ({ className, size, color, onClick, to, children }) => {
    const classes = useLinkStyles({ color, size });

    return (
        <a
            onClick={onClick}
            className={className ? className : classes.link}
            href={to}>
            {children}
        </a>
    )
};

Link.defaultProps = {
    color: "primary",
    size: "large"
};

Link.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    to: PropTypes.string
};
