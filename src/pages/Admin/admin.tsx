import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaUsers, FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { Errors } from "../../types/acccount";
import { FiLogOut } from "react-icons/fi";
import "./admin.css";
import { toast } from "react-toastify";
import ToastContainer from "../../components/Toast/toast";
import logo from "../../../public/logo.png";
import ModalUpadate from "../../components/Update/update";
import ModalDelete from "../../components/Delete/delete";
import { useNavigate } from "react-router-dom";

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
  isDeleted: boolean;
}

const Admin: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"users">("users");
  const [userList, setUserList] = useState<User[]>([]);
  const [errors, setErrors] = useState<Errors>({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);

  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [showUpdateToast, setShowUpdateToast] = useState(false);
  const [showDeleteToast, setShowDeleteToast] = useState(false);
  const navigate = useNavigate();

  const openModal = (user: User) => {
    setEditingUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingUser(null);
  };

  const openModalDelete = (user: User) => {
    setEditingUser(user);
    setIsModalDeleteOpen(true);
  };

  const closeModalDelete = () => {
    setIsModalDeleteOpen(false);
    setEditingUser(null);
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get("https://www.sm2a.sdtc.vn/api/v1/users");
      setUserList(response.data);
      setErrors({});
    } catch (error: any) {
      setErrors({ message: error.message });
    }
  };

  useEffect(() => {
    fetchUsers();
    const interval = setInterval(fetchUsers, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    toast.success("Đăng xuất thành công.");

    // Navigate to home page and reload
    setTimeout(() => {
      navigate("/", { replace: true });
      window.location.reload();
    }, 2000);
    localStorage.removeItem("user_id");
    sessionStorage.removeItem("isLogin");
  };

  const handleUpdate = async (updatedUser: Partial<User>) => {
    try {
      const response = await axios.put(
        `https://www.sm2a.sdtc.vn/api/v1/update-user/${editingUser?._id}`,
        updatedUser
      );
      if (response.status === 200) {
        setShowUpdateToast(true);
        closeModal();
        fetchUsers();
      }
    } catch (error: any) {
      toast.error("Lỗi khi cập nhật: " + error.message);
    }
  };

  useEffect(() => {
    if (showUpdateToast) {
      toast.success("Cập nhật thành công");
      setShowUpdateToast(false);
    }
  }, [showUpdateToast]);

  const handleDelete = async () => {
    try {
      if (editingUser) {
        const response = await axios.put(
          `https://www.sm2a.sdtc.vn/api/v1/delete-user/${editingUser._id}`,
          { isDeleted: true }
        );
        if (response.status === 200) {
          setShowDeleteToast(true);
          closeModalDelete();
          fetchUsers();
        }
      }
    } catch (error: any) {
      toast.error("Lỗi khi xoá người dùng: " + error.message);
    }
  };

  useEffect(() => {
    if (showDeleteToast) {
      toast.success("Xoá người dùng thành công");
      setShowDeleteToast(false);
    }
  }, [showDeleteToast]);

  return (
    <>
      <div className="admin-container">
        <div className="admin-sidebar">
          <div className="logo-admin">
            <img src={logo} alt="LogoSeadragon" />
          </div>
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
                {userList.map((user) =>
                  user.isDeleted ? (
                    <></>
                  ) : (
                    <tr key={user._id}>
                      <td>{user._id}</td>
                      <td>{user.lastname}</td>
                      <td>{user.firstname}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>{user.username}</td>
                      <td>{user.activate_key}</td>
                      {user.is_active ? (
                        <td style={{ color: "rgb(62, 247, 88)" }}>
                          Đã kích hoạt
                        </td>
                      ) : (
                        <td style={{ color: "yellow" }}>Chưa kích hoạt</td>
                      )}
                      <td>{user.role}</td>
                      <td className="action">
                        <button
                          className="btn btn-primary"
                          onClick={() => openModal(user)}
                        >
                          <FaEdit />
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => openModalDelete(user)}
                        >
                          <FaRegTrashAlt />
                        </button>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
      <ModalUpadate isOpen={isModalOpen} onClose={closeModal}>
        {editingUser && (
          <div className="login-box">
            <h2>Cập nhật thông tin</h2>
            <form
              id="form-login"
              onSubmit={(e) => {
                e.preventDefault();
                handleUpdate(editingUser);
              }}
            >
              <div className="full-name">
                <div className="user-box">
                  <input
                    type="text"
                    className="form-input"
                    name="lastname"
                    value={editingUser.lastname}
                    onChange={(e) =>
                      setEditingUser({
                        ...editingUser,
                        lastname: e.target.value,
                      })
                    }
                    required
                  />
                  <label htmlFor="lastname">Họ</label>
                </div>

                <div className="user-box">
                  <input
                    type="text"
                    className="form-input"
                    name="firstname"
                    value={editingUser.firstname}
                    onChange={(e) =>
                      setEditingUser({
                        ...editingUser,
                        firstname: e.target.value,
                      })
                    }
                    required
                  />
                  <label htmlFor="firstname">Tên</label>
                </div>
              </div>

              <div className="user-box">
                <input
                  type="text"
                  className="form-input"
                  name="email"
                  value={editingUser.email}
                  onChange={(e) =>
                    setEditingUser({ ...editingUser, email: e.target.value })
                  }
                  required
                />
                <label htmlFor="email">Email</label>
              </div>

              <div className="user-box">
                <input
                  type="text"
                  className="form-input"
                  name="phone"
                  value={editingUser.phone}
                  onChange={(e) =>
                    setEditingUser({ ...editingUser, phone: e.target.value })
                  }
                  required
                />
                <label htmlFor="phone">Số điện thoại</label>
              </div>

              <div className="user-box">
                <input
                  type="text"
                  className="form-input"
                  name="username"
                  value={editingUser.username}
                  onChange={(e) =>
                    setEditingUser({ ...editingUser, username: e.target.value })
                  }
                  required
                />
                <label htmlFor="username">Tài khoản</label>
              </div>
              <label>Vai trò</label>
              <div className="user-box role-selector">
                <div className="role-buttons">
                  <button
                    type="button"
                    className={`role-button ${
                      editingUser.role === "user" ? "active" : ""
                    }`}
                    onClick={() =>
                      setEditingUser({ ...editingUser, role: "user" })
                    }
                  >
                    User
                  </button>
                  <button
                    type="button"
                    className={`role-button ${
                      editingUser.role === "admin" ? "active" : ""
                    }`}
                    onClick={() =>
                      setEditingUser({ ...editingUser, role: "admin" })
                    }
                  >
                    Admin
                  </button>
                </div>
              </div>

              <button
                type="submit"
                id="register-button"
                className="link-style-button"
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Cập nhật
              </button>
            </form>
          </div>
        )}
      </ModalUpadate>
      <ModalDelete isOpen={isModalDeleteOpen} onClose={closeModalDelete}>
        {editingUser && (
          <div className="login-box">
            <h2>Xoá Người Dùng</h2>
            <p>Bạn có chắc chắn muốn xoá người dùng này không?</p>
            <div className="button-group">
              <button onClick={handleDelete} className="cyber-button-red">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Xoá
              </button>
              <button onClick={closeModalDelete} className="cyber-button-green">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Huỷ
              </button>
            </div>
          </div>
        )}
      </ModalDelete>
      <ToastContainer />
    </>
  );
};

export default Admin;
