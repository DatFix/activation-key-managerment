import React, { useState, useRef, ChangeEvent, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FormDataLogin, Errors } from '../../types/acccount';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import ToastContainer from '../../components/Toast/toast';

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState<FormDataLogin>({
    emailOrUsername: '',
    password: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [showPassword, setShowPassword] = useState(false);
  const passwordInputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement> | React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const { emailOrUsername, password } = formData;

    // Reset error messages
    setErrors({});

    // Validate
    const newErrors: Errors = {};
    // if (!validateEmail(emailOrUsername)) newErrors.email = 'Email không hợp lệ.';
    if (!validatePassword(password)) newErrors.password = 'Mật khẩu phải có ít nhất 6 ký tự.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch('https://software-authentication.vercel.app/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ emailOrUsername, password }),
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || "Đăng nhập thất bại");
      }

      const data = await response.json();
      // Clear form fields
      setFormData({
        emailOrUsername: '',
        password: ''
      });

      // Show success toast
      toast.success(data.message);
      localStorage.setItem("user_id",  data.id);
      console.log(data.message);
 
      // Redirect to dashboard after successful login
      if (data.message === "User logged in successfully") {
        setTimeout(() => {
          navigate('/dashboard', { state: { componentType: 'user' } });
        }, 3000);
      } else if (data.message === "Admin logged in successfully") {
        setTimeout(() => {
          navigate('/dashboard', { state: { componentType: 'admin' } });
        }, 3000);
        
      } else {
        // Handle unexpected response
        console.error("Unexpected login response:", data.message);
        alert("Đăng nhập thành công, nhưng có lỗi xảy ra. Vui lòng thử lại.");
      }
    } catch (error: any) {
      // Show error toast
      toast.error(error.message);
      console.log(error.message);
    }
  };

  const handleEyeClick = () => {
    setShowPassword(prevState => !prevState);
  };

  // const validateEmail = (email: string) => {
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return emailRegex.test(email);
  // };

  const validatePassword = (password: string) => password.length >= 6;

  const handleNavigate = (direction: string) => {
    navigate(`/${direction}`);
  };

  return (
    <>
      <h1 className="title">PHẦN MỀM TỰ ĐỘNG HÓA</h1>
      <div className="login-box">
        <h2>ĐĂNG NHẬP</h2>
        <form id="form-login" onSubmit={handleSubmit}>
          <div className="user-box">
            <input
              type="text"
              className="form-input"
              name="emailOrUsername"
              value={formData.emailOrUsername}
              onChange={handleChange}
              required
            />
            <label htmlFor="username">Email | Username</label>
            {errors.email && <small className="error-message">{errors.email}</small>}
          </div>
          
          <div className="user-box">
            <input
              type={showPassword ? 'text' : 'password'}
              className="form-input"
              name="password"
              value={formData.password}
              onChange={handleChange}
              ref={passwordInputRef}
              required
            />
            <label htmlFor="password">Mật khẩu</label>
            <span id="eye" onClick={handleEyeClick} style={{ cursor: 'pointer', padding: "20px 0 0 0" }}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            {errors.password && <small className="error-message">{errors.password}</small>}
          </div>
          
          <div className="forget-password">
            <small>Chưa có tài khoản <b onClick={() => handleNavigate('register')}>Đăng Ký</b> ngay</small>
            <small onClick={() => handleNavigate('forget-password')}>Bạn quên mật khẩu?</small>
          </div>
          <Link to="#" id="register-button" onClick={handleSubmit}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Đăng Nhập
        </Link>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default LoginForm;
