import React, { useState, useEffect, useContext } from 'react'
import { CarroDeComprasContext } from './utils/CarroDeComprasContext.jsx'
import { useNavigate } from 'react-router-dom'
import '../css/carroCompras.css'

import CardProductoCarro from './CardProductoCarro.jsx'
import carroComprasIco from '../../public/carro-de-la-compra.png'
import cerrar from '../../public/cerrar.png'
import Swal from 'sweetalert2'


const CarroDeCompras = () => {

  const navigate = useNavigate();
  const { objetosArray, recargarProductos, calcularPrecioCesta, calcularDescuentoCesta } = useContext(CarroDeComprasContext);
  const [isOpenCar, setIsOpenCar] = useState(false);
  const [precioNetoTotal, setPrecioNetoTotal] = useState(0);
  const [descuentoTotal, setDescuentoTotal] = useState(0);
  const [recargarPrecios, setRecargarPrecios] = useState(false);
  const [isCestaVacia, setIsCestaVacia] = useState(true);

  const validarProductosCesta = () => {
    if (objetosArray.length === 0) {
      setIsCestaVacia(true)
    }
    else {
      setIsCestaVacia(false)
    }
  }


  const actualizarRecargarPrecios = () => {
    setRecargarPrecios(!recargarPrecios);
  };

  const toggleCarrito = () => {
    setIsOpenCar(!isOpenCar)
    setRecargarPrecios(!recargarPrecios)
    validarProductosCesta();
  }

  useEffect(() => {
    recargarProductos();
    setPrecioNetoTotal(calcularPrecioCesta());
    setDescuentoTotal(calcularDescuentoCesta());
    validarProductosCesta();
  }, [recargarPrecios])


  const formatearNumero = (precio) => {
    const precioRedondeado = Number.parseFloat(precio).toFixed(2);
    const partes = precioRedondeado.split('.');
    const parteEntera = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    const parteDecimal = partes[1] ? `,${partes[1]}` : '';
    const resultado = parteEntera + parteDecimal;
    return resultado;
  }

  const realizarCotizacion = () => {
    if (objetosArray.length > 0) {
      // Swal.fire({
      //   title: 'Go Pedidos',
      //   html: `<p>Cotización realizada satisfactoriamente</p>`,
      //   icon: 'success',
      //   confirmButtonColor: '#009b3e',
      // });
      toggleCarrito();
      navigate('/realizar-pedido')
    } else {
      Swal.fire({
        title: 'Go Pedidos',
        html: `<p>Cesta vacia, añade un producto para poder realizar la cotización</p>`,
        icon: 'error',
        confirmButtonColor: '#009b3e',
      });
    }
  }

  return (
    <div>
      <div onClick={toggleCarrito} className='DivCarroDeComprasIco'>
        <img className='header-img-iconos carroComprasIco' src={carroComprasIco} alt="" />
        <p className='header-contenido-2-p numeroProductosCarro'>{objetosArray.length}</p>
      </div>
      {isOpenCar && (
        <div className='popup-bg-card'>
          <div className='popupCard'>
            <div className='carroComprasContainer1'>
              <p>Cesta <span>({objetosArray.length})</span></p>
              <img onClick={toggleCarrito} className='carroComprasCerrarIco' src={cerrar} alt="" />
            </div>
            <div className='carroComprasContainer2'>
              {isCestaVacia && (
                <p className='cestaVacia'>No hay productos añadidos en la cesta</p>
              )}
              {objetosArray.map((objeto, index) => (
                <CardProductoCarro
                  key={index + 1}
                  id={objeto.id}
                  color={objeto.color}
                  descuento={objeto.descuento}
                  img={objeto.img}
                  nombre={objeto.nombre}
                  precio={objeto.precio}
                  referencia={objeto.referencia}
                  talla={objeto.talla}
                  unidades={objeto.unidades}
                  actualizarRecargarPrecios={actualizarRecargarPrecios} />
              ))}
            </div>
            <div className='carroComprasContainer3'>
              <div>
                <p>SubTotal Productos:</p>
                <p>${formatearNumero(precioNetoTotal)}</p>
              </div>
              <div>
                <p>Descuento Total</p>
                <p className='carroComprasContainer3-Descuento'>${formatearNumero(descuentoTotal)}</p>
              </div>
              <div>
                <p>Total:</p>
                <p>${formatearNumero(precioNetoTotal - descuentoTotal)}</p>
              </div>
            </div>
            <button onClick={realizarCotizacion}>Realizar Cotización</button>
          </div>
        </div>

      )}
    </div>
  )
}

export default CarroDeCompras