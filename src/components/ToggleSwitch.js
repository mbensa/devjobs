import React from "react";
import { ReactComponent as Sun } from "../assets/desktop/icon-sun.svg";
import { ReactComponent as Moon } from "../assets/desktop/icon-moon.svg";
import "./toggleSwitch.css";
import { ChangeEventHandler } from "react";

const setDark = () => {
  //save a value and have it persist even after the user closes the app or reloads the page
  localStorage.setItem("theme", "dark");
  //setting the value on the html DOM element
  document.documentElement.setAttribute("data-theme", "dark");
};

const setLight = () => {
  localStorage.setItem("theme", "light");
  document.documentElement.setAttribute("data-theme", "light");
};

const storedTheme = localStorage.getItem("theme");

//checks the media query for the user's browser settings
const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

const defaultDark = storedTheme === "dark" || (storedTheme === null && prefersDark);

if (defaultDark) {
  setDark();
}

const toggleTheme: ChangeEventHandler<HTMLInputElement> = (e) => {
  if (e.target.checked) {
    setDark();
  } else {
    setLight();
  }
};

export default function ToggleSwitch() {
  return (
    <div className="toggleSwitchContainer">
      <Sun />
      <label className="toggle-switch">
        <input type="checkbox" onChange={toggleTheme} defaultChecked={defaultDark} />
        <span className="switch" />
      </label>
      <Moon />
    </div>
  );
}
