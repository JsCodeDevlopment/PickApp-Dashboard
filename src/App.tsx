import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/Login";
import { VerifyEmail } from "./pages/VerifyEmail";
import { Dashboard } from "./pages/Dashboard";
import { useTheme } from "./context/ThemeContext";

export function App() {
  const { currentTheme } = useTheme();

  return (
    <BrowserRouter>
      <main data-theme={currentTheme} className="w-full h-screen bg-primary">
        <Routes>
          <Route path="/verify" element={<VerifyEmail />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
