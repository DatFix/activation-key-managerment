import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "../pages/Register/register";
import Login from "../pages/Login/login";
import ForgetPassword from "../pages/ForgetPassword/forget-password";
import ResetPassword from "../pages/ResetPassword/reset-password";
import ChangePassWord from "../pages/ChangePassword/change-password";
import Dashboard from "../pages/Dashboard/dashboard";
import Document from "../pages/Document/document";


const AppRouter = () => {
  const isLogin = sessionStorage.getItem("isLogin");
  return (
    <>
      <Router>
        <Routes>
          {isLogin !== "true" ? (
            <>
              <Route path="/register" element={<Register />} />
              <Route path="/" element={<Login />} />
              <Route path="/forget-password" element={<ForgetPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />
            </>
          ) : (
            <>
              <Route path="/change-password" element={<ChangePassWord />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/document" element={<Document />} />
            </>
          )}
           
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;
