import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import { App } from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import { LoginProvider } from "./context/LoginContext";
import { StatusProvider } from "./context/StatusContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LoginProvider>
      <StatusProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </StatusProvider>
    </LoginProvider>
  </React.StrictMode>
);
