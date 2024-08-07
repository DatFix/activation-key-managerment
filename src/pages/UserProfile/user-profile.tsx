import React, { useState, useEffect } from "react";
import { FaRegCopy } from "react-icons/fa";
import {useNavigate } from "react-router-dom";
import "./user-profile.css";
import { Errors } from "../../types/acccount";
import { toast } from "react-toastify";
import ToastContainer from "../../components/Toast/toast";
import { FiLogOut } from "react-icons/fi";

import bear from "../../assets/images/bear.png";
import camel from "../../assets/images/camel.png";
import cat from "../../assets/images/cat.png";
import cow from "../../assets/images/cow.png";
import fox from "../../assets/images/fox.png";
import hen from "../../assets/images/hen.png";
import monkey from "../../assets/images/monkey.png";
import polarBear from "../../assets/images/polar-bear.png";
import tiger from "../../assets/images/tiger.png";
import wolf from "../../assets/images/wolf.png";
import CyberLoading from "../../components/Loading/loading";

interface User {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  username: string;
  activate_key: string;
  is_active: boolean;
  role: string;
  createdAt: string;
  updatedAt: string;
  password: string;
}

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<Errors>({});
  const [avatar, setAvatar] = useState<string>("");

  const user_id = localStorage.getItem("user_id");
  const avatarArr = [
    bear,
    camel,
    cat,
    cow,
    fox,
    hen,
    monkey,
    polarBear,
    tiger,
    wolf,
  ];

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://sma2.vercel.app/user/${user_id}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUser(data);

        let storedAvatar = localStorage.getItem("avatar");
        if (!storedAvatar) {
          const randomAvatar =
            avatarArr[Math.floor(Math.random() * avatarArr.length)];
          storedAvatar = randomAvatar;
          localStorage.setItem("avatar", randomAvatar);
        }
        setAvatar(storedAvatar);
      } catch (error: any) {
        setErrors({ message: error.message });
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [user_id]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success("Sao chép thành công!");
      })
      .catch((err) => {
        toast.error("Không thể sao chép: " + err.message);
      });
  };

  const handleNavigateToChangePassword = () => {
    navigate("/change-password");
  };

  const handleLogout = () => {
    setTimeout(() => {
      navigate("/");
      window.location.href = '/';
    }, 3000);
    localStorage.removeItem("user_id");
    localStorage.removeItem("avatar");
    sessionStorage.removeItem('isLogin')
    toast.success("Đăng xuất thành công.");
  };

  if (loading) return <CyberLoading />;
  if (errors.message) return <p aria-live="polite">Error: {errors.message}</p>;

  // const isLogin = sessionStorage.getItem("isLogin");
  // if (isLogin === "true") {
  //   if (user_id) {
  //     navigate("/dashboard", { state: { componentType: "user" } });
  //   } else {
  //     navigate("/dashboard", { state: { componentType: "admin" } });
  //   }
  // }

  return (
    <>
      <div className="profile-container">
        <div className="profile-layout">
          <div className="section-avatar">
            <div className="avatar-content">
              <div className="title">
                <h2>Thông Tin Tài Khoản</h2>
              </div>

              <div className="avatar">
                <img src={avatar} alt="Avatar" />
                <button
                  className="cyber-button"
                  onClick={handleNavigateToChangePassword}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Đổi mật khẩu
                </button>
              </div>
            </div>
            <button className="cyber-button" onClick={handleLogout}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Đăng xuất <FiLogOut />
            </button>
            {/* <button className="logout-button" onClick={handleLogout}>
              Đăng xuất <FiLogOut />
            </button> */}
          </div>
          <div className="section-info">
            <h2>Xin Chào</h2>
            {user && (
              <div className="fullname">
                <div className="lastname">{user.lastname}</div>
                <div className="firstname">{user.firstname}</div>
              </div>
            )}
            <div className="username-password">
              <div className="input-field">
                <label>Tài khoản</label>
                <input type="text" value={user?.username || ""} readOnly />
              </div>
              <div className="input-field">
                <div className="active-key">
                  <label>Mã kích hoạt</label>
                  <div className="input-container">
                    <input
                      type="text"
                      value={user?.activate_key || ""}
                      readOnly
                    />
                    <button
                      onClick={() =>
                        user?.activate_key && copyToClipboard(user.activate_key)
                      }
                    >
                      <FaRegCopy />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="email-phone">
              <div className="input-field">
                <label>Email</label>
                <input type="email" value={user?.email || ""} readOnly />
              </div>
              <div className="input-field">
                <label>Số điện thoại</label>
                <input type="tel" value={user?.phone || ""} readOnly />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Profile;
