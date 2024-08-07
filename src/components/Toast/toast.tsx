// src/components/ToastContainer.tsx
import React from 'react';
import { ToastContainer as ToastifyContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ToastContainer: React.FC = () => {
  return (
    <ToastifyContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      className={"toast"}
    />
  );
};

export default ToastContainer;