import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../../layout/Main/Main';
import AddService from '../../pages/AddService/AddService';
import Home from '../../pages/Home/Home/Home';
import Login from '../../pages/Login/Login';
import MyServices from '../../pages/MyServices/MyServices';
import AuthRoutes from '../AuthRoutes/AuthRoutes';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

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
                },
                {
                    path: '/my-services',
                    element: <ProtectedRoute><MyServices /></ProtectedRoute>
                },
                {
                    path: '/add-services',
                    element: <ProtectedRoute><AddService /></ProtectedRoute>
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
