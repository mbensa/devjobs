import React from 'react';
import Card from './Card';
import { data } from './data';
import './jobs.css';

export default function Jobs() {
  const cards = data.map((item) => {
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

  return <section className="jobsContainer">{cards}</section>;
}
