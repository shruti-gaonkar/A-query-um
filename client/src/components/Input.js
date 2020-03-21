import React from "react";

const Input = props => {
    return (
        (props.type === "radio") ?
            <label>
                <input id={props.name}
                    name={props.name}
                    value={props.value}
                    type={props.type || "text"}
                    ref={props.inputRef}
                    className={props.className}
                    style={props.style}
                    onChange={props.onChange}
                    defaultChecked={props.defaultChecked} />
                <span>{props.label}</span>
            </label>
            :
            <div className="input-field">
                <input id={props.name}
                    name={props.name}
                    value={props.value}
                    type={props.type || "text"}
                    ref={props.inputRef}
                    className={props.className}
                    style={props.style}
                    onChange={props.onChange} />
                <label htmlFor={props.name}>{props.label}</label>
            </div>
    );
};

export default Input;  
