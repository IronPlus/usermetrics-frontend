import { MonthlyPostsStatistics } from "../../models/dashboard";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

interface MonthlyStatComponentProps {
  stats: MonthlyPostsStatistics;
}

const MonthlyStatComponent: React.FC<MonthlyStatComponentProps> = ({
  stats,
}) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const chartOptions = {
    responsive: true,
  };

  const chartData = {
    labels,
    datasets: [
      {
        label: "Number of posts",
        data: stats,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div className="chart">
      <Bar options={chartOptions} data={chartData} />
    </div>
  );
};

export default MonthlyStatComponent;
