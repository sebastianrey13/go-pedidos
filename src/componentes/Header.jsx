import '../css/header.css'
import '../css/menuMobile.css'
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import Login from './Login'
import SingUp from './SingUp';

import iconoBlanco from '../../public/icono_blanco.png'
import usuario from '../../public/usuario.png'
import MenuMobile from '../componentes/MenuMobile.jsx';
import CarroDeCompras from '../componentes/CarroDeCompras.jsx';
import BuscarProducto from '../componentes/BuscarProducto.jsx';

const Header = () => {

    const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);
    const [isSignupPopupOpen, setSignupPopupOpen] = useState(false);

    const cerrarPopup = () => {
        setLoginPopupOpen(false)
        setSignupPopupOpen(false)
        document.body.classList.remove('popup-open');
    }

    const abrirSinupPopup = () => {
        setLoginPopupOpen(false)
        setSignupPopupOpen(true)
        document.body.classList.add('popup-open');
    }

    const abrirLoginPopup = () => {
        setLoginPopupOpen(true)
        setSignupPopupOpen(false)
        document.body.classList.add('popup-open');
    }

    

    return (
        <div className='header'>
            <div className='header-contenido'>
                <MenuMobile />
                <Link to='/home'><img className='header-img-iconos' src={iconoBlanco} alt="icono-blanco" /></Link>
            </div>
            <div className='buscarProductoIco'>
                <BuscarProducto />
            </div>
            <div className='header-contenido-2'>
                <img onClick={abrirLoginPopup} className='header-img-iconos' src={usuario} alt="usuario" />
                <p className='header-contenido-2-p'>|</p>
                <CarroDeCompras />
            </div>

            {isLoginPopupOpen && (
                <Login
                    cerrarPopup={cerrarPopup}
                    abrirSinupPopup={abrirSinupPopup}
                />
            )}
            {isSignupPopupOpen && (
                <SingUp
                    cerrarPopup={cerrarPopup}
                    abrirLoginPopup={abrirLoginPopup}
                />
            )}
        </div>
    )
}

export default Header