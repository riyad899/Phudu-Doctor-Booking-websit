import React from 'react'
import twiter from '../../assets/images/twitter-logo-2 3.png'
import Logo from '../../assets/images/fi_16340199.png'
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
        <a href="#" className="hover:text-black">Home</a>
        <a href="#" className="hover:text-black">My-Bookings</a>
        <a href="#" className="hover:text-black">Blogs</a>
        <a href="#" className="hover:text-black">Contact Us</a>
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
