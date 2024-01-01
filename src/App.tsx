import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/Login";
import { VerifyEmail } from "./pages/VerifyEmail";
import { Dashboard } from "./pages/Dashboard";
import { useTheme } from "./context/ThemeContext";
import { Theme } from "./pages/Theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function App() {
  const { currentTheme } = useTheme();

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
      <main data-theme={currentTheme} className="w-full h-screen bg-primary">
        <Routes>
          <Route path="/verify" element={<VerifyEmail />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/theme" element={<Theme />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
