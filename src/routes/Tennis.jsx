import React from 'react'
import CardProductos from '../componentes/CardProductos'
import '../css/home.css'
import '../css/cardCategoria.css'

import tennisAzul from '../../public/productos/tennis/tenis_azules.png'
import tennisGris from '../../public/productos/tennis/tenis_grises.png'
import tennisNaranja from '../../public/productos/tennis/tenis_naranjas.png'
import tennisNegro from '../../public/productos/tennis/tenis_negros.png'


const Tennis = () => {

  const tennis = [
    {
      id: 1,
      nombre: 'Tennis deportivos',
      ref: '#5574ASD',
      colores: [
        {
          id: 1,
          color: 'Azul',
          img: tennisAzul,
        },
        {
          id: 2,
          color: 'Gris',
          img: tennisGris,
        },
        {
          id: 3,
          color: 'Naranja',
          img: tennisNaranja,
        },
        {
          id: 4,
          color: 'Negro',
          img: tennisNegro,
        },
        {
          id: 1,
          color: 'Azul',
          img: tennisAzul,
        },
        {
          id: 2,
          color: 'Gris',
          img: tennisGris,
        },
        {
          id: 3,
          color: 'Naranja',
          img: tennisNaranja,
        },
        {
          id: 4,
          color: 'Negro',
          img: tennisNegro,
        },
      ],
    }
  ]


  return (
    <div>
      <div className='homeCardCategorias'>
        {tennis.map((props, index) => (
          <CardProductos
            key={index + 1}
            id={props.id}
            colores={props.colores}
          />
        ))}
      </div>
    </div>
  )
}

export default Tennis