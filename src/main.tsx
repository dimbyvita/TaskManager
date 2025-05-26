
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "./contexte/AuthContext";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/router";
import { ThemeProvider } from "./contexte/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);
