import { useState } from 'react'
import './App.css'
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Layouts from './Components/Layouts/Layouts';
import Data from './Data/Posts.json'
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import Notfound from './Pages/Notfound';
import Blogdetails from './Pages/Blogdetails';

function App() {

   let x = createHashRouter([
        { path: "" , element : <Layouts/> , children : [  
        { index : true   , element: <Home/>   },     
        { path : "Blog"  , element: <Blog/>   },
        { path : "blog/:slug" , element: <Blogdetails/> },
        { path: "*" , element: <Notfound/> }  
     ] }             
   ])

  return (
    <RouterProvider router={x} />
  )
}

export default App

