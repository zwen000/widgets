import React, { useState, useEffect, useRef } from "react";


const Dropdown = (props) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const onBodyClick = (event) => {
            if (ref.current.contains(event.target)) {
                return;
            }
            setOpen(false);
        };

        document.body.addEventListener("click",
            onBodyClick,
            { capture: true }
        );

        // CLEANUP Function
        return () => {
            document.body.removeEventListener("click", onBodyClick, { capture: true });
        };

    }, []);

    const renderedOptions = props.options.map((option) => {
        if (option.value === props.selected.value) {
            return null;
        }
        return (
            <div
                key={option.value}
                className="item"
                onClick={() => props.onSelectedChange(option)}
            >
                {option.label}
            </div>
        );
    });


    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{props.label}</label>
                <div
                    onClick={() => setOpen(!open)}
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{props.selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>{renderedOptions}</div>
                </div>
            </div>

            {/* <h1 className={`ui header ${props.selected.value}`}>This text is {props.selected.value}</h1> */}
        </div>
    );
};

export default Dropdown;
