import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import { App } from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import { LoginProvider } from "./context/LoginContext";
import { OrderProvider } from "./context/OrderContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LoginProvider>
      <OrderProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </OrderProvider>
    </LoginProvider>
  </React.StrictMode>
);
