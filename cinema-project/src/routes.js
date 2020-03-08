import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundFage/NotFoundPage';

const routes = [

    {
        path: '/',
        exact : true,
        main: () => <HomePage/>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage/>
    }
]

export default routes;