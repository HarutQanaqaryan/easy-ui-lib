import React from "react";
import useStyles from "./styles";
import PropTypes from "prop-types";

export const TableCell = ({ className, children, onClick, ...props }) => {

    const classes = useStyles(props);

    return (
        <div onClick={onClick} className={className ? className : classes.tableCell}>
            {children}
        </div>
    )
};

TableCell.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func
};
