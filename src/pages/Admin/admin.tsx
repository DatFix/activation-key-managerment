import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaUsers, FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { Errors } from "../../types/acccount";
import { FiLogOut } from "react-icons/fi";
import "./admin.css";
import { toast } from "react-toastify";
import ToastContainer from "../../components/Toast/toast";
import { useNavigate  } from "react-router-dom";

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
}

const Admin: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"users">("users");
  const [userList, setUserList] = useState<User[]>([]);
  // const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const navigate = useNavigate();

  const fetchUsers = async () => {
    // setLoading(true);
    try {
      const response = await axios.get(
        "https://sma2.vercel.app/users"
      );
      setUserList(response.data);
      setErrors({});
    } catch (error: any) {
      setErrors({ message: error.message });
    } finally {
      // setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
    setInterval(() => fetchUsers(), 3000);
  }, []);

  const handleLogout = () => {
    setTimeout(() => {
      window.location.href = '/'
    }, 1000);
    toast.success("Đăng xuất thành công.");
    localStorage.removeItem("user_id");
    sessionStorage.removeItem('isLogin')
  };


  return (
    <>
      <div className="admin-container">
        <div className="admin-sidebar">
          <h2>Admin</h2>
          <div className="admin-tabs">
            <button
              className={activeTab === "users" ? "active" : ""}
              onClick={() => setActiveTab("users")}
            >
              <FaUsers /> Người Dùng
            </button>
          </div>
          <button className="cyber-button" onClick={handleLogout}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Đăng xuất <FiLogOut />
            </button>
        </div>
        <div className="admin-content">
          <h1>Quản Lý Người Dùng</h1>
          {/* {loading && <p>Loading...</p>} */}
          {errors.message && <p>Error: {errors.message}</p>}
          {!errors.message && (
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Họ</th>
                  <th>Tên</th>
                  <th>Email</th>
                  <th>Số Điện Thoại</th>
                  <th>Tài Khoản</th>
                  <th>Mã Kích Hoạt</th>
                  <th>Trạng Thái</th>
                  <th>Vai Trò</th>
                  <th>Tuỳ Chọn</th>
                </tr>
              </thead>
              <tbody>
                {userList.map((user) => (
                  <tr key={user._id}>
                    <td>{user._id}</td>
                    <td>{user.lastname}</td>
                    <td>{user.firstname}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.username}</td>
                    <td>{user.activate_key}</td>
                    {user.is_active ? (
                      <td style={{ color: "yellow" }}>Đã kích hoạt</td>
                    ) : (
                      <td style={{ color: "rgb(0, 191, 26)" }}>
                        Chưa kích hoạt
                      </td>
                    )}
                    <td>{user.role}</td>
                    <td className="action">
                      <button className="btn btn-primary">
                        <FaEdit />
                      </button>
                      <button className="btn btn-danger">
                        <FaRegTrashAlt />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Admin;
