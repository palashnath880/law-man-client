import React, { createContext, useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged, sendPasswordResetEmail } from 'firebase/auth';
import app from '../../firebase/__firebase.config';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    // create user using email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login user using email and password
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const passwordReset = (email) => {
        return sendPasswordResetEmail(auth, email);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();

    }, [])

    const userInfo = { loading, user, createUser, loginUser, signInWithGoogle, passwordReset };

    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;
