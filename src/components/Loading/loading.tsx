import React from 'react';
import './loading.css';

const CyberLoading: React.FC = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <div className="loading-text">Loading...</div>
    </div>
  );
};

export default CyberLoading;