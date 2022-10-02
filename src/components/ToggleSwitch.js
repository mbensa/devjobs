import React from 'react';
import { ReactComponent as Sun } from '../assets/desktop/icon-sun.svg';
import { ReactComponent as Moon } from '../assets/desktop/icon-moon.svg';
import './toggleSwitch.css';

export default function ToggleSwitch() {
  return (
    <div className="toggleSwitchContainer">
      <Sun />
      <label className="toggle-switch">
        <input type="checkbox" />
        <span className="switch" />
      </label>
      <Moon />
    </div>
  );
}
