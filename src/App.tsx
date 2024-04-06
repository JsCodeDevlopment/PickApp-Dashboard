import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/Login";
import { AuthenticateToken } from "./pages/AuthenticateToken";
import { Dashboard } from "./pages/Dashboard";
import { useTheme } from "./context/ThemeContext";
import { Theme } from "./pages/Theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Register } from "./pages/Register";
import { RecoverPassword } from "./pages/RecoverPassword";
import { LoginProvider } from "./context/LoginContext";
import { NewOrder } from "./pages/NewOrder";
import { NewItem } from "./pages/NewItems";
import { CartProvider } from "./context/CartContext";
import { NewCategory } from "./pages/NewCategory";
import { Wait } from "./pages/Wait";
import { ChangePassword } from "./pages/ChangePassword";
import { EditProfile } from "./pages/EditProfile";
import { SaveUserForm } from "./components/user-components/SaveUserForm";
import { ChangeUserPasswordForm } from "./components/user-components/ChangeUserPasswordForm";
import { ManagementUserTable } from "./components/ManagementUsersTable";
import { SaveTable } from "./components/table-components/SaveTable";
import { Charts } from "./pages/Charts";
import { AllOrders } from "./pages/chartPages/AllOrders";

export function App() {
  const { currentTheme } = useTheme();

  return (
    <BrowserRouter>
      <LoginProvider>
        <ToastContainer
          position="bottom-right"
          draggable
          theme="dark"
          hideProgressBar={false}
          closeOnClick={true}
          pauseOnHover={true}/>
        <main
          data-theme={currentTheme}
          className="flex items-center justify-center w-full min-h-screen h-full bg-base-300">
          <Routes>
            <Route path="/authenticate" element={<AuthenticateToken />} />
            <Route path="/recover" element={<RecoverPassword />} />
            <Route path="/wait" element={<Wait />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/charts" element={<Charts />} >
              <Route index element={<AllOrders />} />
            </Route>
            <Route path="/dashboard/edit-profile" element={<EditProfile />}>
              <Route index element={<SaveUserForm />} />
              <Route path="change-password" element={<ChangeUserPasswordForm />}/>
              <Route path="user-management" element={<ManagementUserTable />} />
              <Route path="table-management" element={<SaveTable />} />
            </Route>
            <Route path="/dashboard/theme" element={<Theme />} />
            <Route path="/dashboard/new-category" element={<NewCategory />} />
            <Route path="/dashboard/new-item" element={<NewItem />} />
            <Route path="/dashboard/new-order" 
            element={
                <CartProvider>
                  <NewOrder />
                </CartProvider>
              }/>
          </Routes>
        </main>
      </LoginProvider>
    </BrowserRouter>
  );
}
