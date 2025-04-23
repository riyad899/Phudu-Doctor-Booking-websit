import React from 'react'
import logo from '../../assets/images/fi_16340199.png'
import { Link, NavLink } from 'react-router'



export const Navbar = () => {
    const activeStyle = (isActive) => {
        return {
            color: isActive ? "blue" : "#6a6a6a",
            fontWeight: isActive ? "bold" : "normal"
        };
    };

    const LinkItems = (
        <>
            <NavLink
                className='m-3'
                to="/"
                style={({ isActive }) => activeStyle(isActive)}
            >
                Home
            </NavLink>

            <NavLink
                className='m-3'
                to="/my-bookings"
                style={({ isActive }) => activeStyle(isActive)}
            >
                My-Bookings
            </NavLink>

            <NavLink
                className='m-3'
                to="/blogs"
                style={({ isActive }) => activeStyle(isActive)}
            >
                Blogs
            </NavLink>

            <NavLink
                className='m-3'
                to="/contact-us"
                style={({ isActive }) => activeStyle(isActive)}
            >
                Contact Us
            </NavLink>
        </>
    );
    return (

        <div className="navbar shadow-sm ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm  dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                       {LinkItems}
                    </ul>
                </div>
                <div className='flex pl-[15%]'>
                <img src={logo} alt="Logo" className="w-10 h-10" />
                <a className="btn btn-ghost text-xl  pl-[5%]">Phudu</a>

                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                 {LinkItems}
                </ul>
            </div>
            <div className="navbar-end pr-[5%] ">
                <a className="btn rounded-[100px]  bg-[#176AE5] text-[#FFFFFF] w-[172px] h-[56px]">Emergency</a>
            </div>
        </div>
    )
}
