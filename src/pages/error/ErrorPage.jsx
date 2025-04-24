import React from 'react'
import { Link } from 'react-router'
import robotImg from '../../assets/images/istockphoto-1404059706-612x612.jpg'
export const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-4">
    <div className="max-w-md">
      <img
        src={robotImg}
        alt="404 Robot"
        className="w-64 h-auto mx-auto"
      />
      <h1 className="text-4xl font-bold text-pink-600 mt-6">404 - Page Not Found</h1>
      <p className="text-gray-600 mt-2">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to="/">
      <button

        className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Go Back Home
      </button>

      </Link>
    </div>
  </div>

  )
}
