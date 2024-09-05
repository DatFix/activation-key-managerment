import React, { useState, ChangeEvent, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Errors } from "../../types/acccount";
import { toast } from "react-toastify";
import ToastContainer from "../../components/Toast/toast";
import CyberLoading from "../../components/Loading/loading";
import logo from "../../assets/logo.png";

const ForgetPasswordForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({});
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Reset error messages
    setErrors({});

    // Validate email
    const newErrors: Errors = {};
    if (!validateEmail(email)) {
      newErrors.email = "Email không hợp lệ.";
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(
        "http://www.sm2a.sdtc.vn/auth/forgot-password",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || "Đã xảy ra lỗi");
      }

      // Show success message and redirect
      toast.success("OTP đã được gửi đến email của bạn.");
      setTimeout(() => {
        navigate("/reset-password");
      }, 3000); // Chờ 3 giây (3000 milliseconds) trước khi điều hướng
    } catch (error: any) {
      setErrors({ email: error.message });
    } finally {
      setIsLoading(false);
    }
  };

  const handleNavigate = (direction: string) => {
    navigate(`/${direction}`);
  };

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

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
            <h2>Nhập Email Tài Khoản</h2>
            <form id="form-login" onSubmit={handleSubmit}>
              <div className="user-box">
                <input
                  type="email"
                  className="form-input"
                  id="email"
                  value={email}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="email">Email</label>
              </div>
              {errors.email && (
                <small id="error-email" style={{ color: "rgb(249, 43, 43)" }}>
                  {errors.email}
                </small>
              )}
              <div className="forget-password">
                <small onClick={() => handleNavigate("")}>
                  <b>Quay lại</b>
                </small>
              </div>
              <Link
                to="#"
                id="register-button"
                onClick={(e) => {
                  e.preventDefault();
                  handleSubmit(e as any); // Trigger form submission
                }}
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Lấy OTP
              </Link>
            </form>
          </div>
        </>
      )}

      <ToastContainer />
    </>
  );
};

export default ForgetPasswordForm;
