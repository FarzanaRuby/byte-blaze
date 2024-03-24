import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Pages/Home';
import Blogs from './Pages/Blogs.jsx';
import Bookmarks from './Pages/Bookmarks.jsx';
import Leyout from './LeyOut/Leyout.jsx';
const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Leyout></Leyout>,
    children : [
      {
        path:'/bookmarks',
        element: <Bookmarks></Bookmarks>
      },
      {
        path: '/blogs',
        element:<Blogs></Blogs>
      },
    ]
  },
 
  
   
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
