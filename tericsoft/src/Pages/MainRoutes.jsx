import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Employee from './Employee'
import EmployeeTable from './EmployeeTable'
import Homepage from './Homepage'


const MainRoutes = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/employee' element={<Employee/>}/>
        <Route path='/table' element={<EmployeeTable/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default MainRoutes