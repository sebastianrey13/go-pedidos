import React from 'react'
import '../css/historial.css'


const CardCotizacionesRealizadas = (props) => {






  return (
    <div className='cardCotizaciones'>
      <div className='cardCotizacionesFechaCotizacionRealizada'>
        <p>{props.fechaActual}</p>
        <p>Ref: {props.id}</p>
      </div>
      <div className='cardCotizacionesInfo2'>
        <img className='cardCotizacionesImg' src={props.productoImg} alt="" />
        <div className='cardCotizacionesInfo2-2'>
          <p className='cardCotizacionesFechaEntregaP'>Estado de Cotización</p>
          <p className='cardCotizacionesFechaEntrega'>Fecha de entrega: {props.fechaDeEntrega}</p>
        </div>

      </div>
    </div>
  )
}

export default CardCotizacionesRealizadas