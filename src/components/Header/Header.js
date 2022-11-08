import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContextProvider/UserContextProvider';
import { useDetectClickOutside } from 'react-detect-click-outside';

const Header = () => {

    const { user, logoutUser } = useContext(UserContext);
    const [profileMenu, setProfileMenu] = useState(false);

    const closeProfileMenu = () => {
        setProfileMenu(false);
    }
    const ref = useDetectClickOutside({ onTriggered: closeProfileMenu });

    const logoutHandler = () => {
        logoutUser()
            .then()
            .catch(err => console.error(err));
    }

    return (
        <header className='border-b shadow-md bg-zinc-50'>
            <div className='container mx-auto'>
                <nav className='py-2 flex items-center'>
                    <Link className='flex-1'>
                        <h1>Logo</h1>
                    </Link>
                    <div className=''>
                        <ul className='flex gap-2'>
                            <li>
                                <NavLink className='block py-2 px-3 transition-all hover:border-b border-violet-500' to='/'>Home</NavLink>
                            </li>
                            <li>
                                <NavLink className='block py-2 px-3 transition-all hover:border-b border-violet-500' to='/about'>About</NavLink>
                            </li>
                            <li>
                                <NavLink className='block py-2 px-3 transition-all hover:border-b border-violet-500' to='/services'>Services</NavLink>
                            </li>
                            <li>
                                <NavLink className='block py-2 px-3 transition-all hover:border-b border-violet-500' to='/blogs'>Blogs</NavLink>
                            </li>
                            {user !== null &&
                                <li>
                                    <NavLink className='block py-2 px-3 transition-all hover:border-b border-violet-500' to='/my-services'>My Services</NavLink>
                                </li>
                            }
                            {user === null ?
                                <li>
                                    <NavLink className='block py-2 px-3 transition-all hover:border-b border-violet-500' to='/login'>Login</NavLink>
                                </li> :
                                <>
                                    <div className='relative ml-4' ref={ref}>
                                        <label onClick={() => setProfileMenu(!profileMenu)} className='w-10 h-10 block rounded-full overflow-hidden focus:border-violet-500 cursor-pointer'><img src={user?.photoURL} alt='Profile Thumbnail' /></label>
                                        <div className={`absolute z-50 top-full duration-200 right-0 bg-zinc-100 px-2 py-2 w-48 rounded-xl ${profileMenu ? 'visible opacity-100' : 'invisible opacity-0'}`}>
                                            <ul>
                                                <li>
                                                    <NavLink className='block py-2 px-2 duration-300 b hover:bg-slate-50 rounded-lg' to='/profile'>Profile</NavLink>
                                                </li>
                                                <li>
                                                    <button onClick={logoutHandler} className='w-full text-start py-2 px-2 duration-300 b hover:bg-slate-50 rounded-lg' >Logout</button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </>
                            }

                        </ul>
                    </div>
                </nav>
            </div >
        </header >
    );
}

export default Header;
