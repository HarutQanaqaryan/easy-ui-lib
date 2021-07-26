import React, { useState, useRef, useEffect } from "react";
import "./slider.css";

export const Slider = ({
  className,
  step = 1,
  min = 0,
  max = 100,
  defaultValue = 1,
  onChange,
  disabled,
  marks,
  label,
  sliderColor,
}) => {
  const thumbRef = useRef(null);
  const railRef = useRef(null);
  const [labelValue, setLabelValue] = useState(defaultValue);
  const [progressPercent, setProgressPercent] = useState(defaultValue);

  const stepCount = (max - min) / step;
  const dots = [];
  let shift;
  let result;

  const checkSelectStyle = () => {
    switch (sliderColor) {
      case "primary":
        return "#1DD4CE";
      case "destructive":
        return "#2C3E50";
      default:
        return "#989292";
    }
  };

  const handleMouseDown = (event) => {
    thumbRef.current.focus();
    event.preventDefault();
    let sliderSpanCoords = getCoords(thumbRef);
    shift = event.pageX - sliderSpanCoords.left;
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  const onMouseMove = (event) => {
    let sliderCoords = getCoords(railRef);
    let left =
      ((event.clientX - shift - sliderCoords.left) / sliderCoords.width) * 100;

    let stepCount = (max - min) / step;
    let stepPercent = 100 / stepCount;
    let stepLeft = Math.round(left / stepPercent) * stepPercent;
    if (stepLeft < 0) {
      stepLeft = 0;
    }
    if (stepLeft > 100) {
      stepLeft = 100;
    }
    result = ((stepLeft / stepPercent) * step).toFixed();
    setProgressPercent(stepLeft);
    setLabelValue(parseInt(result) + min);
  };
  const onMouseUp = () => {
    document.removeEventListener("mouseup", onMouseUp);
    document.removeEventListener("mousemove", onMouseMove);
  };
  const getCoords = (elem) => {
    let boxLeft = elem.current.offsetLeft;
    let boxRight = boxLeft + elem.current.offsetWidth;

    return {
      left: boxLeft + window.pageXOffset,
      width: boxRight - boxLeft,
    };
  };
  const handleClick = (e) => {
    thumbRef.current.focus();
    setLabelValue(parseInt(e.target.value));
    setProgressPercent(
      e.nativeEvent.layerX / (railRef.current.clientWidth / 100)
    );
  };
  const getDots = () => {
    for (let i = 1; i < stepCount; i++) {
      dots.push(i);
    }
    return dots;
  };
  const renderMarks = () => {
    getDots();
    return dots.map((el) => {
      return (
        <span
          id={el}
          className="slider-dots"
          key={el}
          style={{ "--left-percent": (100 / stepCount) * el + "%" }}
        ></span>
      );
    });
  };
  useEffect(() => {
    onChange !== undefined && onChange(labelValue);
  }, [labelValue]);
  return (
    <div className={className ? className : "slider-root"}>
      <span className="slider-line">
        <span className="slider-rail" ref={railRef}></span>
        <span
          className="slider-track"
          style={{
            left: 0,
            width: progressPercent + "%",
            "--track-color": checkSelectStyle(),
          }}
        ></span>
      </span>
      <span
        ref={thumbRef}
        tabIndex="0"
        className={!disabled ? "slider-thumb" : "disabled-thumb"}
        value={labelValue}
        content={labelValue}
        style={{
          left: progressPercent + "%",
          "--tooltip-color": checkSelectStyle(),
          "--thumb-color": checkSelectStyle(),
          "--opacity-label": label ? "1" : "0",
        }}
        onMouseDown={(e) => !disabled && handleMouseDown(e)}
      ></span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        defaultValue={labelValue}
        onClick={(e) => !disabled && handleClick(e)}
        className="hidden-input"
      />
      {marks && renderMarks()}
    </div>
  );
};
