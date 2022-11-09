import React, { useContext, useState } from 'react';
import SignUp from '../../components/SignUp/SignUp';
import SocialLogin from '../../components/SocialLogin/SocialLogin';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { UserContext } from '../../contexts/UserContextProvider/UserContextProvider';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Login = () => {

    const [isLoginForm, setIsLoginForm] = useState(true);
    const [forgetPwdModal, setForgetPwdModal] = useState(false);
    const [loginError, setLoginError] = useState(null);
    const [resetPwdError, setResetPwdError] = useState(null);
    const [loading, setLoading] = useState(false);

    const { loginUser, passwordReset, createJWT } = useContext(UserContext);

    const location = useLocation();
    const pathName = location?.state?.from?.pathname || '/';

    const navigate = useNavigate();

    // password reset handler 
    const forgetPwdHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;

        setResetPwdError(null);
        if (!email) {
            return;
        }
        passwordReset(email)
            .then(() => {
                toast.success('Password reset link send successfully.');
                setForgetPwdModal(false);
            })
            .catch(err => {
                const errorCode = err.code;
                errorCode === 'auth/user-not-found' && setResetPwdError('User Not Found');
            });
    }

    // login form handler 
    const loginFormHandler = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        setLoginError(null);
        if (password.length < 6) {
            setLoginError('Please enter password more than 6 characters.');
            return;
        }
        setLoading(true);
        loginUser(email, password)
            .then((result) => {
                toast.success('Login Successfully');
                createJWT(result?.user?.uid);
                navigate(pathName, { replace: true });
            })
            .catch(err => {
                const errorCode = err.code;
                errorCode === 'auth/user-not-found' && setLoginError('No user have at this email.');
                errorCode === 'auth/wrong-password' && setLoginError('Incorrect Password.');
                setLoading(false);
            });


    }

    return (
        <div className="">
            <div className="container mx-auto px-0 md:px-6 py-12 h-full">
                <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                    <div className="hidden md:block md:w-6/12 lg:w-6/12 mb-12 md:mb-0">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                            className="w-full"
                            alt="Phone thumbnail"
                        />
                    </div>
                    <div className="w-11/12 md:w-6/12 lg:w-5/12 xl:w-4/12 lg:ml-20">
                        {
                            isLoginForm ?
                                <>
                                    <Helmet><title>Login- law-Man</title></Helmet>
                                    <form onSubmit={loginFormHandler} className='bg-base-100 shadow-lg px-5 py-8 rounded-md border border-slate-200'>
                                        <h1 className='text-2xl pb-6 pl-2 font-semibold'>Login!</h1>
                                        <div className="mb-6">
                                            <input name='email' type="email" className="form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email address" required />
                                        </div>

                                        <div className="mb-6">
                                            <input name='password' type="password" className="form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Password" required />
                                        </div>

                                        <div className="flex justify-between items-center mb-6">
                                            <div className="form-group form-check">
                                                <input type="checkbox" className="form-check-input h-4 w-4 border border-gray-300 rounded-sm bg-white  transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" id="remember_check" />
                                                <label className="form-check-label inline-block text-gray-800 cursor-pointer" htmlFor="remember_check">Remember me</label>
                                            </div>
                                            <button onClick={() => setForgetPwdModal(true)} type='button' className="text-blue-700 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out">Forgot password?</button>
                                        </div>

                                        {loginError !== null && <p className='text-center text-red-500 text-sm py-1 mb-4 bg-red-100 rounded'>{loginError}</p>}

                                        <button
                                            disabled={loading ? true : false}
                                            type="submit"
                                            className="flex justify-center items-center gap-2 px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                        >
                                            <span className={`block ${loading ? 'visible' : 'invisible'} w-5 h-5 animate-spin rounded-full border-4 border-slate-300 border-t-slate-50`}></span>
                                            Login
                                        </button>

                                        <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                                            <p className="text-center font-semibold mx-4 mb-0">OR</p>
                                        </div>

                                        <SocialLogin />
                                        <div className='mt-3'>
                                            <p className='text-center'>
                                                <small>If you are new member, Please
                                                    <button type='button' onClick={() => setIsLoginForm(false)} className='text-blue-600 hover:underline ml-1'>Sign Up</button>
                                                </small>
                                            </p>
                                        </div>

                                    </form>
                                </>
                                : <SignUp loginFormToggle={setIsLoginForm} />
                        }

                    </div>
                </div>
            </div>
            {/* Forget password modal */}
            {
                forgetPwdModal &&
                <div className='h-screen w-full fixed top-0 right-0' style={{ background: 'linear-gradient(#00000075, #00000075)' }}>
                    <div className='h-full w-full flex items-center justify-center'>
                        <div className='relative w-11/12 md:w-[350px] px-4 py-6 bg-slate-100 rounded-md'>
                            <form className='' onSubmit={forgetPwdHandler}>
                                <button type='button' onClick={() => setForgetPwdModal(false)} className='absolute top-[8px] right-[8px]'>
                                    <XMarkIcon className='w-6 h-6' />
                                </button>
                                <h3 className='text-center pb-3 text-lg font-semibold'>Forget Password</h3>
                                <div>
                                    <input name='email' type='email' className='w-full py-2 px-3 rounded border-0 focus:outline-violet-500' placeholder='Enter Your Email' required />
                                </div>
                                {resetPwdError !== null && <p className='text-red-500 mt-3 text-center text-base'><small>{resetPwdError}</small></p>}
                                <div className='mt-4'>
                                    <button type='submit' className='w-full py-2 px-3 rounded bg-blue-600 text-slate-50'>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            }

        </div >
    );
}

export default Login;
