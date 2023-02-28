import React from "react";
import "./checkbox.css";

export default function Checkbox(props) {
  const { className } = props;

  return (
    <div className={className}>
      <label className="labelContainer">
        Full Time
        <input type="checkbox" />
        <span className="checkmark"></span>
      </label>
    </div>
  );
}
