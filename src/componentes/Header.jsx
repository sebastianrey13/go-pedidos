import '../css/header.css'
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import Login from './Login'
import SingUp from './SingUp';

import iconoBlanco from '../../public/icono_blanco.png'
import acceso from '../../public/acceso.png'
import iniciarSesion from '../../public/iniciar-sesion.png'
import usuario from '../../public/usuario.png'
import menu from '../../public/menu.png'


const Header = () => {

    const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);
    const [isSignupPopupOpen, setSignupPopupOpen] = useState(false);

    const cerrarPopup = () => {
        setLoginPopupOpen(false)
        setSignupPopupOpen(false)
    }

    const abrirSinupPopup = () => {
        setLoginPopupOpen(false)
        setSignupPopupOpen(true)
    }

    const abrirLoginPopup = () => {
        setLoginPopupOpen(true)
        setSignupPopupOpen(false)
    }


    return (
        <div className='header'>
            <div className='header-contenido'>
                <Link to='/home'><img className='header-img-iconos' src={iconoBlanco} alt="icono-blanco" /></Link>
                <h2 className='header-h2'>Go Pedidos</h2>
            </div>
            <div className='header-contenido header-contenido-2'>
                <img onClick={abrirLoginPopup} className='header-img-iconos' src={usuario} alt="usuario" />
                <img className='header-img-iconos' src={menu} alt="icono-menu" />
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