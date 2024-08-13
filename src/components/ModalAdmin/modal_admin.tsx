// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './modal.css';
// import { toast } from "react-toastify";
// // import ToastContainer from "../../components/Toast/toast";

// interface EditUserModalProps {
//   user: User | null;
//   onClose: () => void;
//   onSave: () => void;
// }

// const EditUserModal: React.FC<EditUserModalProps> = ({ user, onClose, onSave }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('');

//   useEffect(() => {
//     if (user) {
//       setEmail(user.email);
//       setRole(user.role);
//     }
//   }, [user]);

//   const handleSave = async () => {
//     if (!user) return;
//     try {
//       await axios.put(`http://localhost:3000/update-user/${user._id}`, {
//         email,
//         password,
//         role
//       });
//       toast.success('User updated successfully');
//       onSave();
//       onClose();
//     } catch (error) {
//       toast.error('Failed to update user');
//     }
//   };

//   const handleDelete = async () => {
//     if (!user) return;
//     try {
//       await axios.delete(`http://localhost:3000/delete-user/${user._id}`);
//       toast.success('User deleted successfully');
//       onSave();
//       onClose();
//     } catch (error) {
//       toast.error('Failed to delete user');
//     }
//   };

//   if (!user) return null;

//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <h2>Edit User</h2>
//         <label>Email</label>
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         <label>Password</label>
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         <label>Role</label>
//         <input type="text" value={role} onChange={(e) => setRole(e.target.value)} />
//         <div className="modal-actions">
//           <button onClick={handleSave}>Save</button>
//           <button onClick={handleDelete}>Delete</button>
//           <button onClick={onClose}>Cancel</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EditUserModal;
