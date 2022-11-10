import React, { createContext, useContext, useEffect, useState } from 'react';
import { UserContext } from '../UserContextProvider/UserContextProvider';

export const ReviewContext = createContext();

const ReviewContextProvider = ({ children }) => {

    const [reviews, setReviews] = useState([]);
    const { serverRootURL } = useContext(UserContext);

    useEffect(() => {
        fetch(`${serverRootURL}reviews`)
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <ReviewContext.Provider value={{ reviews }}>
            {children}
        </ReviewContext.Provider>
    );
}

export default ReviewContextProvider;
