import React, { useState, useEffect, useContext } from 'react'
import { CarroDeComprasContext } from './utils/CarroDeComprasContext.jsx'
import Swal from 'sweetalert2'

import papelera from '../../public/papelera.png'


const CardProductoCarro = (props) => {

  const { objetosArray, recargarProductos, eliminarObjetoArray } = useContext(CarroDeComprasContext);

  const formatearNumero = (precio) => {
    const precioRedondeado = Number.parseFloat(precio).toFixed(2);
    const partes = precioRedondeado.split('.');
    const parteEntera = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    const parteDecimal = partes[1] ? `,${partes[1]}` : '';
    const resultado = parteEntera + parteDecimal;
    return resultado;
  }

  const eliminarProductoCarro = () => {

    Swal.fire({
      title: 'Go Pedidos',
      icon: 'question',
      html: `<p>¿Quieres eliminar el producto <b>${props.nombre}</b> de la cesta?</p>`,
      showDenyButton: true,
      confirmButtonText: 'Si',
      confirmButtonColor: '#009b3e',
    }).then((res) => {
      if (res.isConfirmed) {
        Swal.fire({
          title: 'Go Pedidos',
          html: `<p><b>${props.nombre}</b> ha sido eliminado de la cesta</p>`,
          icon: 'success',
          confirmButtonColor: '#009b3e',
        })
        eliminarObjetoArray(props.id);
        recargarProductos();
        props.actualizarRecargarPrecios();
      }
    })

  }

  return (
    <div className='cardProductoCarro'>
      <div className='cardProductoCarroContainer1'>
        <img className='cardProductoCarroContainer1Img' src={props.img} alt="" />
      </div>
      <div className='cardProductoCarroContainer2'>
        <h3><b>{props.nombre}</b></h3>
        <p>Ref: {props.referencia}</p>
        <p>Color: {props.color}</p>
        <p>Talla: {props.talla}</p>
        <p><b>x {props.unidades}</b></p>
      </div>
      <div className='cardProductoCarroContainer3'>
        <div>
          <p>$<span className='CardProducoCarroPrecio'>{formatearNumero(props.precio * props.unidades)}</span></p>
          <p className='cardProductoCarroContainer3Descuento'>-{props.descuento * 100}%</p>
          <p className='CardProducoCarroPrecioFinal'><b>${formatearNumero((props.precio * props.unidades) - ((props.precio * props.unidades) * props.descuento))}</b></p>
        </div>
        <img onClick={eliminarProductoCarro} className='CardProducoCarroPrecioPapeleraIco' src={papelera} alt="" />
      </div>
    </div>
  )
}

export default CardProductoCarro


