import React, { useEffect } from 'react'
import { useState } from 'react';
import '../css/cardCategoria.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

import tennisImg1 from '../../public/productos/tennis/tenis_azules.png'
// import tennisImg2 from '../../public/productos/tennis/tenis_grieses.png'
// import tennisImg3 from '../../public/productos/tennis/tenis_naranjas.png'


const CardProductos = (props) => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [desplegarTallas, setDesplegarTallas] = useState(false);
    const [tallaSeleccionada, setTallaSeleccionada] = useState('');
    const [isAñadir, setIsAñadir] = useState(false);
    const [isSelectColor, setIsSelectColor] = useState(true);


    const tallas = [
        {
            id: 1,
            talla: 'XS'
        },
        {
            id: 2,
            talla: 'S'
        },
        {
            id: 3,
            talla: 'M'
        },
        {
            id: 4,
            talla: 'L'
        },
        {
            id: 5,
            talla: 'XL'
        },
    ]

    // const [iconoTallas, setIconoTallas] = useState(faAngleUp);

    // useEffect(() => {
    //     if (desplegarTallas === false) {
    //         setIconoTallas(faAngleUp)
    //     } else {
    //         setIconoTallas(faAngleDown)
    //     }
    // }, [desplegarTallas])

    // icon={iconoTallas}

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
        setDesplegarTallas(!desplegarTallas)
    };

    const seleccionarTalla = (talla) => {
        setTallaSeleccionada(talla);
        toggleDropdown();
        setIsAñadir(true);
    };

    const toggleSelectcolor = () => {
        setIsSelectColor(!isSelectColor)
    }

    const [selectedColorIndex, setSelectedColorIndex] = useState(null);

    const handleColorClick = (index) => {
        setSelectedColorIndex(index === selectedColorIndex ? null : index);
    };

    return (
        <div className='cardProducto'>
            <div className='cardProductoDiv1'>
                <img src={tennisImg1} alt="" />
                <div className='cardProductoDiv1P'>
                    {isAñadir ? (
                        <p
                            className='pAñadir'
                        >
                            Añadir
                        </p>
                    ) : (
                        <p>Talla</p>
                    )}
                    <div
                        className={`iconoDeTallas ${isAñadir ? 'tallaSeleccionada' : ''}`}
                        onClick={toggleDropdown}
                    >
                        {isAñadir && (
                            <p>{tallaSeleccionada}</p>
                        )}
                        <FontAwesomeIcon
                            icon={desplegarTallas ? faAngleDown : faAngleUp}
                        />
                    </div>
                    {isDropdownOpen && (
                        <ul className="dropdown-list">
                            {tallas.map((props, index) => (
                                <li
                                    onClick={() => seleccionarTalla(props.talla)}
                                    key={index + 1}>
                                    {props.talla}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            <p>$150.000</p>
            {isSelectColor ?
                (
                    <p className='cardProducto-masColores' onClick={toggleSelectcolor}>Más Colores +</p>
                ) : (
                    <div className='cardProducto-contenedorDecolores'>
                        {props.colores.map((color, index) => (
                            <img
                                className={`coloresProductos ${selectedColorIndex === index ? 'selected' : ''}`} key={index + 1}
                                src={color.img}
                                alt=""
                                onClick={() => handleColorClick(index)}
                            />
                        ))}
                    </div>
                )}
        </div>
    )
}

export default CardProductos

/*

<div className='cardProducto-contenedorDecolores'>
{props.colores.map((color, index) => (
  <img
    className={`coloresProductos ${selectedColorIndex === index ? 'selected' : ''}`}
    key={index + 1}
    src={color.img}
    alt=""
    onClick={() => handleColorClick(index)}
  />
))}


</div>*/