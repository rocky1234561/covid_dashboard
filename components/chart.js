import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";
import { covidStats } from "../data/covid_data";

// ✅ Register required Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ChartComponent = ({theme}) => {
  const data = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
    datasets: [
      {
        label: "Daily Cases",
        data: covidStats.dailyCases,
        borderColor: "red",
        backgroundColor: "pink",
      },
    ],
  };

  return <Line data={data} />;
};

export default ChartComponent;