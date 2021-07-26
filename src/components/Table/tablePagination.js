import React from "react";
import useStyles from "./styles";
import PropTypes from "prop-types";

export const TablePagination = ({ className, rowsPerPageOptions, nextPageIconClick, onPrevPageonClick, ...props }) => {
    const classes = useStyles(props);

    return (
        <div className={className ? className : classes.tablePagination}>
            <div className={classes.rowCountWrapper}>
                <span>Rows per page:</span>
                <form>
                    <select style={{ height: "26px", cursor: "pointer", fontSize: "15px" }}>
                        {rowsPerPageOptions.map((el, i) => {
                            return (
                                <option key={i}>{el}</option>
                            )
                        })}
                    </select>
                </form>
            </div>
            <div className={classes.iconWrapper}>
                <i className={classes.ripple} onClick={onPrevPageonClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="1 0 24 24">
                        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
                    </svg>
                </i>
                <i className={classes.ripple} onClick={nextPageIconClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="1 0 24 24">
                        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
                    </svg>
                </i>
            </div>
        </div>
    )
};

TablePagination.defaultProps = {
    rowsPerPageOptions: [],
    size: "medium"
};

TablePagination.propTypes = {
    rowsPerPageOptions: PropTypes.array.isRequired,
    nextPageIconClick: PropTypes.func,
    onPrevPageonClick: PropTypes.func,
    className: PropTypes.string
};
