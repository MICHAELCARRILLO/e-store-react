import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage, ProductPage } from '../pages'
import { Navbar } from '../components'

export const AppRouter = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/product/:productId' element={<ProductPage/>}/>
    </Routes>
    </> 
    )
}