import React from "react";
import "./box.css";

export default function Box(props) {
  const { color, children, className = "logoBox" } = props;

  const styles = {
    backgroundColor: color,
  };

  return (
    <div className={className} style={styles}>
      {children}
    </div>
  );
}
