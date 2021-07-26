import React from "react";
import PropTypes from "prop-types";
import useStyles from "./styles";

export const Table = ({ className, children, size, onClick, ...props }) => {

    const classes = useStyles(props);

    return (
        <div
            onClick={onClick}
            className={className ? className : classes.table}>
            <Size.Provider value={size}>
                {children}
            </Size.Provider>
        </div>
    )
};

export const Size = React.createContext(Table);

Table.propTypes = {
    className: PropTypes.string,
    size: PropTypes.string,
    onClick: PropTypes.func
};
