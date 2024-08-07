import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home/home";
import World from "./pages/world/world";
import NewsGridWrapper from "./components/news-grid-wrapper/news-grid-wrapper";

const routes = [
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: "business",
    element: <NewsGridWrapper type="business" />,
  },
  {
    path: "india",
    element: <NewsGridWrapper type="india" />,
  },
  {
    path: "politics",
    element: <NewsGridWrapper type="politics" />,
  },
  {
    path: "education",
    element: <NewsGridWrapper type="education" />,
  },
  {
    path: "sports",
    element: <NewsGridWrapper type="sports" />,
  },
  {
    path: "technology",
    element: <NewsGridWrapper type="technology" />,
  },
  {
    path: "entertainment",
    element: <NewsGridWrapper type="entertainment" />,
  },
  {
    path: "health",
    element: <NewsGridWrapper type="health" />,
  },
  {
    path: "world",
    element: <World />,
  },
];

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routes,
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
