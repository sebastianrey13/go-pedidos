import React from 'react'
import CardProductos from '../componentes/CardProductos'
import '../css/home.css'
import '../css/cardCategoria.css'

import pantalonNegro from '../../public/productos/pantalones/pantalon_negro.png'
import pantalonAzul from '../../public/productos/pantalones/pantalon_azul.png'
import pantalonCeleste from '../../public/productos/pantalones/pantalon_celeste.png'
import pantalonGris from '../../public/productos/pantalones/pantalon_gris.png'
import pantalonMarron from '../../public/productos/pantalones/pantalon_marron.png'
import pantalonRojo from '../../public/productos/pantalones/pantalon_rojo.png'

const Pantalones = () => {

  const pantalones = [
    {
      id: 2,
      nombre: 'Pantalones Deportivos',
      ref: '#36LKN74A',
      precio: 150000,
      descuento : 0.20,
      colores: [
        {
          id: 1,
          color: 'Azul',
          img: pantalonAzul,
        },
        {
          id: 2,
          color: 'Gris',
          img: pantalonGris,
        },
        {
          id: 3,
          color: 'Rojo',
          img: pantalonRojo,
        },
        {
          id: 4,
          color: 'Negro',
          img: pantalonNegro,
        },
        {
          id: 5,
          color: 'Celeste',
          img: pantalonCeleste,
        },
        {
          id: 6,
          color: 'Marron',
          img: pantalonMarron,
        }
      ]
    },
  ]

  return (
    <div className='home'>
      <div className='homeCardCategorias'>
        {pantalones.map((pantalon, index) => (
          <CardProductos
            key={index + 1}
            nombre={pantalon.nombre}
            referencia={pantalon.ref}
            precio={pantalon.precio}
            descuento = {pantalon.descuento}
            id={pantalon.id}
            colores={pantalon.colores}
          />
        ))}
      </div>
    </div>
  )
}

export default Pantalones