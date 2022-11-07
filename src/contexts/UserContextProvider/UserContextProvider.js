import React, { createContext } from 'react';
import { getAuth } from 'firebase/auth';
import app from '../../firebase/__firebase.config';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {

    const auth = getAuth(app);

    const userInfo = {};

    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;
