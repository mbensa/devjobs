import React from "react";
import Text from "./Text";
import Logos from "./Logos";
import Button from "./Button";
import "./detailsCardHeader.css";

export default function DeatilsCardHeader(props) {
  const { logo, company, website } = props;
  return (
    <section className="detailsHeaderContainer">
      <div className="detailsHeaderLogoContainer">
        <Logos logo="scoot" className="detailsHeaderLogo"></Logos>
      </div>
      <div className="detailsHeaderTextContainer">
        <div className="detailsHeaderText">
          <Text type="h2">company</Text>
          <Text type="p">website</Text>
        </div>
        <div className="detailsHeaderButton">
          <Button btnText="Company Site" violet id="detailsHeaderButton"></Button>
        </div>
      </div>
    </section>
  );
}
