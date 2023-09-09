import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DashboardsComponent from "./components/dashboards/dashboards-component";
import PostsComponent from "./components/posts/posts-component";
import ErrorComponent from "./components/shared/error-component";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostsComponent />}></Route>
        <Route path="/posts" element={<PostsComponent />}></Route>
        <Route path="/dashboards" element={<DashboardsComponent />}></Route>
        <Route
          path="/error"
          element={<ErrorComponent errorMessage="Something went wrong." />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
