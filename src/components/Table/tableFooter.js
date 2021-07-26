import React from "react";
import useStyles from "./styles";
import PropTypes from "prop-types";

export const TableFooter = ({ className, onCLick, children, ...props }) => {
    const classes = useStyles(props);
    return (
        <div
            onClick={onCLick}
            className={className ? className : classes.tableFooter}>
            {children}
        </div>
    )
};

TableFooter.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func
};
