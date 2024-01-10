import React from 'react'
import '../css/home.css'
import CardCategoria from '../componentes/CardCategoria'

import tennisImg from '../../public/categorias/tennis.png'
import chaquetasImg from '../../public/categorias/chaquetas.png'
import pantalonesImg from '../../public/categorias/pantalones.png'
import shortsImg from '../../public/categorias/shorts.png'


const Home = () => {


  const categorias = [
    {
      id: 1,
      nombre: 'CHAQUETAS',
      img: chaquetasImg,
    },
    {
      id: 2,
      nombre: 'PANTALONES',
      img: pantalonesImg,
    },
    {
      id: 3,
      nombre: 'SHORTS',
      img: shortsImg,
    },
    {
      id: 4,
      nombre: 'TENNIS',
      img: tennisImg,
    },
    {
      id: 1,
      nombre: 'CHAQUETAS',
      img: chaquetasImg,
    },
    {
      id: 2,
      nombre: 'PANTALONES',
      img: pantalonesImg,
    },
    {
      id: 3,
      nombre: 'SHORTS',
      img: shortsImg,
    },
    {
      id: 4,
      nombre: 'TENNIS',
      img: tennisImg,
    },
  ]




  return (
    <div>
      <div className='homeCardCategorias'>
        {categorias.map((props, index) => (
          <CardCategoria
            key={index + 1}
            nombre={props.nombre}
            img={props.img}
          />
        ))}
      </div>

    </div>
  )
}

export default Home