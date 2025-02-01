import React, { useContext, useEffect, useState } from 'react';
import './Header.css'

import logo from '../Images/logo.png';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

// import logo1 from '../Images/Logo1.png';

const Header = () => {






    const { user, logOut } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location])
    const links =
        <>

            <li onClick={() => setIsOpen(false)}>
                <Link className={`hover:text-blue-900 ${location.pathname === '/' ? 'text-blue-900' : ''}`} to="/">Home</Link>
            </li>
            <li onClick={() => setIsOpen(false)}>
                <Link className={`hover:text-blue-900 ${location.pathname === '/works' ? 'text-blue-900' : ''}`} to="/works">Works</Link>
            </li>
            <li onClick={() => setIsOpen(false)}>
                <Link className={`hover:text-blue-900 ${location.pathname === '/aboutus' ? 'text-blue-900' : ''}`} to="/aboutus">About</Link>
            </li>
            <li onClick={() => setIsOpen(false)}>
                <Link className={`hover:text-blue-900 ${location.pathname === '/contact' ? 'text-blue-900' : ''}`} to="/contact">Contact</Link>
            </li>
            <li onClick={() => setIsOpen(false)}>
                <Link className={`hover:text-blue-900 ${location.pathname === '/career' ? 'text-blue-900' : ''}`} to="/career">Career</Link>
            </li>

        </>


    return (


        <div>

            <nav className="bg-slate-300 shadow-md fixed w-full z-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                    {/* Logo and Company Name */}
                    <Link to='/'>
                        <div className="flex items-center">
                            <img
                                src={logo}
                                alt="Logo"
                                className="h-10 w-12"
                            />
                            {/* <span className="ml-2 text-xl font-semibold text-gray-800">
                            Simple Symmetry
                        </span> */}
                            <div className=''>
                                <span className="ml-2 text-sm md:text-xl font-bold text-black ">
                                    Simple Symmetry
                                </span>

                            </div>
                        </div></Link>

                    {/* Menu Items for Desktop */}
                    <ul className="hidden md:flex space-x-6 font-semibold text-black ">
                        {links}
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <ul className="md:hidden font-semibold bg-white shadow-md text-gray-600 pl-5 absolute right-4 w-48">
                        {links}
                    </ul>
                )}
            </nav><br />



        </div>


    );
};

export default Header;