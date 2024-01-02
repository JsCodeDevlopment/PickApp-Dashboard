import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/Login";
import { VerifiedEmail } from "./pages/VerifiedEmail";
import { Dashboard } from "./pages/Dashboard";
import { useTheme } from "./context/ThemeContext";
import { Theme } from "./pages/Theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Register } from "./pages/Register";
import { RecoverPassword } from "./pages/RecoverPassword";
import { VerifyEmail } from "./pages/VerifyEmail";

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
      <main data-theme={currentTheme} className="flex items-center justify-center w-full min-h-screen h-full bg-base-300">
        <Routes>
          <Route path="/verify" element={<VerifiedEmail />} />
          <Route path="/verified" element={<VerifyEmail />} />
          <Route path="/recover" element={<RecoverPassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/theme" element={<Theme />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
