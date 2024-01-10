import React from 'react'
import '../css/cardCategoria.css'
import tennisImg from '../../public/categorias/tennis.png'

const CardCategoria = (props) => {

    return (
        <div className='cardCategoria'>
            <div className='cardCategoria-container'>
                <h2 className='cardCategoria-h2'>{props.nombre}</h2>
                <p className='cardCategoria-p'>Ver Más</p>
                <img className='cardCategoriaImg' src={props.img} alt="" />
            </div>
        </div>
    )
}

export default CardCategoria