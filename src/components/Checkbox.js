import React from 'react';
import './checkbox.css';

export default function Checkbox() {

    return (
        <div className="checkboxContainer">
            <label className="labelContainer">
                Full Time
            <input type="checkbox" />
            <span className="checkmark"></span>
            </label>
        </div>
    )
}