import React, { Suspense, useState } from 'react';
import { Doctor } from '../book/Doctor';

export const Doctors = ({ data }) => {
  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  const visibleDoctors = showAll ? data : data.slice(0, 6);

  return (
    <div className="text-center space-y-6 p-4">
      <h1 className="text-3xl font-bold">Our Best Doctors</h1>
      <p>
        Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
        Whether it's a <br />
         routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
        <Suspense fallback={<span>Loading.....</span>}>
          {visibleDoctors.map((singleDoc, idx) => (
            <Doctor key={idx} singleDoctor={singleDoc} />
          ))}
        </Suspense>
      </div>

      {data.length > 6 && (
        <button
          onClick={handleToggle}
          className="btn btn-primary mt-4 bg-[#176AE5] text-[#FFFFFF] rounded-4xl h-[52px]"
        >
          {showAll ? 'Hide Doctors' : 'View All Doctors'}
        </button>
      )}
    </div>
  );
};
