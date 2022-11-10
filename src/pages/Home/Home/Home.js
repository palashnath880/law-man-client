import React from 'react';
import Banner from '../Banner/Banner';
import ServicesArea from '../ServicesArea/ServicesArea';
import { Helmet } from 'react-helmet';
import AboutUs from '../AboutUs/AboutUs';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner />
            <ServicesArea />
            <AboutUs />
        </>
    );
}

export default Home;
