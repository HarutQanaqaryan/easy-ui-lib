import React, { Fragment, useState } from "react";
import "./select.css";
export const Select = ({
  className,
  children,
  placeholder,
  value,
  onChange,
  id,
  multypleType
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

  const addOption = elem => {
    selectValue.some(el => el.value === elem) ? setSelectValue(prevState => [...prevState.filter(el => el.value !== elem)]) : setSelectValue(prevState => [...prevState, {
      value: elem,
      selected: true
    }]);
  };

  const changeSelectValue = event => {
    setIsClicked(true);

    if (multypleType) {
      const value = chackMultypleOptions(event);
      addOption(event.target.innerText);
      onChange !== undefined && onChange(value.map(el => el.value));
    } else {
      chackOneOption(event);
      onChange !== undefined && onChange(event.target.innerText);
    }
  };

  const chackOneOption = ({
    target: {
      innerText
    }
  }) => {
    if (selectValue.some(el => el.value === innerText)) {
      setSelectValue([]);
      setIsClicked(false);
    } else {
      setSelectValue([{
        value: innerText,
        selected: true
      }]);
    }
  };

  const chackMultypleOptions = ({
    target: {
      innerText
    }
  }) => {
    if (selectValue.some(el => el.value === innerText)) {
      return [...selectValue.filter(el => el.value !== innerText)];
    } else {
      return [...selectValue, {
        value: innerText,
        selected: true
      }];
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

  const isItemInSelection = item => {
    if (selectValue.some(current => current.value === item.props.children)) {
      return true;
    }

    return false;
  };

  const selectedItemStyle = el => {
    if (selectValue.some(el => el.selected) && isItemInSelection(el)) {
      return "selected";
    } else {
      return "";
    }
  };

  const renderSelectComponent = elem => {
    return elem.map(el => {
      if (!Array.isArray(el.props.children)) {
        return /*#__PURE__*/React.createElement("div", {
          className: selectedItemStyle(el),
          key: el.props.id,
          onClick: changeSelectValue
        }, el);
      } else {
        return /*#__PURE__*/React.createElement(Fragment, {
          key: el.props.id
        }, /*#__PURE__*/React.createElement("b", {
          className: "option-title--primary"
        }, el.props.title), el.props.children.map(elem => /*#__PURE__*/React.createElement("div", {
          className: selectedItemStyle(elem),
          onClick: changeSelectValue,
          key: elem.props.id
        }, elem)));
      }
    });
  };

  const multypleTitle = item => {
    switch (multypleType) {
      case "block":
        return /*#__PURE__*/React.createElement("div", {
          className: "multyple-titles"
        }, item.map((el, idx) => /*#__PURE__*/React.createElement("div", {
          className: "multyple-title-block",
          key: idx
        }, el.value)));

      case "list":
        return /*#__PURE__*/React.createElement("div", {
          className: "multyple-titles"
        }, item.map((el, idx) => {
          if (item.length === 1 || idx === item.length - 1) {
            return /*#__PURE__*/React.createElement("div", {
              key: idx,
              className: "multiple-title-list"
            }, el.value);
          } else {
            return /*#__PURE__*/React.createElement("div", {
              key: idx,
              className: "multiple-title-list"
            }, el.value, " ", ",");
          }
        }));
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-block"
    },
    value: value,
    id: id
  }, /*#__PURE__*/React.createElement("div", {
    className: className ? className : "select--primary",
    tabIndex: "0",
    onBlur: handleBlur
  }, /*#__PURE__*/React.createElement(React.Fragment, null, isClicked && /*#__PURE__*/React.createElement("p", {
    className: "placeholder"
  }, placeholder), /*#__PURE__*/React.createElement("div", {
    className: "select-title--primary",
    onClick: openOptions
  }, isClicked ? multypleType ? multypleTitle(selectValue) : selectValue.map(el => el.value) : placeholder, /*#__PURE__*/React.createElement("span", {
    className: "arrow-down"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "options--primary"
  }, isBlock && renderSelectComponent(children))));
};
export const Option = ({
  children,
  id
}) => {
  return /*#__PURE__*/React.createElement("div", {
    id: id,
    className: "option--primary"
  }, children);
};
export const GroupOption = ({
  children,
  title,
  id
}) => {
  return /*#__PURE__*/React.createElement("div", {
    title: title,
    id: id
  }, children);
};