import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth();
  if (!user) {
    return <Navigate to="/Signup" />;
  } else {
    return children;
  }
};

export default ProtectedRoute;
