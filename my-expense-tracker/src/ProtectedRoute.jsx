import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "./contexts/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    // You can render a loading spinner or some placeholder here
    return <div>Loading...</div>;
  }
  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
