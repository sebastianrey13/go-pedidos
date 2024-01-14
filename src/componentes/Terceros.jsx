import React, { useState } from 'react'
import '../css/pedidoNuevo.css'
import cerrar from '../../public/cerrar.png'


import eafitLogo from '../../public/terceros/eafit_logo.png'
import epmLogo from '../../public/terceros/epm_logo.png'
import suraLogo from '../../public/terceros/sura_logo.png'
import usuarioLogo from '../../public/terceros/usuario_logo.png'
import camaraLogo from '../../public/terceros/camara.png'
import uisLogo from '../../public/terceros/uis.png'
import deportivosCarvajalLogo from '../../public/terceros/deportivosCarvajal.png'
import calzadoRomuloLogo from '../../public/terceros/calzadoRomulo.png'
import bataLogo from '../../public/terceros/bataLogo.png'


const Terceros = (props) => {

  const [terceroId, setTerceroId] = useState(0);
  const [terceroNombre, setTerceroNombre] = useState('');
  const [terceroNit, setTerceroNit] = useState('');
  const [terceroImg, setTerceroImg] = useState('');

  const [terceroSeleccionado, setTerceroSeleccionado] = useState(null);


  const arrayTerceros = [
    {
      id: 1,
      nombre: 'UNIVERSIDAD EAFIT',
      nit: '900000000',
      img: eafitLogo,
    },
    {
      id: 2,
      nombre: 'SURA',
      nit: '900423154',
      img: suraLogo,
    },
    {
      id: 3,
      nombre: 'FEDERICO GUTIERREZ',
      nit: '91500258',
      img: usuarioLogo,
    },
    {
      id: 4,
      nombre: 'EPM',
      nit: '800528987',
      img: epmLogo,
    },
    {
      id: 5,
      nombre: 'CAMARA DE COMERCIO',
      nit: '890200110',
      img: camaraLogo,
    },
    {
      id: 6,
      nombre: 'UIS',
      nit: '890201213',
      img: uisLogo,
    },
    {
      id: 7,
      nombre: 'DEPORTIVOS CARVAJAL',
      nit: '9009655426',
      img: deportivosCarvajalLogo,
    },
    {
      id: 8,
      nombre: 'CALZADO ROMULO',
      nit: '800078522',
      img: calzadoRomuloLogo,
    },
    {
      id: 9,
      nombre: 'BATA',
      nit: '890801339',
      img: bataLogo,
    }
  ]

  const seleccionarTercero = (tercero) => {
    props.handleTerceroSeleccionado(tercero);
  };


  return (
    <div className='popup-bg-tercero'>
      <div className='popupTercero'>
        <img onClick={props.togglePopupTecero} className="close-button-img" src={cerrar} alt="Cerrar" />
        <h2 className='titulo'>Seleccione un tecero</h2>
        <div className='tercerosContainer'>
          {arrayTerceros.map((tercero, index) => (
            <div key={index + 1} onClick={() => seleccionarTercero(tercero)}>
              <div className="seleccionTercero">
                <div>
                  <img className="imageAvatar" src={tercero.img} alt="" />
                </div>
                <div className="seleccionP">
                  <p className="pRazonSocial">{tercero.nombre}</p>
                  <p className="pNit">{tercero.nit}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Terceros