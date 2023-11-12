import React, { useState } from "react";
import Card from "./Card";
import Button from "./Button";
import "./jobs.css";
import { Link } from "react-router-dom";

export default function Jobs(props) {
  const { data } = props;
  const [visible, setVisible] = useState(6);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 6);
  };

  console.log(data);

  const cards = data.slice(0, visible).map((item) => {
    return (
      <Link key={item.id} to={`details/${item.id}`}>
        <Card
          logo={item.logo}
          postedAt={item.postedAt}
          contract={item.contract}
          position={item.position}
          company={item.company}
          location={item.location}
        />
      </Link>
    );
  });

  return (
    <div className="jobsContainer">
      <div className="cardsContainer">{cards}</div>
      {visible < data.length && <Button onClick={showMoreItems} btnText="Load More" violet id="loadMoreBtn" />}
    </div>
  );
}
