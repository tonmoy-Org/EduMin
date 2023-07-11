import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home';
import MAin from './component/Layout/MAin';
import About from './component/About/About';
import Blog from './component/Blog/Blog';
import Contact from './component/Contact/Contact';
import Course from './component/Course/Course';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MAin></MAin>,
    children:[
      {
        path:'/',
        element: <Home></Home>,
      },
      {
        path:'blog',
        element:<Blog></Blog>,
      },
      {
        path:'about',
        element: <About></About>
      },
      {
        path:'contact',
        element:<Contact></Contact>,
      },
      {
        path:'course',
        element: <Course></Course>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
