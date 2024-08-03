import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import PortFolio from './Components/Portfolio/PortFolio'
import Error from './Components/Error/Error'
import Layout from './Components/Layout/Layout'

function App() {
  
  let routes = createBrowserRouter([
    {path:'/',element:<Layout></Layout> , children:[
      {path:'/' , element:<Home></Home>},
      {path:'/home' , element:<Home></Home>},
      {path:'/about' , element:<About></About>},
      {path:'/portfolio' , element:<PortFolio></PortFolio>},
      {path:'/contact' , element:<Contact></Contact>},
      {path:'*' , element:<Error></Error>},
    ]}
  ])
  return (
      <RouterProvider router={routes}></RouterProvider>
  )
}

export default App
