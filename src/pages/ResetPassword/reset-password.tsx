import React, { useState, useRef, FormEvent } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ToastContainer from "../../components/Toast/toast";
import CyberLoading from "../../components/Loading/loading";
import logo from "../../assets/logo.png";

interface Errors {
  otp?: string;
  newPassword?: string;
  confirmPassword?: string;
  general?: string;
}

const ResetPasswordForm: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({});
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const otpRefs = Array(6)
    .fill(0)
    .map(() => useRef<HTMLInputElement>(null));

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (index < otpRefs.length - 1 && value.length === 1) {
      otpRefs[index + 1].current?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (
      event.key === "Backspace" &&
      index > 0 &&
      otpRefs[index].current?.value === ""
    ) {
      otpRefs[index - 1].current?.focus();
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
  };

  const handlePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const validateForm = (): boolean => {
    const newErrors: Errors = {};

    if (otp.some((digit) => digit === "")) {
      newErrors.otp = "Vui lòng nhập đầy đủ mã OTP";
    }

    if (newPassword.length < 8) {
      newErrors.newPassword = "Mật khẩu phải có ít nhất 8 ký tự";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        newPassword
      )
    ) {
      newErrors.newPassword =
        "Mật khẩu phải chứa ít nhất một chữ hoa, một chữ thường, một số và một ký tự đặc biệt";
    }

    if (newPassword !== confirmPassword) {
      newErrors.confirmPassword = "Mật khẩu xác nhận không khớp";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (
    e:
      | FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const resetPasswordToken = otp.join("");

    setIsLoading(true);

    try {
      const response = await fetch(
        "http://127.0.0.1:49152/auth/reset-password",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            resetPasswordToken,
            newPassword,
            confirmPassword,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success("Mật khẩu đã được cập nhật thành công.");
        setTimeout(() => {
          navigate("/");
        }, 3000);
      } else {
        setErrors({
          general: data.error || "Đã xảy ra lỗi khi cập nhật mật khẩu.",
        });
        toast.error("Đã xảy ra lỗi khi cập nhật mật khẩu.");
      }
    } catch (error) {
      setErrors({ general: "Đã xảy ra lỗi khi cập nhật mật khẩu." });
      console.error("Error:", error);
      toast.error("error");
    } finally {
      setIsLoading(false);
    }
  };

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
            <h2>Cấp Lại Mật Khẩu</h2>
            <form id="reset-password-form" onSubmit={handleSubmit}>
              <div className="user-box">
                <div className="otp-box">
                  {otpRefs.map((ref, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength={1}
                      value={otp[index]}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      ref={ref}
                      required
                    />
                  ))}
                  {errors.otp && (
                    <small
                      className="error-message"
                      style={{ padding: "55px 0 0 0" }}
                    >
                      {errors.otp}
                    </small>
                  )}
                </div>

                <label htmlFor="otp">Mã OTP</label>
              </div>
              <div className="user-box">
                <input
                  type={passwordVisible ? "text" : "password"}
                  className="form-input"
                  id="new-password"
                  value={newPassword}
                  onChange={handlePasswordChange}
                  required
                />
                <label htmlFor="new-password">Mật khẩu mới</label>
                <span
                  id="eye"
                  style={{ cursor: "pointer", padding: "20px 0 0 0" }}
                  onClick={handlePasswordVisibility}
                >
                  {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </span>
                {errors.newPassword && (
                  <small className="error-message">{errors.newPassword}</small>
                )}
              </div>
              <div className="user-box">
                <input
                  type={passwordVisible ? "text" : "password"}
                  className="form-input"
                  id="confirm-password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  required
                />
                <label htmlFor="confirm-password">Xác nhận mật khẩu</label>
                {errors.confirmPassword && (
                  <small className="error-message">
                    {errors.confirmPassword}
                  </small>
                )}
              </div>
              {errors.general && (
                <small id="error-message" style={{ color: "rgb(249, 43, 43)" }}>
                  {errors.general}
                </small>
              )}
              <div className="forget-password">
                <small onClick={() => handleNavigate("forget-password")}>
                  <b>Nhập lại email</b>
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

export default ResetPasswordForm;
