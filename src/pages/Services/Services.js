import React, { useContext, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { UserContext } from '../../contexts/UserContextProvider/UserContextProvider';
import ServicesItem from '../../shared/ServicesItem/ServicesItem';

const Services = () => {

    const [services, setServices] = useState(null);
    const [loading, setLoading] = useState(true);

    const { serverRootURL } = useContext(UserContext);

    useEffect(() => {
        const url = `${serverRootURL}services?limit=0`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setLoading(false);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <>
            <Helmet><title>Services</title></Helmet>
            <div className='container mx-auto py-10 px-5'>
                <div>
                    <h1 className='text-3xl text-center border-b border-gray-200 pb-5'>All Services</h1>
                    {loading && <div className='h-40 flex justify-center items-center'>
                        <span className='block w-8 h-8 rounded-full border-4 border-gray-500 border-t-gray-200 animate-spin'></span>
                    </div>}
                    {
                        Array.isArray(services) && (services.length > 0 ?
                            <div className='grid grid-cols-3 gap-2 mt-8'>
                                {services.map(service => <ServicesItem key={service?._id} service={service} serviceDelete={false} />)}
                            </div>
                            : <>
                                <p className='text-lg mt-8 bg-red-100 rounded-md py-2 text-center text-red-600'>No Services Found</p>
                            </>
                        )
                    }
                </div>
            </div>
        </>
    );
}

export default Services;
