import React from "react";
import "./checkbox.css";

export default function Checkbox(props) {
  const { className, register } = props;

  return (
    <div className={className}>
      <label className="labelContainer">
        Full Time
        <input type="checkbox" {...register("checkbox")} />
        <span className="checkmark"></span>
      </label>
    </div>
  );
}
