import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ allowedRoles }) => {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/Signin" />;
    }

    if (!allowedRoles.includes(user.role)) {
        return <Navigate to="/*" />;
    }

    return <Outlet />;
};

export default ProtectedRoute;