import React from 'react'
import { Navbar } from '../../components/Header/Navbar'
import { Footer } from '../../components/Footer/Footer'
import { Outlet } from 'react-router'
import { useNavigation } from 'react-router'
import { Loading } from '../../components/Loading/Loading'

export const Root = () => {
  const navigation = useNavigation();
  return (
    <div className='max-w-6xl mx-auto'>
        <Navbar></Navbar>
        {navigation.state == "loading" ? <Loading/> : <Outlet/>}

        <Footer></Footer>
    </div>
  )
}
