import React, { useState, useEffect } from 'react'
import '../css/header.css'
import '../css/buscarProducto.css'

import buscarIco from '../../public/lupa.png'
import flechaVoler from '../../public/flecha.png'

import chquetaBeige from '../../public/productos/chaquetas/chaqueta_beige.png'
import chquetaBlanca from '../../public/productos/chaquetas/chaqueta_blanca.png'
import chquetaNegra from '../../public/productos/chaquetas/chaqueta_negra.png'

import pantalonNegro from '../../public/productos/pantalones/pantalon_negro.png'
import pantalonAzul from '../../public/productos/pantalones/pantalon_azul.png'
import pantalonCeleste from '../../public/productos/pantalones/pantalon_celeste.png'
import pantalonGris from '../../public/productos/pantalones/pantalon_gris.png'
import pantalonMarron from '../../public/productos/pantalones/pantalon_marron.png'
import pantalonRojo from '../../public/productos/pantalones/pantalon_rojo.png'

import shortAzul from '../../public/productos/shorts/short_azul.png'
import shortCeleste from '../../public/productos/shorts/short_celeste.png'
import shortNaranja from '../../public/productos/shorts/short_naranja.png'
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
import { Link } from 'react-router-dom'

const BuscarProducto = () => {

  const [isBuscadorDesplegado, setIsMenuDesplegado] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isBuscando, setIsbuscando] = useState(false);
  const [productosFiltrados, setProductosFiltrados] = useState([]);

  const abrirBuscador = () => {
    setIsMenuDesplegado(true)
    document.body.classList.add('popup-open');
  }

  const cerrarBuscador = () => {
    setIsMenuDesplegado(false);
    document.body.classList.remove('popup-open');
  }

  const productos = [
    {
      id: 1,
      nombre: 'Chaquetas Deportivas',
      ref: '#967WENFIUH',
      precio: 150000,
      descuento: 0.25,
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
    {
      id: 2,
      nombre: 'Chaquetas Deportivas',
      ref: '#967WENFIUH',
      precio: 150000,
      descuento: 0.12,
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
    {
      id: 3,
      nombre: 'Pantalones Deportivos',
      ref: '#36LKN74A',
      precio: 150000,
      descuento: 0.20,
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
    }, {
      id: 4,
      nombre: 'Pantalones Deportivos',
      ref: '#36LKN74A',
      precio: 150000,
      descuento: 0.30,
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
    }, {
      id: 5,
      nombre: 'Pantalones Deportivos',
      ref: '#36LKN74A',
      precio: 150000,
      descuento: 0.40,
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
    {
      id: 6,
      nombre: 'Pantalones Deportivos',
      ref: '#36LKN74A',
      precio: 150000,
      descuento: 0.15,
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
    {
      id: 7,
      nombre: 'Pantalones Deportivos',
      ref: '#36LKN74A',
      precio: 150000,
      descuento: 0.25,
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
    {
      id: 8,
      nombre: 'Pantalones Deportivos',
      ref: '#36LKN74A',
      precio: 150000,
      descuento: 0.18,
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
    {
      id: 9,
      nombre: 'Pantalones Deportivos',
      ref: '#36LKN74A',
      precio: 150000,
      descuento: 0.35,
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
    {
      id: 10,
      nombre: 'Pantalones Deportivos',
      ref: '#36LKN74A',
      precio: 150000,
      descuento: 0.26,
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
    {
      id: 11,
      nombre: 'Pantalones Deportivos',
      ref: '#36LKN74A',
      precio: 150000,
      descuento: 0.5,
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
    {
      id: 12,
      nombre: 'Pantalones Deportivos',
      ref: '#36LKN74A',
      precio: 150000,
      descuento: 0.13,
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
    {
      id: 13,
      nombre: 'Shorts Deportivos',
      ref: '#3274AfD',
      precio: 89900,
      descuento: 0.15,
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
      id: 14,
      nombre: 'Short Dama Tejido',
      ref: '#0316216KD',
      precio: 32999,
      descuento: 0.22,
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
      id: 15,
      nombre: 'Short Hombre Tejido',
      ref: '#12SD4E512',
      precio: 61990,
      descuento: 0.12,
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
      id: 16,
      nombre: 'Short Made For Training',
      ref: '#SMFT74ASAMBAD',
      precio: 91999,
      descuento: 0.1,
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
    {
      id: 17,
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
      id: 18,
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
      id: 19,
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
      id: 20,
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

  const buscarProducto = (e) => {
    const term = e.target.value.toLowerCase();

    setSearchTerm(term);

    if (term !== '') {
      const productosFiltrados = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(term)
      );

      setProductosFiltrados(productosFiltrados);
      setIsbuscando(true);
    } else {
      setProductosFiltrados([]);
      setIsbuscando(false);
    }
  }


  return (
    <div>
      <div className='iconoHeaderAbrir' onClick={abrirBuscador}>
        <img className='header-img-iconos' src={buscarIco} alt="" />
      </div>
      {isBuscadorDesplegado && (
        <div className="popup-bg-buscador">
          <div className="popup-buscador">
            <div className='divBuscador'>
              <div className='divImgVolver'>
                <img onClick={cerrarBuscador} className="close-flecha-img" src={flechaVoler} alt="Cerrar" />
              </div>
              <input
                type="text"
                className='inputBuscador'
                placeholder='Buscar...'
                value={searchTerm}
                onChange={buscarProducto}
              />
            </div>
            {isBuscando && (
              <div className='divBuscadorProductos'>
                {productosFiltrados.map((producto, index) => (
                  <Link onClick={cerrarBuscador} to={`/productos/${producto.id}`} key={index + 1}>
                    <div className='productosBuscados'>
                      <img className='imgProductoBuscado' src={producto.colores[0].img} alt="" />
                      <p>{producto.nombre}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}

          </div>
        </div>
      )}
    </div>
  )
}

export default BuscarProducto