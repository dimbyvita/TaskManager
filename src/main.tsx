import './index.css'
import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "./contexte/AuthContext";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
