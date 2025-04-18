import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  // Route,
  RouterProvider,
} from "react-router-dom";

import "./assets/styles/index.css";
import "./assets/styles/bootstrap.custom.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import HomeScreen from "./screens/HomeScreen";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <React.Suspense fallback={<div>Loading...</div>}>
          <App />
        </React.Suspense>
      }
    >
      {/*   <Route index={true} path="/" element={<HomeScreen />} /> */}
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
