import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import { App } from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import { LoginProvider } from "./context/LoginContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LoginProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </LoginProvider>
  </React.StrictMode>
);
