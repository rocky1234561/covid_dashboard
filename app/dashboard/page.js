'use client';
import Layout from "../../components/Layout";
import Stats from "../../components/stats";
import ChartComponent from "../../components/chart";

export default function Dashboard() {
  return (
    <Layout>
      <h3 style={{color:"black"}}>Welcome to the COVID-19 Dashboard</h3>
      <Stats/>
      <ChartComponent/>
    </Layout>
  );
}