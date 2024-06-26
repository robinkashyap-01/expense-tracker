import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/index.css";

import { RouterProvider } from "react-router-dom";
import router from "./router";
import AuthProvider from "./contexts/AuthContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
