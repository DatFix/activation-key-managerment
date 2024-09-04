import React, { useState, ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import ToastContainer from "../../components/Toast/toast";
import logo from "../../assets/logo.png";
import CyberLoading from "../../components/Loading/loading";

interface FormData {
  email: string;
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

interface Errors {
  email?: string;
  oldPassword?: string;
  newPassword?: string;
  confirmPassword?: string;
}

const ChangePasswordForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = (): boolean => {
    const newErrors: Errors = {};

    if (!validateEmail(formData.email)) {
      newErrors.email = "Email không hợp lệ.";
    }

    if (formData.oldPassword.length < 6) {
      newErrors.oldPassword = "Mật khẩu cũ phải có ít nhất 6 ký tự.";
    }

    if (!validatePassword(formData.newPassword)) {
      newErrors.newPassword =
        "Mật khẩu mới phải từ 6 đến 20 ký tự và chứa ít nhất một chữ hoa, một chữ thường, một số và một ký tự đặc biệt.";
    }

    if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = "Mật khẩu xác nhận không khớp.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (!validateForm()) {
      Object.values(errors).forEach((error) => {
        if (error) toast.error(error);
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(
        "https://software-authentication.onrender.com/auth/change-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Đã xảy ra lỗi");
      }

      setFormData({
        email: "",
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      });

      toast.success("Đổi mật khẩu thành công");
      handleNavigate();
    } catch (error: any) {
      toast.error(error.message);
      
      setTimeout(() => {
        window.location.href = '/change-password'
      }, 3000);
    }
  };

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (password: string) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,20}$/.test(password);

  const user_id = localStorage.getItem("user_id");

  const handleNavigate = () => {
    const componentType = user_id ? "user" : "admin";
    setTimeout(() => {
      navigate("/dashboard", { state: { componentType } });
    }, 3000);
  };

  return (
    <>
      {isLoading ? (
        <CyberLoading />
      ) : (
        <>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <h1 className="title">SM2A</h1>
          <div className="login-box">
            <h2>ĐỔI MẬT KHẨU</h2>
            <form id="form-login" onSubmit={(e) => e.preventDefault()}>
              <div className="user-box">
                <input
                  type="email"
                  className="form-input"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="user-box">
                <input
                  type={showOldPassword ? "text" : "password"}
                  className="form-input"
                  name="oldPassword"
                  value={formData.oldPassword}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="oldPassword">Mật khẩu cũ</label>
                <span
                  onClick={() => setShowOldPassword(!showOldPassword)}
                  style={{ cursor: "pointer" }}
                >
                  {showOldPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              <div className="user-box">
                <input
                  type={showNewPassword ? "text" : "password"}
                  className="form-input"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="newPassword">Mật khẩu mới</label>
                <span
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  style={{ cursor: "pointer" }}
                >
                  {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              <div className="user-box">
                <input
                  type={showNewPassword ? "text" : "password"}
                  className="form-input"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="confirmPassword">Xác nhận mật khẩu mới</label>
              </div>

              <div className="forget-password">
                <small>
                  <b onClick={handleNavigate}>Quay lại trang người dùng</b>
                </small>
              </div>
              <Link to="#" id="register-button" onClick={handleSubmit}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Đặt Lại Mật Khẩu
              </Link>
            </form>
          </div>
        </>
      )}
      <ToastContainer />
    </>
  );
};

export default ChangePasswordForm;
