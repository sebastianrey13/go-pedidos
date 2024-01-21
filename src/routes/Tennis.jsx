import React from 'react'
import CardProductos from '../componentes/CardProductos'
import '../css/home.css'
import '../css/cardCategoria.css'

import tennisAzul from '../../public/productos/tennis/tenis_azules.png'
import tennisGris from '../../public/productos/tennis/tenis_grises.png'
import tennisNaranja from '../../public/productos/tennis/tenis_naranjas.png'
import tennisNegro from '../../public/productos/tennis/tenis_negros.png'
import tennisBlanco from '../../public/productos/tennis/tenis_blancos.png'
import tennisTurquesa from '../../public/productos/tennis/tenis_turquesa.png'
import tennisGrinchBlancoVerde from '../../public/productos/tennis/tenis_grich_blanco_verde.png'
import tennisGrinchRojoRosa from '../../public/productos/tennis/tenis_grich_rojo-rosa.png'
import tennisGrinchVerdeNaranja from '../../public/productos/tennis/tenis_grich_verde-naranja.png'
import tennisEQ19AzulRey from '../../public/productos/tennis/tenis_eq19_azulrey.png'
import tennisEQ19Blanco from '../../public/productos/tennis/tenis_eq19_blancos.png'
import tennisEQ19NegroBlanco from '../../public/productos/tennis/tenis_eq19_negro_blanco.png'
import tennisEQ19Negro from '../../public/productos/tennis/tenis_eq19_negro.png'
import tennisSambaBeige from '../../public/productos/tennis/tenis_samba_beige.png'
import tennisSambaBlancoRojo from '../../public/productos/tennis/tenis_samba_blanco_rojo.png'
import tennisSambaBlancoVerde from '../../public/productos/tennis/tenis_samba_blanco_verde.png'
import tennisSambaNegro from '../../public/productos/tennis/tenis_samba_negro.png'
import tennisSambaVerde from '../../public/productos/tennis/tenis_samba_verde.png'


const Tennis = () => {

  const tennis = [
    {
      id: 7,
      nombre: 'Tennis Deportivos',
      ref: '#5574ASD',
      precio: 150000,
      descuento: 0.2,
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
          id: 5,
          color: 'Blanco',
          img: tennisBlanco,
        },
        {
          id: 6,
          color: 'Turquesa',
          img: tennisTurquesa,
        }
      ]
    },
    {
      id: 8,
      nombre: 'Tennis Grinch',
      ref: '#31874LJKD',
      descuento: 0.15,
      precio: 312999,
      colores: [
        {
          id: 1,
          color: 'Blanco/Verde',
          img: tennisGrinchBlancoVerde,
        },
        {
          id: 2,
          color: 'Rojo/Rosa',
          img: tennisGrinchRojoRosa,
        },
        {
          id: 3,
          color: 'Verde/Naranja',
          img: tennisGrinchVerdeNaranja,
        }
      ]
    },
    {
      id: 9,
      nombre: 'Tennis Deportivos EQ19',
      ref: '#2694EQ19',
      precio: 661999,
      descuento: 0.1,
      colores: [
        {
          id: 1,
          color: 'Azul Rey',
          img: tennisEQ19AzulRey,
        },
        {
          id: 2,
          color: 'Blanco',
          img: tennisEQ19Blanco,
        },
        {
          id: 3,
          color: 'Negro/Blanco',
          img: tennisEQ19NegroBlanco,
        },
        {
          id: 4,
          color: 'Negro',
          img: tennisEQ19Negro,
        },
      ]
    },
    {
      id: 10,
      nombre: 'Tennis Samba',
      ref: '#96574ASAMBAD',
      precio: 299999,
      descuento: 0.05,
      colores: [
        {
          id: 1,
          color: 'Beige',
          img: tennisSambaBeige,
        },
        {
          id: 2,
          color: 'Blanco/Rojo',
          img: tennisSambaBlancoRojo,
        },
        {
          id: 3,
          color: 'Blanco/Verde',
          img: tennisSambaBlancoVerde,
        },
        {
          id: 4,
          color: 'Negro',
          img: tennisSambaNegro,
        },
        {
          id: 5,
          color: 'Verde',
          img: tennisSambaVerde,
        }
      ]
    },
  ]


  return (
    <div className='home'>
      <div className='homeCardCategorias'>
        {tennis.map((tenni, index) => (
          <CardProductos
            key={index + 1}
            descuento={tenni.descuento}
            nombre={tenni.nombre}
            referencia={tenni.ref}
            precio={tenni.precio}
            id={tenni.id}
            colores={tenni.colores}
          />
        ))}
      </div>
    </div>
  )
}

export default Tennis