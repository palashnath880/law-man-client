import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../contexts/UserContextProvider/UserContextProvider';
import ServicesItem from '../../../shared/ServicesItem/ServicesItem';

const ServicesArea = () => {

    const { serverRootURL } = useContext(UserContext);
    const [services, setServices] = useState(null);

    useEffect(() => {
        fetch(`${serverRootURL}services?limit=3`)
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
            .catch(err => console.error(err));
    }, [serverRootURL]);

    return (
        <div className=''>
            <div className='container mx-auto px-5 py-10'>
                <div className=''>
                    <h1 className='text-3xl pb-5 text-center border-b border-gray-200'>Services</h1>
                    <div className='grid grid-cols-3 gap-2 mt-5'>
                        {
                            services !== null && services.length > 0 ? services.map(service => <ServicesItem key={service?._id} service={service} serviceDelete={false} />) : ''
                        }
                        {/* <ServicesItem /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServicesArea;
