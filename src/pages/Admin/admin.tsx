import React, { useState, useEffect, useCallback } from 'react';
import { FaUsers, FaEdit, FaRegTrashAlt } from 'react-icons/fa';
import { Errors } from '../../types/acccount';
import { FiLogOut } from "react-icons/fi";
import './admin.css';

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
    const [activeTab, setActiveTab] = useState<'users'>('users');
    const [userList, setUserList] = useState<User[]>([]);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<Errors>({});

    const fetchUsers = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch('https://software-authentication.vercel.app/users');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data: User[] = await response.json(); // Directly expecting an array of User objects
            setUserList(data); // Use the data directly
        } catch (error: any) {
            setErrors({ message: error.message });
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchUsers(); 

        // Set up an interval to fetch users every 30 seconds
        const intervalId = setInterval(fetchUsers, 30000);

        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, [fetchUsers]);

    return (
        <div className='admin-container'>
            <div className='admin-sidebar'>
        <h2>Admin</h2>
        <div className='admin-tabs'>
            <button
                className={activeTab === 'users' ? 'active' : ''}
                onClick={() => setActiveTab('users')}
            >
                <FaUsers /> Người Dùng
            </button>
        </div>
        <button className='logout-button' >
             Đăng xuất <FiLogOut />
        </button>
        </div>
            <div className='admin-content'>
                <h1>Quản Lý Người Dùng</h1>
                {loading && <p>Loading...</p>}
                {errors.message && <p>Error: {errors.message}</p>}
                {!loading && !errors.message && (
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
                            {userList.map(user => (
                                <tr key={user._id}>
                                    <td>{user._id}</td>
                                    <td>{user.lastname}</td>
                                    <td>{user.firstname}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.username}</td>
                                    <td>{user.activate_key}</td>
                                    {user.is_active ?(
                                        <td style={{color:"yellow"}}>Đã kích hoạt</td>
                                    ):(
                                        <td style={{color:"rgb(0, 191, 26)"}}>Chưa kích hoạt</td>
                                    )}
                                    {/* <td>{user.is_active ? 'Đã Kích Hoạt' : 'Chưa Kích Hoạt'}</td> */}
                                    <td>{user.role}</td>
                                    <td className='action'>
                                        <button className='btn btn-primary'><FaEdit /></button>
                                        <button className='btn btn-danger'><FaRegTrashAlt /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}

export default Admin;