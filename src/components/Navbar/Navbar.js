import React, { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { MenuIcon, XIcon } from '@heroicons/react/solid';

const Navbar = () => {
    const [open, setOpen] = useState(true);
    const navigate = useNavigate();
    const routes = [
        { id: 1, name: 'HOME', link: '/home' },
        { id: 2, name: 'REVIEWS', link: '/reviews' },
        { id: 3, name: 'DASHBOARD', link: '/dashboard' },
        { id: 4, name: 'BLOGS', link: '/blogs' },
        { id: 5, name: 'ABOUT', link: '/about' },
    ];

    const linkStyle = ({ isActive }) => {
        return {
            margin: "1rem 0",
            color: isActive ? "white" : "black",
            backgroundColor: isActive ? 'gray' : '',
            fontWeight: "bold",
            borderRadius: isActive ? '10px' : '0',
        };
    };

    return (
        <div className='header flex items-center justify-between'>
            <div className='pl-10'><h2 className='text-5xl font-bold cursor-pointer' onClick={() => { navigate('/home') }}>CineMovies</h2></div>
            <nav className={`w-full flex md:justify-center items-center absolute duration-500 ease-in ${open ? 'top-6 justify-end right-[-20]' : 'top-[-120px] right-[-20]'}`}>
                <ul className='md:flex sm:block'>
                    {
                        routes.map(route => <li className='sm:my-3' key={route.id}><NavLink style={linkStyle} className='px-2' to={`${route.link}`}>{route.name}</NavLink></li>)
                    }
                </ul>
            </nav>
            <div onClick={() => setOpen(!open)} className='cursor-pointer md:hidden'>
                {open ? <MenuIcon className='w-10 h-10 mr-4'></MenuIcon> : <XIcon className='w-10 h-10 mr-4'></XIcon>}
            </div>
        </div>
    );
};

export default Navbar;