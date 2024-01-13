import React, { useState, useEffect, useContext } from 'react'
import { CarroDeComprasContext } from './utils/CarroDeComprasContext.jsx'
import '../css/carroCompras.css'

import CardProductoCarro from './CardProductoCarro.jsx'
import carroComprasIco from '../../public/carro-de-la-compra.png'
import cerrar from '../../public/cerrar.png'


const CarroDeCompras = () => {

  const { objetosArray, recargarProductos } = useContext(CarroDeComprasContext);
  const [isOpenCar, setIsOpenCar] = useState(false)

  const toggleCarrito = () => {
    setIsOpenCar(!isOpenCar)
    recargarProductos();
  }


  return (
    <div>
      <div onClick={toggleCarrito} className='DivCarroDeComprasIco'>
        <img className='header-img-iconos carroComprasIco' src={carroComprasIco} alt="" />
        <p className='header-contenido-2-p numeroProductosCarro'>{objetosArray.length}</p>
      </div>
      {isOpenCar && (
        <div className='popup-bg-card'>
          <div className='popupCard'>
            <div className='carroComprasContainer1'>
              <p>Bolsa <span>({objetosArray.length})</span></p>
              <img onClick={toggleCarrito} className='carroComprasCerrarIco' src={cerrar} alt="" />
            </div>
            <div>
              {objetosArray.map((objeto, index) => (
                <CardProductoCarro
                  key={index + 1}
                  id = {objeto.id}
                  color={objeto.color}
                  descuento={objeto.descuento}
                  img={objeto.img}
                  nombre={objeto.nombre}
                  precio={objeto.precio}
                  referencia={objeto.referencia}
                  talla={objeto.talla}
                  unidades={objeto.unidades}
                />
              ))}
            </div>

          </div>
        </div>

      )}
    </div>
  )
}

export default CarroDeCompras