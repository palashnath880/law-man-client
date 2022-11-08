import React, { useState } from 'react';

const AddService = () => {
    const [loading, setLoading] = useState(false);
    return (
        <div className='container mx-auto py-10'>
            <div>
                <h1 className='text-3xl text-center border-b border-gray-200 pb-5'>Add Services</h1>
                <div>
                    <div className='w-full md:w-10/12 lg:w-9/12 mx-auto shadow-lg px-3 py-5 border border-gray-100 rounded-md mt-10'>
                        <form>
                            <div className='flex gap-4 mt-5'>
                                <div className='flex-1'>
                                    <label className='inline-block cursor-pointer mb-2 text-lg' htmlFor='title'>Service Title</label>
                                    <input className='border border-gray-200 w-full rounded-md py-2 px-3 focus:outline-violet-500' type='text' placeholder='Enter Service Title' name='title' id='title' />
                                </div>
                                <div className='flex-1'>
                                    <label className='inline-block cursor-pointer mb-2 text-lg' htmlFor='price'>Service Price</label>
                                    <input className='border border-gray-200 w-full rounded-md py-2 px-3 focus:outline-violet-500' type='text' placeholder='Price' name='price' id='price' />
                                </div>
                            </div>
                            <div className='mt-3'>
                                <label className='inline-block mb-2 cursor-pointer text-lg' htmlFor='thumbnail_url'>Service Thumbnail Url</label>
                                <input className='border border-gray-200 w-full rounded-md py-2 px-3 focus:outline-violet-500' type='url' placeholder='https://exmaple.com/bg.png' name='thumbnail_url' id='thumbnail_url' />
                            </div>
                            <div className='mt-3'>
                                <label className='inline-block cursor-pointer mb-2 text-lg' htmlFor='description'>Service Description</label>
                                <textarea className='border border-gray-200 w-full rounded-md py-2 px-3 focus:outline-violet-500 resize-y-auto min-h-[180px]' placeholder='Description' name='description' id='description'></textarea>
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
