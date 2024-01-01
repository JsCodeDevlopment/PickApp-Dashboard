import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/Login";
import { VerifyEmail } from "./pages/VerifyEmail";
import { Dashboard } from "./pages/Dashboard";
import { useTheme } from "./context/ThemeContext";
import { Theme } from "./pages/Theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRequestProducts } from "./servises/OrdersRequest";
import { Register } from "./pages/Register";

export function App() {
  const { currentTheme } = useTheme();
  const { orders } = useRequestProducts()
  console.log("log da api →", orders);

  return (
    <BrowserRouter>
      <ToastContainer
        position="bottom-right"
        draggable
        theme="dark"
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
      />
      <main data-theme={currentTheme} className="w-full h-screen bg-base-300">
        <Routes>
          <Route path="/verify" element={<VerifyEmail />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/theme" element={<Theme />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
