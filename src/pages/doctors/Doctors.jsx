import React, { Suspense, useState, useEffect } from 'react';
import { Doctor } from '../book/Doctor';
import { Loading } from '../../components/Loading/Loading';

export const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDoctors = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('/doctors.json'); 
      if (!response.ok) throw new Error('Failed to fetch doctors');
      const data = await response.json();
      setDoctors(data);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching doctors:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  const visibleDoctors = showAll ? doctors : doctors.slice(0, 6);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="text-center p-4">
        <p className="text-red-500">Error: {error}</p>
        <button
          onClick={fetchDoctors}
          className="btn btn-primary mt-4 bg-[#176AE5] text-[#FFFFFF] rounded-4xl h-[52px]"
        >
          Retry
        </button>
      </div>
    );
  }

  if (doctors.length === 0) {
    return (
      <div className="text-center p-4">
        <p>No doctors available.</p>
        <button
          onClick={fetchDoctors}
          className="btn btn-primary mt-4 bg-[#176AE5] text-[#FFFFFF] rounded-4xl h-[52px]"
        >
          Load Doctors
        </button>
      </div>
    );
  }

  return (
    <div className="text-center space-y-6 p-4">
      <h1 className="text-3xl font-bold">Our Best Doctors</h1>
      <p>
        Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
        Whether it's a <br />
        routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
        <Suspense fallback={<Loading />}>
          {visibleDoctors.map((doctor) => (
            <Doctor key={doctor.id} singleDoctor={doctor} />
          ))}
        </Suspense>
      </div>

      {doctors.length > 6 && (
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