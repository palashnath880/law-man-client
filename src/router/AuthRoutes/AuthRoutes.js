import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContextProvider/UserContextProvider';

const AuthRoutes = ({ children }) => {

    const { user } = useContext(UserContext);

    if (user !== null) {
        return (
            <Navigate to='/' ></Navigate>
        );
    }

    return (
        <>
            {children}
        </>
    );
}

export default AuthRoutes;
