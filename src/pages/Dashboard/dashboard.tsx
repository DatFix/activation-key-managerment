import React from 'react';
import { useLocation } from 'react-router-dom';
import AdminDashboard from '../Admin/admin';
import UserDashboard from '../UserProfile/user-profile';

const Dashboard: React.FC = () => {
  const location = useLocation();
  const { componentType } = location.state as { componentType: string };

  return (
    <div>
      {componentType === 'admin' ? <AdminDashboard /> : <UserDashboard />}
    </div>
  );
};

export default Dashboard;