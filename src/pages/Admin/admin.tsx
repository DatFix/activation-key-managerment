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

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10); // Number of users per page

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

  // Pagination calculations
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = userList.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(userList.length / usersPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleLogout = () => {
    toast.success("Đăng xuất thành công.");

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
            <>
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
                  {currentUsers.map((user) =>
                    user.isDeleted ? null : (
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
              <div className="pagination" style={{ position: "fixed", bottom: "2rem", right: "2rem" }}>
                <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                  {"<"}
                </button>
                {Array.from({ length: totalPages }, (_, index) => {
                  const pageNumber = index + 1;
                  const maxPagesToShow = 5;
                  const startPage = Math.max(
                    Math.min(currentPage - Math.floor(maxPagesToShow / 2), totalPages - maxPagesToShow + 1),
                    1
                  );
                  const endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

                  return (
                    pageNumber >= startPage &&
                    pageNumber <= endPage && (
                      <button
                        key={pageNumber}
                        onClick={() => setCurrentPage(pageNumber)}
                        className={currentPage === pageNumber ? "active" : ""}
                      >
                        {pageNumber}
                      </button>
                    )
                  );
                })}
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                  {">"}
                </button>
              </div>

            </>
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
                  type="email"
                  className="form-input"
                  name="email"
                  value={editingUser.email}
                  onChange={(e) =>
                    setEditingUser({
                      ...editingUser,
                      email: e.target.value,
                    })
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
                    setEditingUser({
                      ...editingUser,
                      phone: e.target.value,
                    })
                  }
                  required
                />
                <label htmlFor="phone">Số Điện Thoại</label>
              </div>

              <div className="user-box">
                <input
                  type="text"
                  className="form-input"
                  name="username"
                  value={editingUser.username}
                  onChange={(e) =>
                    setEditingUser({
                      ...editingUser,
                      username: e.target.value,
                    })
                  }
                  required
                />
                <label htmlFor="username">Tài khoản</label>
              </div>

              <div className="user-box">
                <input
                  type="text"
                  className="form-input"
                  name="activate_key"
                  value={editingUser.activate_key}
                  onChange={(e) =>
                    setEditingUser({
                      ...editingUser,
                      activate_key: e.target.value,
                    })
                  }
                  required
                />
                <label htmlFor="activate_key">Mã kích hoạt</label>
              </div>

              <button className="btn-login" type="submit">
                Cập nhật
              </button>
            </form>
          </div>
        )}
      </ModalUpadate>

      <ModalDelete isOpen={isModalDeleteOpen} onClose={closeModalDelete}>
        <div className="confirm-delete">
          <h3>Bạn có chắc chắn muốn xoá người dùng?</h3>
          <button className="btn btn-danger" onClick={handleDelete}>
            Xoá
          </button>
        </div>
      </ModalDelete>
      <ToastContainer />
    </>
  );
};

export default Admin;
