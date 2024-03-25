import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";

interface ProtectedRouteProps {
  admin?: boolean;
}

function ProtectedRoute({ admin = false }: ProtectedRouteProps) {
  const { loggedIn, user } = useAuth();

  if (!loggedIn) {
    // Redirect to the sign-in page if not logged in
    return <Navigate to="/signin" replace />;
  }

  // Check if the user is an admin when the admin prop is true
  // Redirect non-admin users to the homepage if required
  if (admin && user?.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  // Render children if logged in (and admin if required)
  return <Outlet />;
}

export default ProtectedRoute;
