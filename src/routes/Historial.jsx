import React from 'react'
import '../css/historial.css'
import CardCotizacionesRealizadas from '../componentes/CardCotizacionesRealizadas';

const Historial = () => {

  // const prueba = [
  //   {
  //     "id": "38H9KSKAFM9",
  //     "tercero": {
  //       "id": 1,
  //       "nombre": "UNIVERSIDAD EAFIT",
  //       "nit": "900000000",
  //       "img": "/public/terceros/eafit_logo.png"
  //     },
  //     "email": "se@gmail.com",
  //     "formaDePago": "Credito 15 días",
  //     "listaPrecios": "Lista de precios - Medellin",
  //     "tipoFactura": "Factura",
  //     "fechaDeEntrega": "2024-01-03",
  //     "fechaActual": "2024-01-15",
  //     "productosCotizados": [
  //       {
  //         "id": "66hkxhx16",
  //         "nombre": "Chaquetas Deportivas",
  //         "referencia": "#967WENFIUH",
  //         "descuento": 0.25,
  //         "talla": "L",
  //         "observacion": "asdasdasd",
  //         "img": "/public/productos/chaquetas/chaqueta_negra.png",
  //         "color": "Negra",
  //         "precio": 150000,
  //         "unidades": 3
  //       },
  //       {
  //         "id": "s9fw5f391",
  //         "nombre": "Chaquetas Deportivas",
  //         "referencia": "#967WENFIUH",
  //         "descuento": 0.12,
  //         "talla": "XL",
  //         "observacion": "talla kx obeser",
  //         "img": "/public/productos/chaquetas/chaqueta_blanca.png",
  //         "color": "Blanca",
  //         "precio": 150000,
  //         "unidades": 4
  //       }
  //     ]
  //   },
  //   {
  //     "id": "38H9KSKAFM9",
  //     "tercero": {
  //       "id": 1,
  //       "nombre": "UNIVERSIDAD EAFIT",
  //       "nit": "900000000", "img": "/public/terceros/eafit_logo.png"
  //     },
  //     "email": "se@gmail.com",
  //     "formaDePago": "Credito 15 días",
  //     "listaPrecios": "Lista de precios - Medellin",
  //     "tipoFactura": "Factura",
  //     "fechaDeEntrega": "2024-01-03",
  //     "fechaActual": "2024-01-15",
  //     "productosCotizados": [
  //       {
  //         "id": "66hkxhx16",
  //         "nombre": "Chaquetas Deportivas",
  //         "referencia": "#967WENFIUH",
  //         "descuento": 0.25,
  //         "talla": "L",
  //         "observacion": "asdasdasd",
  //         "img": "/public/productos/chaquetas/chaqueta_negra.png",
  //         "color": "Negra",
  //         "precio": 150000,
  //         "unidades": 3
  //       },
  //       {
  //         "id": "s9fw5f391",
  //         "nombre": "Chaquetas Deportivas",
  //         "referencia": "#967WENFIUH",
  //         "descuento": 0.12,
  //         "talla": "XL",
  //         "observacion": "talla kx obeser",
  //         "img": "/public/productos/chaquetas/chaqueta_blanca.png",
  //         "color": "Blanca",
  //         "precio": 150000,
  //         "unidades": 4
  //       }
  //     ]
  //   }
  // ]

  const cotizacionesRealizadas = JSON.parse(localStorage.getItem('cotizacionesRealizadas')) || [];


  return (
    <div className='historial'>
      <h2 className='titulo'>Historial de Cotizaciones</h2>
      <div className='historialCotizaciones'>
        {cotizacionesRealizadas.map((cotizacion) => (
          cotizacion.productosCotizados.map((producto) => (
            <CardCotizacionesRealizadas

              //Info Cotización
              key={cotizacion.id}
              id={cotizacion.id}
              email={cotizacion.email}
              formaDePago={cotizacion.formaDePago}
              listaPrecios={cotizacion.listaPrecios}
              tipoFactura={cotizacion.tipoFactura}
              fechaActual={cotizacion.fechaActual}
              fechaDeEntrega={cotizacion.fechaDeEntrega}

              //Info Tercero

              terceroNombre={cotizacion.tercero.nombre}
              terceroNit={cotizacion.tercero.nit}
              terceroImg={cotizacion.tercero.img}

              //Info Productos

              productoID={producto.id}
              productoNombre={producto.nombre}
              productoReferencia={producto.referencia}
              productoDescuento={producto.descuento}
              productoTalla={producto.talla}
              productoObservacion={producto.observacion}
              productoImg={producto.img}
              productoColor={producto.color}
              productoPrecio={producto.precio}
              productoUnidades={producto.unidades}
            />
          ))
        ))
        }
      </div>
    </div>
  )
}

export default Historial