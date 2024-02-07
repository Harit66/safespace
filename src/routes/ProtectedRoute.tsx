import React, { ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
  isAuthenticated: boolean;
  children?: ReactNode;
  adminRoute?: boolean;
  isAdmin?: boolean;
  redirect?: string;
  redirectAdmin?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  isAuthenticated,
  children,
  adminRoute,
  isAdmin,
  redirect = "/login",
  redirectAdmin = "/",
}) => {
  if (!isAuthenticated) {
    return <Navigate to={redirect} />;
  }

  if (adminRoute && isAdmin) {
    return <Navigate to={redirectAdmin} />;
  }

  return children ? (
    <>{children}</>
  ) : (
    <>
      <Outlet />
    </>
  );
};

export default ProtectedRoute;
