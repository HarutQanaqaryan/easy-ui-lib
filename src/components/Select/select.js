import React, { Fragment, useState } from "react";
import "./select.css";

export const Select = ({
  className,
  children,
  placeholder,
  value,
  onChange,
  id,
  multypleType,
}) => {
  const [isBlock, setIsBlock] = useState(false);
  const [selectValue, setSelectValue] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  const openOptions = () => {
    if (!isBlock) {
      setIsBlock(true);
    } else {
      setIsBlock(false);
    }
  };

  const addOption = (elem) => {
    selectValue.some((el) => el.value === elem)
      ? setSelectValue((prevState) => [
        ...prevState.filter((el) => el.value !== elem),
      ])
      : setSelectValue((prevState) => [
        ...prevState,
        { value: elem, selected: true },
      ]);
  };
  const changeSelectValue = (event) => {
    setIsClicked(true);
    if (multypleType) {
      const value = chackMultypleOptions(event);
      addOption(event.target.innerText);
      onChange !== undefined && onChange(value.map((el) => el.value));
    } else {
      chackOneOption(event);
      onChange !== undefined && onChange(event.target.innerText);
    }
  };
  const chackOneOption = ({ target: { innerText } }) => {
    if (selectValue.some((el) => el.value === innerText)) {
      setSelectValue([]);
      setIsClicked(false);
    } else {
      setSelectValue([{ value: innerText, selected: true }]);
    }
  };

  const chackMultypleOptions = ({ target: { innerText } }) => {
    if (selectValue.some((el) => el.value === innerText)) {
      return [...selectValue.filter((el) => el.value !== innerText)];
    } else {
      return [...selectValue, { value: innerText, selected: true }];
    }
  };
  const handleBlur = () => {
    setIsBlock(false);
    if (!isClicked) {
      setSelectValue([]);
    }
    if (selectValue.length === 0) {
      setIsClicked(false);
    }
  };

  const isItemInSelection = (item) => {
    if (selectValue.some((current) => current.value === item.props.children)) {
      return true;
    }
    return false;
  };
  const selectedItemStyle = (el) => {
    if (selectValue.some((el) => el.selected) && isItemInSelection(el)) {
      return "selected";
    } else {
      return "";
    }
  };
  const renderSelectComponent = (elem) => {
    return elem.map((el) => {
      if (!Array.isArray(el.props.children)) {
        return (
          <div
            className={selectedItemStyle(el)}
            key={el.props.id}
            onClick={changeSelectValue}
          >
            {el}
          </div>
        );
      } else {
        return (
          <Fragment key={el.props.id}>
            <b className="option-title--primary">{el.props.title}</b>
            {el.props.children.map((elem) => (
              <div
                className={selectedItemStyle(elem)}
                onClick={changeSelectValue}
                key={elem.props.id}
              >
                {elem}
              </div>
            ))}
          </Fragment>
        );
      }
    });
  };

  const multypleTitle = (item) => {
    switch (multypleType) {
      case "block":
        return (
          <div className="multyple-titles">
            {item.map((el, idx) => (
              <div className="multyple-title-block" key={idx}>
                {el.value}
              </div>
            ))}
          </div>
        );
      case "list":
        return (
          <div className="multyple-titles">
            {item.map((el, idx) => {
              if (item.length === 1 || idx === item.length - 1) {
                return (
                  <div key={idx} className="multiple-title-list">
                    {el.value}
                  </div>
                );
              } else {
                return (
                  <div key={idx} className="multiple-title-list">
                    {el.value} {","}
                  </div>
                );
              }
            })}
          </div>
        );
    }
  };

  return (
    <div style={{ display: "inline-block" }} value={value} id={id}>
      <div className={className ? className : "select--primary"} tabIndex="0" onBlur={handleBlur}>
        <>
          {isClicked && <p className="placeholder">{placeholder}</p>}
          <div className={"select-title--primary"} onClick={openOptions}>
            {isClicked
              ? multypleType
                ? multypleTitle(selectValue)
                : selectValue.map((el) => el.value)
              : placeholder}
            <span className="arrow-down"></span>
          </div>
        </>
        <div className="options--primary">
          {isBlock && renderSelectComponent(children)}
        </div>
      </div>
    </div>
  );
};

export const Option = ({ children, id }) => {
  return (
    <div id={id} className="option--primary">
      {children}
    </div>
  );
};

export const GroupOption = ({ children, title, id }) => {
  return (
    <div title={title} id={id}>
      {children}
    </div>
  );
};
