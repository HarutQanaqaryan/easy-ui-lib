import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Size } from './table';
import useStyles from "./styles";

export const TableBody = ({ className, children, onClick, ...props }) => {
    const tablesSize = useContext(Size);
    props = { ...props, tablesSize };
    const classes = useStyles(props);

    return (
        <div onClick={onClick} className={className ? className : classes.tableBody}>
            {children}
        </div>
    )
};

TableBody.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func
};
