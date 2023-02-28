import React from "react";
import "./box.css";

export default function Box(props) {
  const { color, children } = props;

  const styles = {
    backgroundColor: color,
  };

  return (
    <div className="logoBox" style={styles}>
      {children}
    </div>
  );
}
