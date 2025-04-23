import React from 'react'
import { useLoaderData, useParams } from 'react-router';


export const SingleBook = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const singleDoc = data.find(doc => doc.id === Number(id));
    return (
        <>
                <div className='max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-[5px] mb-[20px]'>
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">Doctor's Profile Details</h1>

                    <p className="text-gray-600 mb-6">
                        Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor aeneut. Succipit sed est fermentum magna. Quis vitae tempus facilisis turpis imperdiet mattis dolore dignissim volutpat.
                    </p>
                </div>

            <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">

                <div className="flex flex-col md:flex-row gap-8">
                    {/* Doctor Image */}
                    <div className="w-full md:w-1/3">
                        <img
                            src={singleDoc.image}
                            alt={singleDoc.name}
                            className="w-full h-auto rounded-lg object-cover"
                        />
                    </div>

                    {/* Doctor Details */}
                    <div className="w-full md:w-2/3">


                        <div className="mb-6">
                            <h2 className="text-xl font-semibold text-gray-800">{singleDoc.name}</h2>
                            <p className="text-gray-600">{singleDoc.education}</p>
                            <p className="text-gray-600">{singleDoc.speciality}</p>
                            <p className="text-gray-600">Experience: {singleDoc.experience}</p>
                            <p className="text-gray-600">Reg No: {singleDoc.registrationNumber}</p>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Availability</h3>
                            <p className="text-gray-600 mb-2">
                                Consultation Fee: Taka 500 (approx. $5) per consultation
                            </p>
                            <p className="text-gray-600 italic">
                                Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.
                            </p>
                        </div>

                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-300">
                            Book Appointment Now
                        </button>
                    </div>
                </div>
            </div>

        </>
    );
}
