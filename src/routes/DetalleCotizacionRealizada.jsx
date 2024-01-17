import React, { useState, useRef, useEffect, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import '../css/detalleCotizacion.css'
import flecha from '../../public/flecha-correcta.png'

const DetalleCotizacionRealizada = () => {

  const params = useParams();

  const [cotizacion, setCotizacion] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const cotizacionesRealizadas = JSON.parse(localStorage.getItem('cotizacionesRealizadas')) || [];
    const cotizacionEncontrada = cotizacionesRealizadas.find(cotizacion => cotizacion.id === params.id);
    setCotizacion(cotizacionEncontrada);
  }, [params.id]);

  // Si no se encuentra la cotización, puedes mostrar un mensaje
  if (!cotizacion) {
    return (
      <div className='detalleCotizacion'>
        <p>Cotización no encontrada</p>
      </div>
    );
  }

  const volverAlHistorial = () => {
    navigate('/historial')
  }

  console.log(cotizacion)

  const formatearNumero = (precio) => {
    const precioRedondeado = Number.parseFloat(precio).toFixed(2);
    const partes = precioRedondeado.split('.');
    const parteEntera = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    const parteDecimal = partes[1] ? `,${partes[1]}` : '';
    const resultado = parteEntera + parteDecimal;
    return resultado;
  }

  return (
    <div className='detalleCotizacion'>
      <div className='detalleCotizacionVolver'>
        <Link to={'/historial'}>
          <p>&lt; Historial</p>
        </Link>
      </div>
      <div className='detalleCotizacionContainer1'>
        <p className='detalleCotizacionSubtitulo'>Detalles del pedido</p>
        <div>
          <div className='detalleCotizacionBorde'>
            <div className='detalleCotizacionInfo1'>
              <div className='detalleCotizacionInfo1-div1'>
                <p>Fecha cotización</p>
                <p>Cotización n.º</p>
                <p>Total cotización</p>
              </div>
              <div className='detalleCotizacionInfo1-div2'>
                <p>{cotizacion.fechaActual}</p>
                <p>{cotizacion.id}</p>
                <p>${formatearNumero(cotizacion.precioNetoTotal - cotizacion.descuentoTotal)} <span>{`(${cotizacion.productosCotizados.length} artículos)`}</span></p>
              </div>
            </div>
            <div className='decargarFactura'>
              <p>Descargar factura</p>
              <img src={flecha} alt="" />
            </div>
          </div>
        </div>
        <p className='detalleCotizacionSubtitulo'>Detalles de envío</p>
        <div className='detalleCotizacionBorde'>

          {cotizacion.productosCotizados.map((producto, index) => (
            <div key={index + 1} className='cardProductoCotizacionRealizada'>
              <div>
                <img className='cardProductoCotizacionRealizadaImg' src={producto.img} alt="" />
              </div>
              <div className='cardProductoCotizacionRealizadaContainer2'>
                <h3><b>{producto.nombre}</b></h3>
                <p>Ref: {producto.referencia}</p>
                <p>Color: {producto.color}</p>
                <p>Talla: {producto.talla}</p>
                <p><b>x {producto.unidades}</b></p>
              </div>
              <div className='cardProductoCotizacionRealizadaContainer3'>
                <div>
                  <p className='cardProductoCotizacionRealizadaContainer3PrecioNeto'>$<span>{formatearNumero(producto.precio * producto.unidades)}</span></p>
                  <p className='cardProductoCotizacionRealizadaContainer3PorcentajeDescuento'>-{producto.descuento * 100}%</p>
                </div>
                <p className='cardProductoCotizacionRealizadaContainer3PrecioFinal'><b>${formatearNumero(((producto.precio * producto.unidades)) - (producto.precio * producto.unidades) * producto.descuento)}</b></p>
              </div>
            </div>
          ))}


        </div>
      </div>
    </div>
  )
}

export default DetalleCotizacionRealizada