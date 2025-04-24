// SingleBook.jsx
import React from 'react';
import { Link, useLoaderData, useParams, useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SingleBook = () => {
  const newData = useLoaderData();
  const { registrationNumber } = useParams();
  const navigate = useNavigate();
  const doctor = newData.find(doc => doc.registrationNumber === registrationNumber);

  if (!doctor) {
    return <div className="text-center text-red-500 mt-10">Doctor not found.</div>;
  }

  const handleAppointment = (e) => {
    e.preventDefault();

    // Store doctor booking in localStorage
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    bookings.push({
      id: Date.now(), // Unique ID for the booking
      doctor: doctor,
      bookingDate: new Date().toISOString()
    });
    localStorage.setItem('bookings', JSON.stringify(bookings));

    toast.success(`Appointment Scheduled for Dr. ${doctor.name} successfully!`, {
      position: "top-right",
      autoClose: 500,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      onClose: () => {
        navigate('/my-bookings');
      }
    });
  };

  return (
    <div className="max-w-[1200px] mx-auto bg-white rounded-lg shadow-sm mt-[10px] mb-[30px]">
      <div className="pt-8 pb-4 text-center">
        <h1 className="text-2xl font-bold text-gray-800">Doctor's Profile Details</h1>
        <p className="text-sm text-gray-500 px-8 mt-2">
          {doctor.profileDetails}
        </p>
      </div>

      <div className="flex justify-center">
        <div className="w-12 h-1 bg-pink-500 rounded-full mb-4"></div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-sm p-4">
          <div className="relative">
            <div className="w-48 h-48 bg-blue-400 rounded-lg overflow-hidden relative">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 bg-blue-500 text-white w-6 h-6 flex items-center justify-center rounded-tl-lg">
                {doctor.id}
              </div>
            </div>
          </div>

          <div className="md:ml-6 mt-4 md:mt-0">
            <h2 className="text-xl font-bold text-gray-800">{doctor.name}</h2>
            <p className="text-sm text-gray-600">{doctor.education}</p>
            <p className="text-sm text-gray-600">{doctor.speciality}</p>

            <div className="mt-4">
              <p className="text-sm text-gray-500">Experience</p>
              <p className="text-sm font-medium">{doctor.experience}</p>
            </div>

            <div className="mt-4 flex items-center">
              <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
              </svg>
              <span className="ml-2 text-sm text-gray-600">Reg No: {doctor.registrationNumber}</span>
            </div>

            <div className="mt-4">
              <p className="text-sm font-semibold text-gray-700 mb-1">Availability:</p>
              <ul className="list-disc list-inside text-sm text-gray-600">
                {doctor.availabilityDays.map((day, index) => (
                  <li key={index}>{day}</li>
                ))}
              </ul>
            </div>

            <div className="mt-4">
              <p className="text-sm text-gray-600">Consultation Fee:</p>
              <div className="flex items-center">
                <span className="font-medium">Taka · {doctor.consultationFee}</span>
                <span className="text-xs text-gray-500 ml-2">(incl. Vat)</span>
                <span className="text-xs text-blue-500 ml-2">Per consultation</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-bold text-center mb-4">Book an Appointment</h3>

          <div className="flex justify-between items-center mb-2">
            <p className="text-sm font-medium">Availability</p>
            <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs">Doctor Available Today</span>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4">
            <div className="flex">
              <svg className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-sm text-amber-700">
                Due to high patient volume, we are currently accepting appointments for today only.
              </p>
            </div>
          </div>

          <button
            onClick={handleAppointment}
            className="w-full cursor-pointer bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition duration-200"
          >
            Book Appointment Now
          </button>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={1000} />
    </div>
  );
};