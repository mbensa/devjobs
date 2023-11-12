import React from "react";
import Header from "../components/Header";
import DetailsCardHeader from "../components/DetailsCardHeader";
import DetailsCard from "../components/DetailsCard";
import DetailsCardFooter from "../components/DetailsCardFooter";
import "./details.css";

export default function Details() {
  return (
    <>
      <Header></Header>
      <main className="mainContainer">
        <DetailsCardHeader></DetailsCardHeader>
        <DetailsCard></DetailsCard>
      </main>
      <DetailsCardFooter></DetailsCardFooter>
    </>
  );
}
