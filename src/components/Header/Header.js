import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContextProvider/UserContextProvider';
import { useDetectClickOutside } from 'react-detect-click-outside';
import logo from '../../images/logo.png';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {

    const { user, logoutUser } = useContext(UserContext);
    const [profileMenu, setProfileMenu] = useState(false);
    const [navMenu, setNavMenu] = useState(false);

    const profile = useDetectClickOutside({ onTriggered: () => setProfileMenu(false) });

    const logoutHandler = () => {
        logoutUser()
            .then()
            .catch(err => console.error(err));
    }

    return (
        <header className='border-b shadow-md bg-zinc-50 relative md:static'>
            <div className='container mx-auto px-5'>
                <nav className='py-2 flex items-center justify-between'>
                    <button onClick={() => setNavMenu(!navMenu)} className='focus:outline-0 block md:hidden'>
                        {navMenu ? <XMarkIcon className='w-9 h-9' /> : <Bars3Icon className='w-9 h-9'></Bars3Icon>}
                    </button>
                    <Link className='flex-0 md:flex-1' to='/'>
                        <img className='w-16 h-auto' src={logo} alt='logo' />
                    </Link>
                    <div className={`${navMenu ? 'block' : 'hidden'} md:block bg-zinc-50 absolute md:static w-full md:w-auto h-auto top-full right-0 border-t md:border-0`}>
                        <ul className='flex flex-col md:flex-row gap-2 py-5 px-3 md:p-0'>
                            <li>
                                <NavLink className='block text-center py-2 px-3 transition-all border-b border-transparent hover:border-violet-500' to='/'>Home</NavLink>
                            </li>
                            <li>
                                <NavLink className='block text-center py-2 px-3 transition-all border-b border-transparent hover:border-violet-500' to='/services'>Services</NavLink>
                            </li>
                            <li>
                                <NavLink className='block text-center py-2 px-3 transition-all border-b border-transparent hover:border-violet-500' to='/blogs'>Blogs</NavLink>
                            </li>
                            {user !== null &&
                                <>
                                    <li>
                                        <NavLink className='block text-center py-2 px-3 transition-all border-b border-transparent hover:border-violet-500' to='/my-services'>My Services</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className='block text-center py-2 px-3 transition-all border-b border-transparent hover:border-violet-500' to='/my-reviews'>My Reviews</NavLink>
                                    </li>
                                </>
                            }
                            {user === null ?
                                <li className='hidden md:block'>
                                    <NavLink className='block text-center py-2 px-3 transition-all border-b border-transparent hover:border-violet-500' to='/login'>Login</NavLink>
                                </li> :
                                <>
                                    <div className='relative ml-4 hidden md:block' ref={profile}>
                                        <div ref={profile}>
                                            <label onClick={() => setProfileMenu(!profileMenu)} className='w-10 h-10 block rounded-full overflow-hidden focus:border-violet-500 cursor-pointer'><img src={user?.photoURL} alt='Profile Thumbnail' /></label>
                                        </div>
                                        <div className={`absolute z-50 top-full duration-200 right-0 bg-zinc-100 px-2 py-2 w-48 rounded-xl ${profileMenu ? 'visible opacity-100' : 'invisible opacity-0'}`}>
                                            <ul>
                                                <li>
                                                    <button onClick={logoutHandler} className='w-full text-start py-2 px-2 duration-300 b hover:bg-slate-50 rounded-lg' >Logout</button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </>
                            }
                            {
                                user !== null && <li className='block md:hidden'>
                                    <button onClick={logoutHandler} className='w-full text-center py-2 px-2 duration-300 b hover:bg-slate-50 rounded-lg' >Logout</button>
                                </li>
                            }

                        </ul>
                    </div>
                    {
                        user !== null ?
                            <div className='relative ml-4 block md:hidden' >
                                <div ref={profile}>
                                    <label onClick={() => setProfileMenu(!profileMenu)} className='w-10 h-10 block rounded-full overflow-hidden focus:border-violet-500 cursor-pointer'><img src={user?.photoURL} alt='Profile Thumbnail' /></label>
                                </div>
                                <div className={`absolute z-50 top-full duration-200 right-0 bg-zinc-100 px-2 py-2 w-48 rounded-xl ${profileMenu ? 'visible opacity-100' : 'invisible opacity-0'}`}>
                                    <ul>
                                        <li>
                                            <NavLink className='block text-start py-2 px-2 transition-all border-b border-transparent hover:border-violet-500' to='/my-services'>My Services</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className='block text-start py-2 px-2 transition-all border-b border-transparent hover:border-violet-500' to='/my-reviews'>My Reviews</NavLink>
                                        </li>
                                        <li>
                                            <button onClick={logoutHandler} className='w-full text-start py-2 px-2 duration-300 b hover:bg-slate-50 rounded-lg' >Logout</button>
                                        </li>
                                    </ul>
                                </div>
                            </div> :
                            <>
                                <li className='block md:hidden'>
                                    <NavLink className='block text-center py-2 px-3 transition-all border-b border-transparent hover:border-violet-500' to='/login'>Login</NavLink>
                                </li>
                            </>
                    }
                </nav>
            </div >
        </header >
    );
}

export default Header;
