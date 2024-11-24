import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute() {
  // TODO: Implement actual auth check
  const isAuthenticated = true;

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute;