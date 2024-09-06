// src/components/RegisterForm.tsx
import React, { useState, useRef, ChangeEvent, MouseEvent } from "react";
import "./regiter.css";
import { Link, useNavigate } from "react-router-dom";
import { FormData, Errors } from "../../types/acccount";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import ToastContainer from "../../components/Toast/toast";
import CyberLoading from "../../components/Loading/loading";
import logo from "../../assets/logo.png";

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const passwordInputRef = useRef<HTMLInputElement | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const { firstname, lastname, email, phone, username, password } = formData;

    // Reset error messages
    setErrors({});

    // Validate
    const newErrors: Errors = {};
    if (!validateFirstnameName(firstname))
      newErrors.firstname = "Tên phải từ 2 đến 30 ký tự và chỉ chứa chữ cái.";
    if (!validatLastnameName(lastname))
      newErrors.lastname = "Họ phải từ 2 đến 30 ký tự và chỉ chứa chữ cái.";
    if (!validateEmail(email)) newErrors.email = "Email không hợp lệ.";
    if (!validatePhoneNumber(phone))
      newErrors.phone = "Số điện thoại không hợp lệ.";
    if (!validateUsername(username))
      newErrors.username =
        "Tên đăng nhập từ 6 đến 20 ký tự và không chứa ký tự đặc biệt.";
    if (!validatePassword(password))
      newErrors.password =
        "Mật khẩu phải từ 6 đến 20 ký tự và chứa ít nhất một chữ hoa, một chữ thường, một số và một ký tự đặc biệt.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(
        "https://www.sm2a.sdtc.vn/api/v1/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username,
            password,
            firstname,
            lastname,
            phone,
            email,
          }),
        }
      );

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || "Đã xảy ra lỗi");
      }

      const data = await response.json();
      // Clear form fields
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        username: "",
        password: "",
      });

      navigate("/");
      setTimeout(() => {
        if (data.message == "User created successfully") {
          toast.success("Đăng ký thành công");
        } else {
          toast.success(data.message);
        }
      }, 1000);
    } catch (error: any) {
      // Show error toast
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEyeClick = () => {
    setShowPassword((prevState) => !prevState);
  };

  const validateUsername = (username: string) =>
    /^[\w!@#$%^&*()-+=<>?]{6,20}$/.test(username);
  const validatePassword = (password: string) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,20}$/.test(password);
  const validateFirstnameName = (firstname: string) =>
    /^[\p{L}\s]{2,30}$/u.test(firstname);
  const validatLastnameName = (lastname: string) =>
    /^[\p{L}\s]{2,30}$/u.test(lastname);
  const validatePhoneNumber = (phoneNumber: string) =>
    /^(0[3|5|7|8|9][0-9]{8})$/.test(phoneNumber.replace(/\D/g, ""));
  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleNavigate = (direction: string) => {
    navigate(`/${direction}`);
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
            <h2>ĐĂNG KÝ</h2>
            <form id="form-login">
              <div className="full-name">
                <div className="user-box">
                  <input
                    type="text"
                    className="form-input"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="lastname">Họ</label>
                  {errors.lastname && (
                    <small className="error-message">{errors.lastname}</small>
                  )}
                </div>

                <div className="user-box">
                  <input
                    type="text"
                    className="form-input"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="firstname">Tên</label>
                  {errors.firstname && (
                    <small className="error-message">{errors.firstname}</small>
                  )}
                </div>
              </div>

              <div className="user-box">
                <input
                  type="text"
                  className="form-input"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="email">Email</label>
                {errors.email && (
                  <small className="error-message">{errors.email}</small>
                )}
              </div>

              <div className="user-box">
                <input
                  type="text"
                  className="form-input"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="phone">Số điện thoại</label>
                {errors.phone && (
                  <small className="error-message">{errors.phone}</small>
                )}
              </div>

              <div className="user-box">
                <input
                  type="text"
                  className="form-input"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="username">Tài khoản</label>
                {errors.username && (
                  <small className="error-message">{errors.username}</small>
                )}
              </div>

              <div className="user-box">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-input"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  ref={passwordInputRef}
                  required
                />
                <label htmlFor="password">Mật khẩu</label>
                <span
                  id="eye"
                  onClick={handleEyeClick}
                  style={{ cursor: "pointer", padding: "20px 0 0 0" }}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
                {errors.password && (
                  <small className="error-message">{errors.password}</small>
                )}
              </div>

              <div className="forget-password">
                <small>
                  Đã có tài khoản{" "}
                  <b onClick={() => handleNavigate("")}>Đăng Nhập</b> ngay
                </small>
                <small onClick={() => handleNavigate("forget-password")}>
                  Bạn quên mật khẩu?
                </small>
              </div>
              <Link to="#" id="register-button" onClick={handleSubmit}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Đăng ký
              </Link>
            </form>
          </div>
        </>
      )}
      <ToastContainer />
    </>
  );
};

export default RegisterForm;
