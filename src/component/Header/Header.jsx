import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Links from '../Links/Links';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <span className="md:text-2xl hidden md:block"><span className='font-bold'>Edu</span>Min</span>
    );
};

const Header = () => {
    const routes = [
        {
            id: 1,
            name: "Home",
            path: "/"
        },
        {
            id: 2,
            name: "Blogs",
            path: "/blog"
        },
        {
            id: 3,
            name: "Courses",
            path: "/course"
        },
        {
            id: 4,
            name: "About",
            path: "/about"
        },
        {
            id: 5,
            name: "Contact",
            path: "/contact"
        },

    ];
    const [open, setOpen] = useState(false);

    const handleLinkClick = () => {
        setOpen(false);
    };

    return (
        <nav className=''>
            <div className='md:hidden flex justify-between m-4'>
                <div>
                    <h1><span className='font-bold'>Edu</span>Min</h1>
                </div>
                <span onClick={() => setOpen(!open)} >{open === true
                    ? <XMarkIcon className="h-6 w-6 text-blue-500" />
                    : <Bars3Icon className="h-6 w-6 text-blue-500" />
                }</span>
            </div>
            <ul className={`duration-500 absolute md:static bg-pink-100 px-5 md:px-28 py-3 w-full h-full ${open ? 'left-0' : '-left-full'}`}>

                <div className="md:flex md:items-center md:justify-between">
                    <span><Logo /></span>
                    <div className='md:flex md:justify-end md:items-center gap-10'>
                        {
                            routes.map(route =>
                                <Links
                                    key={route.id}
                                    route={route}
                                    onClick={handleLinkClick}
                                />
                            )
                        }
                    <span>
                        <button onClick={() => handleLinkClick()} className="bg-red-400  text-white font-bold py-2 px-5 rounded ">
                            <Link to='/course'>Start Free Trial</Link>
                        </button>
                    </span>
                    </div>
                </div>
            </ul>
        </nav>
    );
};

export default Header;
