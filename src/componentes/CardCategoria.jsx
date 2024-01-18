import React from 'react'
import '../css/cardCategoria.css'
import { Link } from 'react-router-dom'

const CardCategoria = (props) => {

    return (
        <div className='cardCategoria'>
            <div className='cardCategoria-container'>
                <h2 className='cardCategoria-h2'>{props.nombre}</h2>
                <Link to={`/productos/${props.nombre.toLowerCase()}`} className='cardCategoria-a'>
                    <p>Ver Más</p>
                </Link>
                <img className='cardCategoriaImg' src={props.img} alt="" />
            </div>
        </div>
    )
}

export default CardCategoria