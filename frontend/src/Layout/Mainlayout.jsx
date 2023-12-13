import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { Outlet } from 'react-router-dom'

const Mainlayout = () => {
  return (
    <div className= "pt-5 p-3 w-screen h-screen">
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Mainlayout