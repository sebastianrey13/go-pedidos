import React from 'react'
import CardProductos from '../componentes/CardProductos'
import '../css/home.css'
import '../css/cardCategoria.css'

import chquetaBeige from '../../public/productos/chaquetas/chaqueta_beige.png'
import chquetaBlanca from '../../public/productos/chaquetas/chaqueta_blanca.png'
import chquetaNegra from '../../public/productos/chaquetas/chaqueta_negra.png'


const Chaquetas = () => {

  const chaquetas = [
    {
      id: 1,
      nombre: 'Chaquetas Deportivas',
      ref: '#967WENFIUH',
      precio: 150000,
      descuento : 0.25,
      colores: [
        {
          id: 1,
          color: 'Beige',
          img: chquetaBeige,
        },
        {
          id: 2,
          color: 'Blanca',
          img: chquetaBlanca,
        },
        {
          id: 3,
          color: 'Negra',
          img: chquetaNegra,
        },
      ]
    },
  ]

  return (
    <div className='home'>
      <div className='homeCardCategorias'>
        {chaquetas.map((chaqueta, index) => (
          <CardProductos
            key={index + 1}
            nombre={chaqueta.nombre}
            referencia={chaqueta.ref}
            precio={chaqueta.precio}
            descuento = {chaqueta.descuento}
            id={chaqueta.id}
            colores={chaqueta.colores}
          />
        ))}
      </div>
    </div>
  )
}

export default Chaquetas