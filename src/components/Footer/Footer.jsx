import React from 'react'
import twiter from '../../assets/images/twitter-logo-2 3.png'
import Logo from '../../assets/images/fi_16340199.png'
import { Link } from 'react-router'
export const Footer = () => {
  return (
    <footer className="bg-white py-10 text-center border-t">
    <div className="flex flex-col items-center justify-center space-y-4">
      {/* Logo + Title */}
      <div className="flex items-center space-x-2">
        <img src={Logo} alt="" />
        <span className="text-xl font-semibold text-black">Phudu</span>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-6 text-sm text-gray-600">
      <Link className='m-3 text-[#6a6a6a]' to="/"> Home</Link>
    <Link className='m-3 text-[#6a6a6a]' to="/my-bookings">My-Bookings</Link>
    <Link className='m-3 text-[#6a6a6a]' to="/blogs">Blogs</Link>
    <Link className='m-3 text-[#6a6a6a]' to="/contact-us">Contact Us</Link>
      </div>

      {/* Divider */}
      <div className="w-4/5 border-t border-gray-300 my-4"></div>

      {/* Social Icons */}
      <div className="flex space-x-6">
        <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className="w-6 h-6" /></a>
        <a href="#"><img src={twiter} alt="Twiter" className="w-6 h-6" /></a>
        <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="w-6 h-6" /></a>
        <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" className="w-6 h-6" /></a>
      </div>
    </div>
  </footer>


  )
}
