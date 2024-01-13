import React from 'react'
import './App.css'
import Header from './componentes/Header'
import { Outlet } from 'react-router-dom'
import CarroDeComprasProvider from './componentes/utils/CarroDeComprasContext'

function App() {

  return (
    <>
      <CarroDeComprasProvider>
        <Header />
        <Outlet />
      </CarroDeComprasProvider>
    </>
  )
}

export default App
