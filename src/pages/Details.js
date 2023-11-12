import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import DetailsCardHeader from "../components/DetailsCardHeader";
import DetailsCard from "../components/DetailsCard";
import DetailsCardFooter from "../components/DetailsCardFooter";
import "./details.css";
import { useParams } from "react-router-dom";
import { data } from "../components/data";

export default function Details() {
  const { cardId } = useParams();
  const [job, setJob] = useState();

  useEffect(() => {
    setJob(data.find((job) => job.id == cardId));
  }, [cardId]);

  if (!job) {
    return null;
  }

  return (
    <>
      <Header></Header>
      <main className="mainContainer">
        <DetailsCardHeader logo={job.logo} company={job.company} website={job.website}></DetailsCardHeader>
        <DetailsCard
          postedAt={job.postedAt}
          contract={job.contract}
          position={job.position}
          location={job.location}
        ></DetailsCard>
      </main>
      <DetailsCardFooter position={job.position} company={job.company}></DetailsCardFooter>
    </>
  );
}
