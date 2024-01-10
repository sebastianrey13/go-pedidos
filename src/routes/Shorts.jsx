import React from 'react'
import CardProductos from '../componentes/CardProductos'
import '../css/home.css'
import '../css/cardCategoria.css'

import shortAzul from '../../public/productos/shorts/short_azul.png'
import shortCeleste from '../../public/productos/shorts/short_celeste.png'
import shortNaranja from '../../public/productos/shorts/short_Naranja.png'
import shortNegroGris from '../../public/productos/shorts/short_negro_gris.png'
import shortNegro from '../../public/productos/shorts/short_negros.png'
import shortDamaTejidoAzul from '../../public/productos/shorts/short_dama_tejido_azul.png'
import shortDamaTejidoMorado from '../../public/productos/shorts/short_dama_tejido_morado.png'
import shortDamaTejidoNegro from '../../public/productos/shorts/short_dama_tejido_negro.png'
import shortDamaTejidoRosado from '../../public/productos/shorts/short_dama_tejido_rosado.png'
import shortDamaTejidoTurquesa from '../../public/productos/shorts/short_dama_tejido_turquesa.png'
import shortHombreTejidoAzul from '../../public/productos/shorts/short_hombre_tejido_azul.png'
import shortHombreTejidoAzulRey from '../../public/productos/shorts/short_hombre_tejido_azulrey.png'
import shortHombreTejidoMorado from '../../public/productos/shorts/short_hombre_tejido_morado.png'
import shortHombreTejidoNegro from '../../public/productos/shorts/short_hombre_tejido_negro.png'
import shortMadeForTrainingGris from '../../public/productos/shorts/short_made_for_training_gris.png'
import shortMadeForTrainingNegro from '../../public/productos/shorts/short_made_for_training_negro.png'
import shortMadeForTrainingVerde from '../../public/productos/shorts/short_made_for_training_verde.png'





const Shorts = () => {

  const shorts = [
    {
      id: 1,
      nombre: 'Shorts Deportivos',
      ref: '#3274AfD',
      precio: 89900,
      colores: [
        {
          id: 1,
          color: 'Negro',
          img: shortNegro,
        },
        {
          id: 2,
          color: 'Celeste',
          img: shortCeleste,
        },
        {
          id: 3,
          color: 'Naranja',
          img: shortNaranja,
        },
        {
          id: 4,
          color: 'Negro/Gris',
          img: shortNegroGris,
        },
        {
          id: 5,
          color: 'Azul',
          img: shortAzul,
        }
      ]
    },
    {
      id: 2,
      nombre: 'Short Dama Tejido',
      ref: '#0316216KD',
      precio: 32999,
      colores: [
        {
          id: 1,
          color: 'Azul',
          img: shortDamaTejidoAzul,
        },
        {
          id: 2,
          color: 'Morado',
          img: shortDamaTejidoMorado,
        },
        {
          id: 3,
          color: 'Negro',
          img: shortDamaTejidoNegro,
        },
        {
          id: 4,
          color: 'Rosado',
          img: shortDamaTejidoRosado,
        },
        {
          id: 5,
          color: 'Turquesa',
          img: shortDamaTejidoTurquesa,
        },
      ]
    },
    {
      id: 3,
      nombre: 'Short Hombre Tejido',
      ref: '#12SD4E512',
      precio: 61990,
      colores: [
        {
          id: 1,
          color: 'Azul Rey',
          img: shortHombreTejidoAzulRey,
        },
        {
          id: 2,
          color: 'Azul',
          img: shortHombreTejidoAzul,
        },
        {
          id: 3,
          color: 'Morado',
          img: shortHombreTejidoMorado,
        },
        {
          id: 4,
          color: 'Negro',
          img: shortHombreTejidoNegro,
        },
      ]
    },
    {
      id: 4,
      nombre: 'Short Made For Training',
      ref: '#SMFT74ASAMBAD',
      precio: 91999,
      colores: [
        {
          id: 1,
          color: 'Gris',
          img: shortMadeForTrainingGris,
        },
        {
          id: 2,
          color: 'Negro',
          img: shortMadeForTrainingNegro,
        },
        {
          id: 3,
          color: 'Verde',
          img: shortMadeForTrainingVerde,
        }
      ]
    },
  ]

  return (
    <div>
      <div className='homeCardCategorias'>
        {shorts.map((short, index) => (
          <CardProductos
            key={index + 1}
            nombre={short.nombre}
            referencia={short.referencia}
            precio={short.precio}
            id={short.id}
            colores={short.colores}
          />
        ))}
      </div>
    </div>
  )
}

export default Shorts