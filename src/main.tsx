import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import { App } from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import { OrderProvider } from "./context/OrderContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <OrderProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </OrderProvider>
  </React.StrictMode>
);
