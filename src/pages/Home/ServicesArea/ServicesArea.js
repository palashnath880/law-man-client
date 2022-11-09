import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../contexts/UserContextProvider/UserContextProvider';
import ServicesItem from '../../../shared/ServicesItem/ServicesItem';

const ServicesArea = () => {

    const { serverRootURL } = useContext(UserContext);
    const [services, setServices] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${serverRootURL}services?limit=3`)
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setLoading(false);
            })
            .catch(err => console.error(err));
    }, [serverRootURL]);

    if (loading) {
        return (
            <div className='h-36 w-full flex justify-center items-center'>
                <div className='text-center'>
                    <span className='w-10 h-10 mx-auto border-4 border-gray-700 border-t-transparent animate-spin block rounded-full'></span>
                </div>
            </div>
        );
    }

    return (
        <div className=''>
            <div className='container mx-auto px-5 py-10'>
                <div className=''>
                    <h1 className='text-3xl pb-5 text-center border-b border-gray-200'>Services</h1>
                    <div className='grid grid-cols-3 gap-2 mt-5'>
                        {
                            services !== null && services.length > 0 ? services.map(service => <ServicesItem key={service?._id} service={service} serviceDelete={false} />) : ''
                        }
                    </div>
                    <div className='text-center pt-10'>
                        <Link to='/services' className='uppercase border bg-gray-700 hover:bg-transparent text-slate-50 hover:text-gray-700 font-semibold inline-block duration-300 hover:tracking-wide px-8 py-2'>All Services</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServicesArea;
