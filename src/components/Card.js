import React from 'react';
import Text from './Text';
import Logos from './Logos';
import './card.css';

export default function Card(props) {
  const { logo, postedAt, contract, position, company, location } = props;

  return (
    <div className="cardContainer">
      <Logos logo={logo} className="cardLogo" />
      <div className="cardTextContainer">
        <div className="cardContract">
          <Text type="p">{postedAt}</Text>
          <span className="cardContractDot">&#8226;</span>
          <Text type="p">{contract}</Text>
        </div>
        <Text type="h3" className="cardPosition">
          {position}
        </Text>
        <Text type="p">{company}</Text>
        <Text type="h4" className="cardLocation">
          {location}
        </Text>
      </div>
    </div>
  );
}
