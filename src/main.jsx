import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Home from './routes/Home.jsx'
import PedidoNuevo from './routes/PedidoNuevo.jsx'
import Tennis from './routes/Tennis.jsx'
import Pantalones from './routes/Pantalones.jsx'
import Shorts from './routes/Shorts.jsx'
import Chaquetas from './routes/Chaquetas.jsx'
import Productos from './routes/Productos.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/' element={<Navigate to={"/home"} />} />
          <Route path='/home' element={<Home />} />
          <Route path='/realizar-pedido' element={<PedidoNuevo/>}/>
          <Route path='/productos' element={<Productos/>}/>
          <Route path='/productos/tennis' element={<Tennis/>}/>
          <Route path='/productos/pantalones' element={<Pantalones/>}/>
          <Route path='/productos/shorts' element={<Shorts/>}/>
          <Route path='/productos/chaquetas' element={<Chaquetas/>}/>
        </Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)
