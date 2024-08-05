import React, { useState, useEffect, useCallback } from 'react';
import { FaRegCopy } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Avatar from '../../assets/images/avatar.jpg';
import './user-profile.css';
import { Errors } from '../../types/acccount';
import { toast } from 'react-toastify';
import ToastContainer from '../../components/Toast/toast';

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

    const user_id = localStorage.getItem("user_id")

    const fetchUser = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(`https://software-authentication.vercel.app/user/${user_id}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setUser(data);
        } catch (error: any) {
            setErrors({ message: error.message });
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchUser(); 

        // Set up an interval to fetch user every 30 seconds
        const intervalId = setInterval(fetchUser, 30000);

        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, [fetchUser]);

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                toast.success('Sao chép thành công!');
            })
            .catch(err => {
                toast.error('Không thể sao chép: ' + err.message);
            });
    };

    const handleNavigateToChangePassword = () => {
        navigate('/change-password');
    };

    if (loading) return <p aria-live="polite">Loading...</p>;
    if (errors.message) return <p aria-live="polite">Error: {errors.message}</p>;

    const handleLogout = () => {
        toast.success('Đăng xuất thành công.');
        setTimeout(() => {
            navigate('/');
          }, 3000);
        localStorage.removeItem("user_id");
    };

    return (
        <>
        <div className='profile-container'>
            <div className='profile-layout'>
                <div className='section-avatar'>
                    <div className='avatar-content'>
                        <div className='title'>
                            <h2>Thông Tin Tài Khoản</h2>
                        </div>

                        <div className='avatar'>
                            <img src={Avatar} alt="Avatar" />
                            <button onClick={handleNavigateToChangePassword}>Đổi mật khẩu</button>
                        </div>
                    </div>
                    <button className="logout-button" onClick={handleLogout}>Đăng xuất</button>
                </div>
                <div className='section-info'>
                    <h2>Xin Chào</h2>
                    {user && (
                        <div className='fullname'>
                            <div className='lastname'>{user.lastname}</div>
                            <div className='firstname'>{user.firstname}</div>
                        </div>
                    )}
                    <div className='username-password'>
                        <div className='input-field'>
                            <label>Tài khoản</label>
                            <input type='text' value={user?.username || ''} readOnly />
                        </div>
                        <div className='input-field'>
                        <div className='active-key'>
                        <label>Mã kích hoạt</label>
                        <div className='input-container'>
                            <input type='text' value={user?.activate_key || ''} readOnly />
                            <button onClick={() => user?.activate_key && copyToClipboard(user.activate_key)}>
                                <FaRegCopy />
                            </button>
                        </div>
                    </div>
                        </div>
                    </div>
                    
                    <div className='email-phone'>
                        <div className='input-field'>
                            <label>Email</label>
                            <input type='email' value={user?.email || ''} readOnly />
                        </div>
                        <div className='input-field'>
                            <label>Số điện thoại</label>
                            <input type='tel' value={user?.phone || ''} readOnly />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ToastContainer />
        </>
    );
}

export default Profile;
