import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router";
import { Root } from '../pages/root/Root';
import { ErrorPage } from '../pages/error/ErrorPage';
import { Home } from '../components/Home/Home';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            index:true,
            loader:()=>fetch('doctors.json'),
            path:"/",
            element:<Home></Home>
        }
    ]
  },
]);