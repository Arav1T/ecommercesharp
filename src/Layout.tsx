import React from 'react'
import Navbar from './components/header/Navbar'
import Heading from './components/header/Heading'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer/Footer'

export default function Layout() {
  return (
   
      <div className="bg-gray-200 min-h-screen">
      <Navbar  />
      <Heading/>
      {/* <Body /> */}
      <Outlet/>
      <Footer />
    </div>
    
  )
}
