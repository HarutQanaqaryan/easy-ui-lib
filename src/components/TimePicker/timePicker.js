import React, { useState } from "react";
import Proptypes from "prop-types";
import useStyles from "./styles";
import TimeModal from "./timeModal";

export const TimePicker = ({ className, label, onChange }) => {
    const classes = useStyles();
    const [inputValue, setInputValue] = useState("");
    const [errorMessage, setErrorMessage] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);


    const handleBlur = () => {
        if (!inputValue) {
            setErrorMessage(false);
        }
    };

    const handleInput = ({ target: { value } }) => {
        const reg = /^(0?[1-9]|1[012])(:[0-5]\d)$/;

        if (!isNaN(value.replace(":", ""))) {
            if (value.length <= 5) {
                setInputValue(value);
            }
            if (value.length === 5) {
                if (!reg.test(value)) {
                    setErrorMessage(true);
                } else {
                    setErrorMessage(false);
                }
                setInputValue(prevState => prevState + "AM");
            }
            if (value.length === 2) {
                setInputValue(prevState => prevState + ":");
            }
        }
    };

    const openModal = () => {
        if (errorMessage === false) {
            setIsModalOpen(true);
        } else {
            setIsModalOpen(false);
        }
    };

    return (
        <>
            <div className={className ? className : classes.wrapper}>
                <label className={inputValue !== "" ? classes.clickedLabel : classes.label}>{label}</label>
                <div style={{ display: "inline-flex", flexDirection: "row" }}>
                    <input
                        onInput={handleInput}
                        value={inputValue}
                        type='text'
                        onBlur={handleBlur}
                        className={classes.timeInput}
                        onChange={onChange}
                    />
                    <button className={classes.modalButton}>
                        <span className={classes.iconContainer} onClick={openModal}>
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 11h6v1h-7v-9h1v8z" /></svg>
                        </span>
                    </button>
                </div>
                <p className={classes.errorMessage}>
                    {errorMessage ? "* This is not a valid time !" : ""}
                </p>
            </div>
            {
                isModalOpen && (
                    <TimeModal
                        changeTime={(value) => {
                            setInputValue(value);
                            onChange && onChange({ target: { value } });
                        }}
                        closeModal={setIsModalOpen}
                        time={inputValue.split(' ')[0]}
                        convention={inputValue.split(' ')[1]}
                    />
                )
            }
        </>
    )
};

TimePicker.propTypes = {
    label: Proptypes.string,
    className: Proptypes.string,
    onChange: Proptypes.func
};

