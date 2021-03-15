import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false);

    const ref = useRef();

    useEffect(() => {
        document.body.addEventListener('click', (evt) => {
            if (ref.current && ref.current.contains(evt.target)) {
                return;
            }

            setOpen(false);
        });
    }, []);

    const renderedOptions = options.map((option) => {
        if (option.value === selected.value) {
            return null;
        }

        return (
            <div
                className="item"
                key={option.value}
                onClick={() => {
                    onSelectedChange(option);
                }}
            >
                {option.label}
            </div>
        );
    });

    return (
        <div className="ui form" ref={ref}>
            <div className="field">
                <label className="label">Select a Color</label>
                <div
                    className="ui selection dropdown"
                    onClick={() => {
                        setOpen(!open);
                    }}
                >
                    <i
                        className={`dropdown icon ${
                            open ? 'visble-active' : ''
                        }`}
                    ></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;
