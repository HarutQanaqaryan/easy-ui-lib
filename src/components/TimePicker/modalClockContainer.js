import React, { useEffect, useCallback } from "react";
import { modalStyles } from "./styles";
import { hoursData, minutesData } from "./TimePickerData";

const getClockStyle = ({ key, rotationAngle, activeBar }) => {
    if (activeBar === "minutes") {
        if (key % 5 === 0) {
            return { transform: `${rotationAngle}`, cursor: "pointer" }
        } else {

            return { transform: `${rotationAngle}`, cursor: "pointer", opacity: 0 }
        }
    }
    return { transform: `${rotationAngle}`, cursor: "pointer" }
}

const ModalClockContainer = ({ hour, minutes, rotation, setRotation, activeBar, setHour, setMinutes }) => {

    const onHourClick = useCallback(({ target: { innerText: value } }) => {
        setHour(value.length === 1 ? `0${value}` : value);
        const nextRotation = value === '12' ? 0 : Number(value) * 30;
        setRotation(nextRotation.toString());
    }, []);

    const onMinuteClick = useCallback(({ target: { innerText: value } }) => {
        setMinutes(value);
        const nextRotation = Number(value) * 6;
        setRotation(nextRotation.toString());
    }, []);

    useEffect(() => {
        if (activeBar === "hour") {
            setRotation(hour * 30);
        } else {
            setRotation(minutes * 6);
        }
    }, [hour, minutes, activeBar]);

    const classes = modalStyles({ rotation });
    return (
        <div className={classes.modalClockContainer}>
            <div className={classes.clock}>
                <div className={classes.hand} />
                {
                    Object.entries(activeBar === "hour" ? hoursData : minutesData).map(([key, rotationAngle]) => (
                        <span
                            key={key}
                            className={classes.number}
                            onClick={activeBar === "hour" ? onHourClick : onMinuteClick}
                            style={getClockStyle({ key, rotationAngle, activeBar })}
                        >
                            {key}
                        </span>
                    ))
                }
            </div>
        </div>
    )
}

export default ModalClockContainer;

