import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from '../pages/Register/register';
import Login from '../pages/Login/login';
import ForgetPassword from '../pages/ForgetPassword/forget-password';
import ResetPassword from '../pages/ResetPassword/reset-password';
import ChangePassWord from '../pages/ChangePassword/change-password';
import Dashboard from '../pages/Dashboard/dashboard';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/change-password" element={<ChangePassWord />} />
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </Router>
  );
};

export default AppRouter;






// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Register from '../pages/Register/register';
// import Login from '../pages/Login/login';
// import ForgetPassword from '../pages/ForgetPassword/forget-password';
// import ResetPassword from '../pages/ResetPassword/reset-password';
// import UserProfile from '../pages/UserProfile/user-profile';
// import ChangePassWord from '../pages/ChangePassword/change-password';
// import AdminDashboard from '../pages/Admin/admin';
// import { useAuth } from '../hooks/useAuth'; // Giả sử bạn có một hook useAuth để kiểm tra trạng thái đăng nhập và vai trò

// const ProtectedRoute = ({ children, allowedRoles }) => {
//   const { isAuthenticated, userRole } = useAuth();
  
//   if (!isAuthenticated) {
//     return <Navigate to="/" replace />;
//   }

//   if (allowedRoles && !allowedRoles.includes(userRole)) {
//     return <Navigate to="/unauthorized" replace />;
//   }

//   return children;
// };

// const AppRouter = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/register" element={<Register />} />
//         <Route path="/" element={<Login />} />
//         <Route path="/forget-password" element={<ForgetPassword />} />
//         <Route path="/reset-password" element={<ResetPassword />} />
//         <Route 
//           path="/user-profile" 
//           element={
//             <ProtectedRoute allowedRoles={['user', 'admin']}>
//               <UserProfile />
//             </ProtectedRoute>
//           } 
//         />
//         <Route 
//           path="/change-password" 
//           element={
//             <ProtectedRoute allowedRoles={['user', 'admin']}>
//               <ChangePassWord />
//             </ProtectedRoute>
//           } 
//         />
//         <Route 
//           path="/admin" 
//           element={
//             <ProtectedRoute allowedRoles={['admin']}>
//               <AdminDashboard />
//             </ProtectedRoute>
//           } 
//         />
//         <Route 
//           path="/dashboard" 
//           element={
//             <ProtectedRoute allowedRoles={['user', 'admin']}>
//               {({ userRole }) => 
//                 userRole === 'admin' ? <AdminDashboard /> : <UserProfile />
//               }
//             </ProtectedRoute>
//           } 
//         />
//       </Routes>
//     </Router>
//   );
// };

// export default AppRouter;