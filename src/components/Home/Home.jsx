import React from 'react'
import { Banner } from '../Banner/Banner'

import { useLoaderData } from 'react-router'
import { Doctors } from '../../pages/doctors/Doctors';

export const Home = () => {
    const data =useLoaderData();

  return (
    <>
   <Banner></Banner>
    <Doctors data={data}></Doctors>
    </>
  )
}
