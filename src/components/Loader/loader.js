import PropTypes from 'prop-types';
import { useLoaderStyles } from "./styles";
import React, { useEffect, useState } from "react";

const colors = {
    primary: "#1DD4CE",
    secondary: "#2C3E50"
};

const LoaderSizes = {
    small: "small",
    medium: "medium",
    large: "large"
};

export const Loader = ({ className, size, color, label }) => {
    const [sizes, setSizes] = useState({ loaderSize: size, labelSize: "15px" });

    useEffect(() => {
        switch (size) {
            case LoaderSizes.small:
                setSizes({ loaderSize: "20px", labelSize: "9px" });
                break;
            case LoaderSizes.medium:
                setSizes({ loaderSize: "40px", labelSize: "15px" });
                break;
            case LoaderSizes.large: {
                setSizes({ loaderSize: "80px", labelSize: "23px" });
                break;
            }
            default:
                break;
        };
    }, [size]);

    const classes = useLoaderStyles({ sizes, loaderColor: colors[color] });

    return (
        <div className={className ? className : classes.loaderContainer}>
            <div className={classes.loader}>
            </div>
            {label && <span
                className={classes.loaderLabel}
                style={{ fontSize: sizes.labelSize }}
            >{label}</span>}
        </div>)
};

Loader.defaultProps = {
    color: "primary",
    size: "40px"
};

Loader.propTypes = {
    label: PropTypes.string
};


