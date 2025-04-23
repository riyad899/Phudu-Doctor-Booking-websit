import React, { Suspense } from 'react'
import { Banner } from '../Banner/Banner'

import { useLoaderData } from 'react-router'
import { Doctors } from '../../pages/doctors/Doctors';
import { Loading } from '../Loading/Loading';

export const Home = () => {
    const data =useLoaderData();


  return (
    <>
   <Banner></Banner>

    <Doctors data={data}></Doctors>
    </>
  )
}
