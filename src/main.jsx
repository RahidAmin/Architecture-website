import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import ErrorElement from './Component/ErrorElement/ErrorElement';
import Root from './Component/Root/Root';
import Home from './Component/Home/Home';
import Works from './Component/Works/Works';
import AboutUs from './Component/AboutUs/AboutUs';
import Contact from './Component/Contact/Contact';
import Career from './Component/Career/Career';
import WorkCardDetails from './Component/WorkCardDetails/WorkCardDetails';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: '/works',
        element: <Works></Works>
      },
      {
        path: '/aboutus',
        element: <AboutUs></AboutUs>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/career',
        element: <Career></Career>
      },
      {
        path: '/workcarddetails',
        element: <WorkCardDetails></WorkCardDetails>
      }


    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
