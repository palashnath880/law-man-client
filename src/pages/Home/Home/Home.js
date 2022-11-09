import React from 'react';
import Banner from '../Banner/Banner';
import ServicesArea from '../ServicesArea/ServicesArea';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner />
            <ServicesArea />
        </>
    );
}

export default Home;
