import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../../layout/Main/Main';
import Home from '../../pages/Home/Home/Home';
import Login from '../../pages/Login/Login';
import AuthRoutes from '../AuthRoutes/AuthRoutes';

const Routes = () => {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main />,
            children: [
                {
                    path: '/',
                    element: <Home />,
                },
                {
                    path: '/login',
                    element: <AuthRoutes><Login /></AuthRoutes>
                }
            ]
        }
    ]);

    return (
        <RouterProvider router={router}>

        </RouterProvider>
    );
}

export default Routes;
