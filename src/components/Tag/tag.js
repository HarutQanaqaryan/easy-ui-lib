import React, { useCallback, useState } from "react";

import "./tag.css";

const types = {
    primary: "#1DD4CE",
    secondary: " #2C3E50"
};

export const Tag = ({ className, placeholder, type }) => {
    const [tags, setTags] = useState([]);

    const handleRemove = useCallback((el) => setTags(prevState => prevState.filter(tag => tag !== el)), []);

    const handleKeyDown = useCallback((e) => {
        const inputValue = e.target.value.trim();

        if (e.key === "Enter" && inputValue) {
            if (!tags.find((el) => el.toLowerCase() === inputValue.toLowerCase())) {
                setTags([...tags, inputValue]);
            }
            e.target.value = null;
        } else if (e.key === "Backspace" && !inputValue) {
            handleRemove(tags[tags.length - 1]);
        }
    }, [tags, handleRemove]);

    return (
        <div style={{ display: "inline-block" }}>
            <div className={className ? className : "tag-container"}>
                <ul className="tag-wrapper">
                    {tags.map((el, idx) => (
                        <li
                            key={el}
                            className="tag"
                            style={{
                                backgroundColor: `${types[type]}`,
                            }}>
                            {el}
                            <button onClick={() => handleRemove(el)} className="remove-btn">
                                x
                            </button>
                        </li>
                    ))}
                    <li className="main-container">
                        <input
                            type="text"
                            onKeyDown={handleKeyDown}
                            className="tag-holder"
                            placeholder={placeholder}
                        />
                    </li>
                </ul>
            </div >
        </div>
    );
};


Tag.defaultProps = {
    type: "primary",
    placeholder: "Type here ..."
};

