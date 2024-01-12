import React from 'react'
import carroComprasIco from '../../public/carro-de-la-compra.png'
import '../css/carroCompras.css'

const CarroDeCompras = () => {
  return (
    <div>
        <img className='header-img-iconos carroComprasIco' src={carroComprasIco} alt="" />
    </div>
  )
}

export default CarroDeCompras