import React from 'react'
import '../css/historial.css'
import { Link } from 'react-router-dom'


const CardCotizacionesRealizadas = (props) => {

  return (
    <Link to={`/historial/${props.id}`}>
      <div className='cardCotizaciones'>
        <div className='cardCotizacionesInfo1'>
          <p className='cardCotizacionesPedido'>{props.fechaActual}</p>
          <p className='cardCotizacionesRef'>Ref: {props.id}</p>
        </div>
        <div className='cardCotizacionesInfo2'>
          <img className='cardCotizacionesImg' src={props.productos[0].img} alt="" />
          <div className='cardCotizacionesInfo2-2'>
            <p className='cardCotizacionesFechaEntregaP'>Estado de Cotización</p>
            <p className='cardCotizacionesFechaEntrega'>Productos: <b>{props.productos.length}</b></p>
            <p className='cardCotizacionesFechaEntrega'>Fecha de entrega: <b>{props.fechaDeEntrega}</b></p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CardCotizacionesRealizadas