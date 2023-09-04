import React from "react";
import { Paper } from "@mui/material";
import { Dashboard } from "../../models/dashboard";
import MonthlyStatComponent from "./monthly-stats-component";

interface DashboardComponentProps {
  dashboard: Dashboard;
}

const DashboardComponent: React.FC<DashboardComponentProps> = ({
  dashboard,
}) => {
  return (
    <Paper
      className="dashboard-component"
      sx={{ padding: 3, marginBottom: 4 }}
      elevation={8}
    >
      <h3>{dashboard.name}</h3>
      <p>
        <strong>The total number of posts made: </strong>
        {dashboard.total_posts}
      </p>
      <p>
        <strong>The median number of characters of posts: </strong>
        {dashboard.median_num_of_chars}
      </p>
      <div>
        <strong>The graph illustrating the monthly post count:</strong>
        <MonthlyStatComponent stats={dashboard.monthly_posts_statistics} />
      </div>
      <p>
        <strong>The longest post: </strong>
        {dashboard.longest_post}
      </p>
    </Paper>
  );
};

export default DashboardComponent;
