import React, { useState, useEffect } from 'react'
import '../css/header.css'
import '../css/buscarProducto.css'

import buscarIco from '../../public/lupa.png'
import flechaVoler from '../../public/flecha.png'

const BuscarProducto = () => {

  const [isBuscadorDesplegado, setIsMenuDesplegado] = useState(false);

  const toggleBuscador = () => {
    setIsMenuDesplegado(!isBuscadorDesplegado)
  }


  return (
    <div>
      <div className='iconoHeaderAbrir' onClick={toggleBuscador}>
        <img className='header-img-iconos' src={buscarIco} alt="" />
      </div>
      {isBuscadorDesplegado && (
        <div className="popup-bg-buscador">
          <div className="popup-buscador">
            <div className='divBuscador'>
              <div className='divImgVolver'>
                <img onClick={toggleBuscador} className="close-flecha-img" src={flechaVoler} alt="Cerrar" />
              </div>
              <input
                type="text"
                className='inputBuscador'
                placeholder='Buscar...'
              />
            </div>



          </div>
        </div>
      )}
    </div>
  )
}

export default BuscarProducto