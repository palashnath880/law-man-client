import React, { createContext, useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged, sendPasswordResetEmail, signOut } from 'firebase/auth';
import app from '../../firebase/__firebase.config';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const serverRootURL = 'https://law-man-server-palashnath880.vercel.app/';

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

    // create jwt token
    const createJWT = (userID) => {
        const url = `${serverRootURL}createjwt`;
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userID }),
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.error(err));
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();

    }, [auth])

    const userInfo = { loading, user, createUser, loginUser, signInWithGoogle, passwordReset, updateProfile: updateUserProfile, logoutUser, serverRootURL, createJWT };

    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;
