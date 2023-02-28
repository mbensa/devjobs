import React from "react";
import ToggleSwitch from "./ToggleSwitch";
import { ReactComponent as Logo } from "../assets/desktop/logo.svg";
import "./header.css";

export default function Header() {
  return (
    <div className="headerContainer">
      <Logo className="mainLogo" />
      <ToggleSwitch />
    </div>
  );
}
