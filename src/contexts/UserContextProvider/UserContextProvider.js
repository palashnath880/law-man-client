import React, { createContext, useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged, sendPasswordResetEmail, signOut } from 'firebase/auth';
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

    // sign in with google provider
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // password reset
    const passwordReset = (email) => {
        return sendPasswordResetEmail(auth, email);
    }

    // update profile name
    const updateUserProfile = (name, photoUrl) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoUrl ? photoUrl : auth.photoURL,
        });
    }

    // logo out current user
    const logoutUser = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();

    }, [])

    const userInfo = { loading, user, createUser, loginUser, signInWithGoogle, passwordReset, updateProfile: updateUserProfile, logoutUser };

    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;
