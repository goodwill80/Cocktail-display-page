import React, { Fragment, useContext } from 'react'
import { AppContext } from '../Context';
import { FaFacebookSquare, FaYoutubeSquare, FaBars, FaTimes } from 'react-icons/fa'
import { Outlet, Link } from 'react-router-dom';
import Logo from '../logo.svg';

function Navbar() {
    const { sideBarOpen, openSideBar, closeSideBar } = useContext(AppContext);
    const sideBarStyle = "absolute list-none flex flex-col space-y-4 left-0 top-20 w-2/3 h-screen bg-green-100 shadow-lg pl-4 pt-4 md:hidden"
  return (
    <Fragment>
        <nav className="relative mx-auto py-6 px-6 md:px-12 shadow-lg h-20">
            {/* Navbar Container */}
            <div className="flex justify-between w-full md:w-10/11 mx-auto">
                {/* Logo & Links Container */}
                <header className="flex space-x-20">
                    {/* Logo */}
                    <Link to="/">
                        <img src={Logo} alt="" />
                    </Link>
                      {/* Nav Links */}
                    <div className="hidden md:flex space-x-4 pr-16">
                        <Link className="font-bold hover:pl-1 hover:text-green-400 hover:underline" to="/">Home</Link>
                        <Link className="font-bold hover:pl-1 hover:text-green-400 hover:underline" to="/about">About</Link>
                        <Link className="font-bold hover:pl-1 hover:text-green-400 hover:underline" to="/contact">Contact</Link>
                    </div>
                </header>
                {/* Social Links */}
                <div className="hidden md:pr-2 md:flex space-x-2 items-center pr-12">
                    <a href="https://www.facebook.com">
                        <FaFacebookSquare size={20} className="hover:text-blue-600" />
                    </a>
                    <a href="https://www.youtube.com">
                        <FaYoutubeSquare size={20} className="hover:text-red-600"/>
                    </a>
                </div>
                {/* Hamburger */}
                {!sideBarOpen ? 
                    <div className="absolute right-4 flex flex-wrap items-center justify-center h-8 w-8 min-h-0 md:hidden">
                    <button onClick={ openSideBar }>
                        <FaBars size={24}/>
                    </button>
                </div> : ''
                }
                
            </div>
             {/* Sidebar */}
             <div className={sideBarOpen ? `${sideBarStyle}` : "hidden -translate-x-full ease-out duration-300"}>
                <li onClick={closeSideBar}>
                    <Link className="font-bold hover:pl-1 hover:text-green-400 hover:underline" to="/">Home</Link>
                </li>
               <li onClick={closeSideBar}>
                    <Link className="font-bold hover:pl-1 hover:text-green-400 hover:underline" to="/about">About Us</Link>
               </li>
                <li onClick={closeSideBar}>
                    <Link className="font-bold hover:pl-1 hover:text-green-400 hover:underline" to="/contact">Contact Us</Link>
                </li>
                {/* Social Icons */}
                <h1 className="text-xl font-bold text-gray-600 pt-12">Visit us at:</h1>
                <div className="flex space-x-2 items-center pr-12" onClick={closeSideBar}>
                    <a href="https://www.facebook.com">
                        <FaFacebookSquare size={20} className="hover:text-blue-600" />
                    </a>
                    <a href="https://www.youtube.com">
                        <FaYoutubeSquare size={20} className="hover:text-red-600"/>
                    </a>
                </div>
                <div className="absolute right-4 top-1 cursor-pointer" onClick={closeSideBar}>
                    <FaTimes size={16}/>
                </div>
             </div>
        </nav>
        <Outlet/>
    </Fragment>
  )
}

export default Navbar
