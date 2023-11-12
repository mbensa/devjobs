import React from "react";
import Button from "./Button";
import "./detailsCardFooter.css";

export default function DeatilsCardFooter(props) {
  return (
    <footer className="detailsFooterContainer">
      <Button btnText="Apply Now" violet id="detailsFooterButton"></Button>
    </footer>
  );
}
