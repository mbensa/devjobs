import React, { useState } from "react";
import Card from "./Card";
import Button from "./Button";
import { data } from "./data";
import "./jobs.css";

export default function Jobs() {
  const [visible, setVisible] = useState(6);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 6);
  };

  const cards = data.slice(0, visible).map((item) => {
    return (
      <Card
        key={item.id}
        logo={item.logo}
        postedAt={item.postedAt}
        contract={item.contract}
        position={item.position}
        company={item.company}
        location={item.location}
      />
    );
  });

  return (
    <section className="jobsContainer">
      <div className="cardsContainer">{cards}</div>
      {visible < data.length && <Button onClick={showMoreItems} btnText="Load More" violet id="loadMoreBtn" />}
    </section>
  );
}
