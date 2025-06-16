'use client';
import { Card } from "@nextui-org/react";
import { covidStats } from "../data/covid_data";

const Stats = () => {
  return (
    <div>
      <Card ><h4>Total Cases: {covidStats.totalCases}</h4></Card>
      <Card ><h4>Total Deaths: {covidStats.totalDeaths}</h4></Card>
      <Card><h4>Total Recovered: {covidStats.totalRecovered}</h4></Card>
    </div>
  );
};

export default Stats;