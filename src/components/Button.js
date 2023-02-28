import React from "react";
import "./button.css";
import { ReactComponent as Search } from "../assets/desktop/icon-search.svg";
import { ReactComponent as Filter } from "../assets/mobile/icon-filter.svg";

export default function Button(props) {
  const { searchIcon, btnText, violet, filterIcon, onClick, id } = props;

  const styles = {
    backgroundColor: violet ? "#5964E0" : "",
  };

  return (
    <button className="button" id={id} style={styles} onClick={onClick}>
      {searchIcon && <Search />}
      {filterIcon && <Filter />}
      {btnText}
    </button>
  );
}
