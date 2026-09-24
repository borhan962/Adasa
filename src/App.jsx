import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Layouts from './Components/Layouts/Layouts';
import Data from './Data/Posts.json'
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import Notfound from './Pages/Notfound';
import Blogdetails from './Pages/Blogdetails';

function App() {

   let x =  createBrowserRouter([
        { path: "" , element : <Layouts/> , children : [  
        { index : true   , element: <Home/>   },     
        { path : "Blog"  , element: <Blog/>   },
        { path : "blog/:slug" , element: <Blogdetails/> },
        {path:"*" , element: <Notfound/> }  
     ] }             
      ])
 

  return <>
          
    <RouterProvider router={x}></RouterProvider>
   
         </>
 
}

export default App
