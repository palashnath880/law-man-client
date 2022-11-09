import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContextProvider/UserContextProvider';
import ServicesItem from '../../shared/ServicesItem/ServicesItem';
import { confirmAlert } from 'react-confirm-alert';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';

const MyServices = () => {

    const [myServices, setMyServices] = useState(null);
    const { user, serverRootURL } = useContext(UserContext);
    const [loading, setLoading] = useState(true);

    const serviceDeleteHandler = (serviceID) => {

        const url = `${serverRootURL}my-services/${serviceID}`;
        const requestOptions = {
            method: 'DELETE'
        };
        fetch(url, requestOptions)
            .then(res => res.json())
            .then(data => {
                if (data?.status === 'good') {
                    toast.success(data?.message);
                    const remainingServices = myServices.filter(serv => serv._id !== serviceID);
                    setMyServices(remainingServices);
                } else {
                    toast.error(data?.message);
                }
            })
            .catch(err => console.log(err));
    }

    const deleteConfirm = (serviceID) => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className='custom-ui bg-slate-100 p-5 rounded-md border border-gray-400'>
                        <h1 className='text-xl'>Are you sure?</h1>
                        <p>Do you want to delete this service?</p>
                        <div className='mt-4'>
                            <button className='py-1 px-4 rounded-md mr-3 bg-red-500 text-slate-50' onClick={onClose}>No</button>
                            <button
                                className='py-1 px-4 rounded-md mr-3 bg-green-500 text-slate-50'
                                onClick={() => {
                                    serviceDeleteHandler(serviceID);
                                    onClose();
                                }}
                            >
                                Yes, Delete it!
                            </button>
                        </div>
                    </div>
                );
            }
        });
    }

    useEffect(() => {

        const url = `${serverRootURL}my-services/${user?.uid}`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                setMyServices(data);
            })
            .catch(err => console.error(err));

    }, [serverRootURL, user]);

    return (
        <div className='container mx-auto py-10'>
            {/* react helmet */}
            <Helmet><title>My Services</title></Helmet>
            <div>
                <h1 className='text-3xl text-center border-b border-gray-200 pb-5'>My All Services</h1>
                <div className='mt-8'>
                    <Link to='/add-services' className='px-6 py-3 rounded bg-gray-700 text-slate-50'>Add New Service</Link>
                </div>
                {loading && <div className='h-20 flex justify-center items-center'>
                    <span className='block w-8 h-8 rounded-full border-4 border-gray-500 border-t-gray-200 animate-spin'></span>
                </div>}
                {
                    Array.isArray(myServices) && (myServices.length > 0 ?
                        <div className='grid grid-cols-3 gap-2 mt-8'>
                            {myServices.map(service => <ServicesItem key={service?._id} service={service} serviceDelete={true} serviceDeleteHandler={deleteConfirm} />)}
                        </div>
                        : <>
                            <p className='text-lg mt-8 bg-red-100 rounded-md py-2 text-center text-red-600'>No Services Found</p>
                        </>
                    )
                }


            </div>
        </div>
    );
}

export default MyServices;
