import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Page404 } from "./Components/index.js";
import {
  blogRoutes,
  caseStudiesRoutes,
  developersChandigarhRoutes,
  homeRoutes,
  saudiRoutes,
  servicesRoutes,
} from "./routes/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      ...homeRoutes,
      ...servicesRoutes,
      ...blogRoutes,
      ...caseStudiesRoutes,
      ...developersChandigarhRoutes,
      ...saudiRoutes,
      { path: "*", element: <Page404 /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider RouterProvider router={router}>
    <App />
  </RouterProvider>
);
