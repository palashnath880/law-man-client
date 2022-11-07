import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../../layout/Main/Main';
import Home from '../../pages/Home/Home/Home';

const Routes = () => {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main />,
            children: [
                {
                    path: '/',
                    element: <Home />,
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
