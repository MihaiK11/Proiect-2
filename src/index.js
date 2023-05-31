import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Page2 from './pages/JS/page2'
import Depunere from './pages/JS/depunere'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "page2",
        element: <Page2/>,
    },
    {
        path: "depunere",
        element: <Depunere/>,
    },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);

