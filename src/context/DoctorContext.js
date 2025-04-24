// src/context/DoctorContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const DoctorContext = createContext();

export const useDoctorContext = () => useContext(DoctorContext);

export const DoctorProvider = ({ children }) => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Try to load from localStorage first
    const storedDoctors = localStorage.getItem('doctors');
    if (storedDoctors) {
      setDoctors(JSON.parse(storedDoctors));
    } else {
      // Simulate API call
      fetch('/api/doctors') // replace with your actual API
        .then(res => res.json())
        .then(data => {
          setDoctors(data);
          localStorage.setItem('doctors', JSON.stringify(data));
        });
    }
  }, []);

  return (
    <DoctorContext.Provider value={{ doctors, setDoctors }}>
      {children}
    </DoctorContext.Provider>
  );
};
