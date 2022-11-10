import React, { useContext, useState, useEffect } from 'react';
import BestServicesItem from '../../../components/BestServicesItem/BestServicesItem';
import { ReviewContext } from '../../../contexts/ReviewContextProvider/ReviewContextProvider';
import { UserContext } from '../../../contexts/UserContextProvider/UserContextProvider';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import "swiper/css";
import "swiper/css/bundle";

const BestServices = () => {

    const { reviews } = useContext(ReviewContext);
    const { serverRootURL } = useContext(UserContext);
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`${serverRootURL}services?limit=0`)
            .then(res => res.json())
            .then(data => {
                const concatReviewService = reviews.map(rev => {
                    const findService = data.find(ser => ser._id === rev._id);
                    if (findService) {
                        return { ...findService, ...rev };
                    }
                });
                setServices(concatReviewService);
            })
            .catch(err => console.error(err));
    }, [reviews]);

    const bestService = services.sort((a, b) => b.avg - a.avg).slice(0, 3);

    return (
        <div className=''>
            <div className='container mx-auto px-5 py-10'>
                <div className=''>
                    <h1 className='text-3xl pb-5 text-center border-b border-gray-200'>Best Services</h1>
                    <div className='mt-5'>
                        <div className='w-full md:w-10/12 lg:w-8/12 mx-auto'>
                            <Swiper
                                modules={[Autoplay]}
                                spaceBetween={10}
                                slidesPerView={1}
                                loop={true}
                                autoplay
                                className='my-swiper'
                            >
                                {
                                    bestService.map(service => <SwiperSlide key={service._id}><BestServicesItem service={service} /></SwiperSlide>)
                                }
                            </Swiper>


                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default BestServices;
