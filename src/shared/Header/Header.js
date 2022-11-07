import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className='container mx-auto'>
                <nav className='py-2 flex items-center'>
                    <Link className='flex-1'>
                        <h1>Logo</h1>
                    </Link>
                    <div className=''>
                        <ul className='flex gap-2'>
                            <li>
                                <NavLink className='block py-2 px-3 transition-all hover:border-b border-violet-500'>Home</NavLink>
                            </li>
                            <li>
                                <NavLink className='block py-2 px-3 transition-all hover:border-b border-violet-500'>About</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
