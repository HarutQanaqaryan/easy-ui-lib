import React from "react";
import PropTypes from "prop-types";
import useStyles from "./styles";

export const TableContainer = ({ className, onClick, children, ...props }) => {
    const classes = useStyles(props);

    return (
        <div
            onClick={onClick}
            className={className ? className : classes.tableContainer}>
            {children}
        </div>
    )
};

TableContainer.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func
};
