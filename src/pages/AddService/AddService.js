import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { UserContext } from '../../contexts/UserContextProvider/UserContextProvider';

const AddService = () => {

    const [loading, setLoading] = useState(false);
    const { user, serverRootURL } = useContext(UserContext);

    // add services

    const serviceAddHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const price = form.price.value;
        const description = form.description.value;
        const thumbnail_url = form.thumbnail_url.value;

        const url = `${serverRootURL}my-services`;

        const insertData = {
            title,
            price,
            description,
            thumbnail_url,
            authorID: user?.uid,
            authorName: user?.displayName,
            authorEmail: user?.email
        };

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(insertData)
        }

        if (title && price && description && thumbnail_url) {
            setLoading(true);
            fetch(url, requestOptions)
                .then(res => res.json())
                .then(data => {
                    setLoading(false);
                    if (data?.status === 'good') {
                        toast.success(data?.message);
                        form.reset();
                    } else {
                        toast.error(data?.message);
                    }
                })
                .catch(err => console.error(err));
        }

    }

    return (
        <div className='container mx-auto py-10'>
            <div>
                <h1 className='text-3xl text-center border-b border-gray-200 pb-5'>Add Services</h1>
                <div>
                    <div className='w-full md:w-10/12 lg:w-9/12 mx-auto shadow-lg px-3 py-5 border border-gray-100 rounded-md mt-10'>
                        <form onSubmit={serviceAddHandler}>
                            <div className='flex gap-4 mt-5'>
                                <div className='flex-1'>
                                    <label className='inline-block cursor-pointer mb-2 text-lg' htmlFor='title'>Service Title</label>
                                    <input className='border border-gray-200 w-full rounded-md py-2 px-3 focus:outline-violet-500' type='text' placeholder='Enter Service Title' name='title' id='title' required />
                                </div>
                                <div className='flex-1'>
                                    <label className='inline-block cursor-pointer mb-2 text-lg' htmlFor='price'>Service Price</label>
                                    <input className='border border-gray-200 w-full rounded-md py-2 px-3 focus:outline-violet-500' type='text' placeholder='Price' name='price' id='price' required />
                                </div>
                            </div>
                            <div className='mt-3'>
                                <label className='inline-block mb-2 cursor-pointer text-lg' htmlFor='thumbnail_url'>Service Thumbnail Url</label>
                                <input className='border border-gray-200 w-full rounded-md py-2 px-3 focus:outline-violet-500' type='url' placeholder='https://exmaple.com/bg.png' name='thumbnail_url' id='thumbnail_url' />
                            </div>
                            <div className='mt-3'>
                                <label className='inline-block cursor-pointer mb-2 text-lg' htmlFor='description'>Service Description</label>
                                <textarea className='border border-gray-200 w-full rounded-md py-2 px-3 focus:outline-violet-500 resize-y-auto min-h-[180px]' placeholder='Description' name='description' id='description' required></textarea>
                            </div>
                            {loading && <div className='h-20 flex justify-center items-center'>
                                <span className='block w-8 h-8 rounded-full border-4 border-gray-500 border-t-gray-200 animate-spin'></span>
                            </div>}

                            <div className={`mt-3 ${loading ? 'pointer-events-none' : 'pointer-events-auto'}`}>
                                <button type='submit' className='px-8 py-2 bg-green-500 text-slate-50 mr-4'>Add</button>
                                <button type='reset' className='px-8 py-2 bg-red-500 text-slate-50 mr-4'>Reset</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddService;
