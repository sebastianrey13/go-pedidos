import React, { useEffect } from 'react'
import { useState } from 'react';
import '../css/cardCategoria.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

import tennisImg1 from '../../public/productos/tennis/tenis_azules.png'
// import tennisImg2 from '../../public/productos/tennis/tenis_grieses.png'
// import tennisImg3 from '../../public/productos/tennis/tenis_naranjas.png'


const CardProductos = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [desplegarTallas, setDesplegarTallas] = useState(false);
    const [iconoTallas, setIconoTallas] = useState(faAngleUp);

    useEffect(() => {
        if (desplegarTallas === false) {
            setIconoTallas(faAngleUp)
        } else {
            setIconoTallas(faAngleDown)
        }
    }, [desplegarTallas])

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
        setDesplegarTallas(!desplegarTallas)
    };

    return (
        <div>
            <div className='cardProductoDiv1'>
                <img src={tennisImg1} alt="" />
                {/* <div className='cardProductoDiv1P'>
                    <p>Talla</p>
                    <div className='iconoDeTallas' onClick={toggleDropdown}>
                        <FontAwesomeIcon
                            icon={iconoTallas}
                        />
                    </div>
                    {isDropdownOpen && (
                        <ul className="dropdown-list">
                            <li>XS</li>
                            <li>S</li>
                            <li>M</li>
                            <li>L</li>
                            <li>XL</li>
                        </ul>
                    )}
                </div> */}
                <div className='cardProductoDiv1P cardProductoDiv2P'>
                    <p>Añadir</p>
                    <div className='iconoDeTallas' onClick={toggleDropdown}>
                        <FontAwesomeIcon
                            icon={iconoTallas}
                        />
                    </div>
                    {isDropdownOpen && (
                        <ul className="dropdown-list">
                            <li>XS</li>
                            <li>S</li>
                            <li>M</li>
                            <li>L</li>
                            <li>XL</li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CardProductos