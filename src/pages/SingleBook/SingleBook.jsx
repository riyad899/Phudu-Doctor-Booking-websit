import React from 'react';
import { useLoaderData, useParams } from 'react-router';


export const SingleBook = () => {
  const newData = useLoaderData();
  const {registrationNumber} = useParams();
  const DoctorRegistratioNUmber=newData;
  console.log(registrationNumber);
  const doctor = DoctorRegistratioNUmber.find(doc => doc.registrationNumber === registrationNumber);



  return (
    <div>
      {/* Display your data here */}
      SingleBook
    </div>
  );
};