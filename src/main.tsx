<<<<<<< HEAD
import "./index.css";
=======
import './index.css'
>>>>>>> 172494c122605f1dd6dec4d477fddad4e2575a23
import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "./contexte/AuthContext";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/router";
<<<<<<< HEAD
import { ThemeProvider } from "./contexte/ThemeContext";
=======
>>>>>>> 172494c122605f1dd6dec4d477fddad4e2575a23

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
<<<<<<< HEAD
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
=======
      <RouterProvider router={router} />
>>>>>>> 172494c122605f1dd6dec4d477fddad4e2575a23
    </AuthProvider>
  </React.StrictMode>
);
