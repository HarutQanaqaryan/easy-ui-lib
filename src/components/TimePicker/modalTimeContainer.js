import React from "react";
import { modalStyles } from "./styles";

const ModalTimeContainer = ({ activeBar, setActiveBar, hour, minutes, timeConvention, setTimeConvention }) => {

    const classes = modalStyles({
        isMinutesClicked: activeBar === 'minutes',
        isAMButtonSelected: timeConvention === 'am',
    });

    return (
        <div className={classes.modalTimeContainer}>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <span onClick={() => setActiveBar('hour')} className={classes.hours}>{hour}</span>
                <h2 style={{ marginTop: "3px", color: "white" }}>:</h2>
                <span onClick={() => setActiveBar('minutes')} className={classes.minutes}>{minutes}</span>
                <span className={classes.AMorPM}>{timeConvention.toUpperCase()}</span>
            </div>
            <div className={classes.AMPMcontainer}>
                <button
                    className={classes.AMbtn}
                    onClick={() => setTimeConvention('am')}>AM</button>
                <button
                    className={classes.PMbtn}
                    onClick={() => setTimeConvention('pm')}>PM</button>
            </div>
        </div>
    )
};

export default ModalTimeContainer;