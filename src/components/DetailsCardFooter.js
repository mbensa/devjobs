import React from "react";
import Button from "./Button";
import Text from "./Text";
import "./detailsCardFooter.css";
import useMobile from "../hooks/useMobile";

export default function DeatilsCardFooter(props) {
  const { position, company } = props;
  const { isMobile } = useMobile();

  if (isMobile) {
    return (
      <footer className="detailsFooterContainer">
        <Button btnText="Apply Now" violet id="detailsFooterButton"></Button>
      </footer>
    );
  } else {
    return (
      <footer className="detailsFooterContainer">
        <div>
          <Text type="h3" className="detailsPosition">
            {position}
          </Text>
          <Text type="p">{company}</Text>
        </div>
        <Button btnText="Apply Now" violet id="detailsFooterButton"></Button>
      </footer>
    );
  }
}
