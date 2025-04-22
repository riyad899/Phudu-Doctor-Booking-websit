import React from 'react';

export const Doctor = ({ singleDoctor }) => {
  return (
    <div className="card w-[350px] h-[463px] bg-white rounded-xl shadow-md p-5 flex flex-col justify-between">
      <figure className="w-full h-[250px] overflow-hidden rounded-xl">
        <img
          src={singleDoctor.image}
          alt={singleDoctor.name}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="text-center mt-4 space-y-2">
        <div className="flex justify-center gap-2">
          <span className="px-3 py-1 text-sm bg-green-100 text-green-600 rounded-full">
            Available
          </span>
          <span className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full">
            {singleDoctor.experience}
          </span>
        </div>
        <h2 className="text-xl font-semibold">{singleDoctor.name}</h2>
        <div className='flex pl-[30px]'>
        <p className="text-gray-600 text-sm">{singleDoctor.education}-</p>
        <p className="text-gray-500 text-sm">{singleDoctor.speciality}</p>
        </div>
        <div className='border-2 border-dotted border-gray-300'></div>

        <p className="text-gray-500 text-sm">
          <span className="font-semibold">Reg No:</span> {singleDoctor.registrationNumber}
        </p>
        <button className="mt-4 px-6 py-2 w-[300px]  h-[49px] border border-blue-600 text-[blue] rounded-full hover:bg-blue-700 transition hover:text-[#FFFFFF]">
          View Details
        </button>
      </div>
    </div>
  );
};
