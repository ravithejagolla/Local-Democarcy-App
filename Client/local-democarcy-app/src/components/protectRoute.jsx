import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../context/useAuth";
const PrivateRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div className="text-center mt-10 text-lg">Loading...</div>; // or a spinner
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
