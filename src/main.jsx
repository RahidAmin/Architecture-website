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
import Login from './Component/Login/Login';
import Admin from './Component/AdminPannel/Admin';
import AuthProvider from './Component/Providers/AuthProvider';
import PrivateRoute from './Component/Routes/PrivateRoute';
import UpdateWorks from './Component/Update/UpdateWorks';
import UpdateAbout from './Component/Update/UpdateAbout';
import UpdateWorksEdit from './Component/Update/UpdateWorksEdit';
import AddNewWork from './Component/AddNewWork/AddNewWork';
import UpdateAboutMember from './Component/Update/UpdateAboutMember';
import AddNewMember from './Component/AddNewMember/AddNewMember';



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
        path: '/workcarddetails/:id',
        element: <WorkCardDetails></WorkCardDetails>,
        loader: ({ params }) => fetch(`https://api.simplesymmetry-bd.com/works/${params.id}`)

      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/admin',
        element: <PrivateRoute><Admin></Admin></PrivateRoute>
      },
      {
        path: '/updateWorks',
        element: <PrivateRoute><UpdateWorks></UpdateWorks></PrivateRoute>
      },
      {
        path: '/updateAbout',
        element: <PrivateRoute><UpdateAbout></UpdateAbout></PrivateRoute>
      },
      {
        path: '/updateWorksEdit/:id',
        element: <PrivateRoute><UpdateWorksEdit></UpdateWorksEdit></PrivateRoute>,
        loader: ({ params }) => fetch(`https://api.simplesymmetry-bd.com/works/${params.id}`)

      },
      {
        path: '/addNewWork',
        element: <PrivateRoute><AddNewWork></AddNewWork></PrivateRoute>
      },
      {
        path: '/updateAboutMember/:id',
        element: <PrivateRoute><UpdateAboutMember></UpdateAboutMember></PrivateRoute>,
        loader: ({ params }) => fetch(`https://api.simplesymmetry-bd.com/members/${params.id}`)
      },
      {
        path: '/addNewMember',
        element: <PrivateRoute><AddNewMember></AddNewMember></PrivateRoute>
      }



    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </StrictMode>
)
