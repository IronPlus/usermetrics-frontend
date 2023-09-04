import { Container, CssBaseline, Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import React, { useEffect, useState } from "react";
import { Dashboard } from "../../models/dashboard";
import getDashboards from "../../services/dashboard-service";
import HeaderComponent from "../shared/header-component";
import DashboardComponent from "./dashboard-component";
import ScrollTop from "../shared/scroll-top-component";
import ProgressComponent from "../shared/progress-component";
import { useNavigate } from "react-router-dom";

interface DashboardsComponentState {
  dashboards: Dashboard[] | null;
}

const DashboardsComponent: React.FC = () => {
  const initialState = (): DashboardsComponentState => {
    return { dashboards: null };
  };

  const [state, setState] = useState(initialState);

  const navigate = useNavigate();

  useEffect(() => {
    if (state.dashboards) return;
    getDashboards()
      .then((dashboards) => {
        setState({ dashboards: dashboards });
      })
      .catch(() => {
        navigate("/error");
      });
  });

  if (state.dashboards != null) {
    return (
      <React.Fragment>
        <CssBaseline />
        <HeaderComponent />
        <Container
          className="dashboards-container"
          maxWidth="md"
          sx={{ marginBottom: 5 }}
        >
          <div className="dashboards-content">
            <h2 id="back-to-top-anchor">User dashboards</h2>
            {state.dashboards.map((dashboard) => (
              <DashboardComponent
                key={dashboard.user_id}
                dashboard={dashboard}
              />
            ))}
          </div>
        </Container>
        <ScrollTop>
          <Fab size="small">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </React.Fragment>
    );
  } else return <ProgressComponent />;
};

export default DashboardsComponent;
