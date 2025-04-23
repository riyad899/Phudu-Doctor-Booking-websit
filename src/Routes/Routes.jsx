    import React from 'react'
    import {
        createBrowserRouter,
        RouterProvider,
    } from "react-router";
    import { Root } from '../pages/root/Root';
    import { ErrorPage } from '../pages/error/ErrorPage';
    import { Home } from '../components/Home/Home';
    import { SingleBook } from '../pages/SingleBook/SingleBook';
    import { MyBookings } from '../pages/MyBookings/MyBookings';
    import { Blogs } from '../pages/Blogs/Blogs';
    import { ContactUs } from '../pages/ContactUs/ContactUs';
    import { Emergency } from '../pages/Emergency/Emergency';


    export const router = createBrowserRouter([
        {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
            index: true,
            loader: () => fetch('doctors.json'),
            element: <Home/>
            },
            {
            path: '/singleBook/:registrationNumber',
            loader: async () => {
                const response = await fetch('/NewDoctor.json');
                if (!response.ok) {
                  throw new Error('Failed to fetch data');
                }
                return response.json();
              },
            element: <SingleBook />
            },
            {
            path: '/my-bookings',
            element: <MyBookings />
            },
            {
            path: '/blogs',
            element: <Blogs />
            },
            {
            path: '/contact-us',
            element: <ContactUs />
            },
            {
            path: '/emergency',

            element: <Emergency />
            }
        ]

        },
    ]);