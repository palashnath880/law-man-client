import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContextProvider/UserContextProvider';

const ProtectedRoute = ({ children }) => {

    const { user } = useContext(UserContext);

    const location = useLocation();

    if (user === null) {
        return (
            <Navigate to='/login' state={{ from: location }} replace></Navigate>
        );
    }

    return (
        <>
            {children}
        </>
    );
}

export default ProtectedRoute;
