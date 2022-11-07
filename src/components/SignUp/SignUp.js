import React, { useState } from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';

const SignUp = ({ loginFormToggle }) => {

    const [signUpError, setSignUpError] = useState(null);
    return (
        <form className='bg-base-100 shadow-lg px-5 py-8 rounded-md border border-slate-200'>
            <h1 className='text-2xl pb-6 pl-2 font-semibold'>Sign Up!</h1>
            <div className="mb-6">
                <input
                    type="text"
                    name='name'
                    className="form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Full Name"
                />
            </div>
            <div className="mb-6">
                <input
                    type="email"
                    name='email'
                    className="form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Email Address"
                />
            </div>

            <div className="mb-6">
                <input
                    type="password"
                    name='password'
                    className="form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Password"
                />
            </div>

            {signUpError !== null && <p className='text-center text-red-500 text-sm py-1 mb-4 bg-red-100 rounded'>{signUpError}</p>}

            <button
                type="submit"
                className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
            >
                Signup
            </button>

            <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p className="text-center font-semibold mx-4 mb-0">OR</p>
            </div>

            <SocialLogin />
            <div className='mt-3'>
                <p className='text-center'><small>All ready have an account, Please <button type='button' onClick={() => loginFormToggle(true)} className='text-blue-600 hover:underline ml-1'>Login</button></small></p>
            </div>
        </form>
    );
}

export default SignUp;
