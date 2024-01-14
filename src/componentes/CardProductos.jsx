import React from 'react'
import { useState, useEffect, useRef, useContext } from 'react';
import { CarroDeComprasContext } from './utils/CarroDeComprasContext';
import '../css/cardCategoria.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import cerrar from '../../public/cerrar.png'
import botonMenos from '../../public/boton-menos.png'
import botonMas from '../../public/boton-mas.png'
import Swal from 'sweetalert2'
import CardError from './CardError'



const CardProductos = (props) => {

    const cardProductosRef = useRef(null);
    const cardAñadirProductosRef = useRef(null);
    const { recargarProductos } = useContext(CarroDeComprasContext);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [desplegarTallas, setDesplegarTallas] = useState(false);
    const [tallaSeleccionada, setTallaSeleccionada] = useState('');
    const [isAñadir, setIsAñadir] = useState(false);
    const [isSelectColor, setIsSelectColor] = useState(true);
    const [imagenSeleccionada, setImagenSeleccionada] = useState(0);
    const [precio, setPrecio] = useState(0);
    const [porcetajeDescuento, setPorcentajeDescuento] = useState('');
    const [precioFinal, setPreciofinal] = useState(0);
    const [unidades, setUnidades] = useState(1);
    const [isConfimarAñadirProducto, setIsConfirmarAñadirProducto] = useState(false);
    const [isDropdownOpenAñadir, setIsDropdownOpenAñadir] = useState(false);
    const [desplegarTallasAñadir, setDesplegarTallasAñadir] = useState(false);

    const [precioAñadir, setprecioAñadir] = useState(0);
    const [precioFinalAñadir, setPreciofinalAñadir] = useState(0);
    const [mensajeError, setMensajeError] = useState('');

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

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
        setDesplegarTallas(!desplegarTallas);
    };

    const toggleDropdownAñadir = () => {
        setIsDropdownOpenAñadir(!isDropdownOpenAñadir);
        setDesplegarTallasAñadir(!desplegarTallasAñadir);
    };

    const cerrarDropdown = () => {
        setIsDropdownOpen(false);
        setDesplegarTallas(false);
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
        setSelectedColorIndex(index);
        setImagenSeleccionada(index);
    };

    useEffect(() => {
        formatearPorcentaje(props.descuento);
        precioConDescuento(props.precio, props.descuento);
        setPrecio(props.precio);
    }, [props.precio, props.descuento, precioFinal]);

    const handleClickOutside = (event) => {
        if (cardProductosRef.current && !cardProductosRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
            setDesplegarTallas(false);
        }
    };

    useEffect(() => {
        // Agregar un event listener al montar el componente
        document.addEventListener('click', handleClickOutside);

        // Limpiar el event listener al desmontar el componente
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);


    const handleClickOutsideAñádir = (event) => {
        if (cardAñadirProductosRef.current && !cardAñadirProductosRef.current.contains(event.target)) {
            setIsDropdownOpenAñadir(false);
            setDesplegarTallasAñadir(false);
        }
    };

    useEffect(() => {
        // Agregar un event listener al montar el componente para el desplegable principal
        document.addEventListener('click', handleClickOutside);

        // Agregar un event listener al montar el componente para el desplegable de Añadir Producto
        document.addEventListener('click', handleClickOutsideAñádir);

        // Limpiar el event listener al desmontar el componente
        return () => {
            document.removeEventListener('click', handleClickOutside);
            document.removeEventListener('click', handleClickOutsideAñádir);
        };
    }, []);

    const formatearNumero = (precio) => {
        // Redondear el número a dos decimales si es necesario
        const precioRedondeado = Number.parseFloat(precio).toFixed(2);

        // Separar los miles con punto y usar coma como separador decimal solo si hay decimales
        const partes = precioRedondeado.split('.');
        const parteEntera = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');

        // Verificar si hay parte decimal y añadirla con coma
        const parteDecimal = partes[1] ? `,${partes[1]}` : '';

        // Unir las partes y devolver el resultado
        const resultado = parteEntera + parteDecimal;
        return resultado;
    }

    const formatearPorcentaje = (descuento) => {
        const porcentaje = descuento * 100;
        setPorcentajeDescuento(porcentaje)
    }

    const precioConDescuento = (precio, descuento) => {
        const precioDescuento = precio - (precio * descuento);
        setPreciofinal(formatearNumero(precioDescuento));
    }

    const contadorMas = () => {
        setUnidades(unidades + 1)
        calcularPrecio
    }

    const contadorMenos = () => {
        if (unidades > 0) {
            setUnidades(unidades - 1)
            calcularPrecio
        }
    }

    const setValorCantidadManual = (e) => {
        const inputValue = e.target.value;
        // Verificar si el valor ingresado es un número o está vacío
        if (/^\d*$/.test(inputValue) || inputValue === '') {
            setUnidades(inputValue === '' ? 0 : parseInt(inputValue, 10));
        }
    }

    const soloNumeros = (e) => {
        const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

        // Permitir la tecla de borrar (Backspace)
        if (e.key === 'Backspace') {
            return;
        }

        if (!validKeys.includes(e.key)) {
            e.preventDefault();
        }
    }
    const mostrarConfirmarProducto = () => {
        setIsConfirmarAñadirProducto(true);
    }

    const ocultarConfirmarProducto = () => {
        setIsConfirmarAñadirProducto(false);
        setMensajeError('');
    }


    /* Codigo para en la confirmacion del producto a añadir se aumente el valor en base a las unidades */

    useEffect(() => {
        const precioNeto = calcularPrecio(props.precio);
        calcularPrecioConDescuento(precioNeto);
    }, [unidades, props.precio, precioAñadir, props.descuento]);

    const calcularPrecio = (precio) => {
        const valorNeto = precio * unidades;
        setprecioAñadir(valorNeto);
        return valorNeto; // Devuelve el valor calculado para su uso posterior
    }

    const calcularPrecioConDescuento = (precioNeto) => {
        const valorDescuento = precioNeto - (precioNeto * props.descuento);
        setPreciofinalAñadir(valorDescuento);
    }


    /* Confirmar Producto */

    const guardarEnLocalStorage = (producto) => {
        // Obtener el array almacenado en el Local Storage o usar un array vacío por defecto
        const productosEnCarrito = JSON.parse(localStorage.getItem('productosEnCarrito')) || [];

        // Agregar el nuevo producto al array
        productosEnCarrito.push(producto);

        // Guardar el array actualizado en el Local Storage
        localStorage.setItem('productosEnCarrito', JSON.stringify(productosEnCarrito));
    };


    const generarIdUnico = () => {
        return Math.random().toString(36).substr(2, 9);
    }

    const confirmarProducto = () => {

        const productoConfirmado = {
            id: generarIdUnico(),
            nombre: props.nombre,
            referencia: props.referencia,
            descuento: props.descuento,
            talla: tallaSeleccionada,
            img: props.colores[imagenSeleccionada].img,
            color: props.colores[imagenSeleccionada].color,
            precio: props.precio,
            unidades: unidades,
        }

        if (tallaSeleccionada === '') {
            setMensajeError('Por favor seleccione una talla');
        } else {

            ocultarConfirmarProducto();

            Swal.fire({
                title: 'Go Pedidos',
                text: '¿Añadir producto al carrito?',
                icon: 'question',
                showDenyButton: true,
                confirmButtonText: 'Si',
                confirmButtonColor: '#009b3e'
            }).then((respuesta) => {
                if (respuesta.isConfirmed) {
                    Swal.fire({
                        title: 'Go Pedidos',
                        text: `${props.nombre} ha sido añadido al carrito de compras`,
                        icon: 'success',
                        confirmButtonColor: '#009b3e',
                    })
                    guardarEnLocalStorage(productoConfirmado);
                    /* se resetean valores de la card */
                    recargarProductos();
                    setTallaSeleccionada('');
                    setUnidades(1);
                    setIsAñadir(false);
                    setImagenSeleccionada(0);
                    setSelectedColorIndex(0);

                } else if (respuesta.isDenied) {
                    mostrarConfirmarProducto()
                }
            })

        }



    }



    return (
        <div className='cardProducto' >
            <h2>{props.nombre}</h2>
            <div className='cardProductoDiv1'>
                <img onClick={mostrarConfirmarProducto} src={props.colores[imagenSeleccionada].img} alt="" />
                <div className='cardProductoDiv1P' ref={cardProductosRef}>
                    {isAñadir ? (
                        <p
                            className='pAñadir'
                            onClick={mostrarConfirmarProducto}
                        >
                            Añadir
                        </p>
                    ) : (
                        <p className='cardProductoDiv1P-talla' onClick={toggleDropdown}>Talla</p>
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
                            {tallas.map((talla, index) => (
                                <li
                                    onClick={() => seleccionarTalla(talla.talla)}
                                    key={index + 1}>
                                    {talla.talla}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            <p className='cardProductoRef'><span>Ref: </span>{props.referencia}</p>
            <div className='cardProductoPrecios'>
                <p className='cardProductoPrecioNeto'>{`$${formatearNumero(precio)}`}</p>
                <p className='cardProductoDescuento'>-{porcetajeDescuento}%</p>
            </div>
            <p className='cardProductoPrecioFinal'>${precioFinal}</p>
            {isSelectColor ?
                (
                    <p className='cardProducto-masColores' onClick={toggleSelectcolor}>Más Colores +</p>
                ) : (
                    <div className='cardProducto-contenedorDecolores'>
                        {props.colores.map((color, index) => (
                            <img
                                className={`coloresProductos ${selectedColorIndex === index ? 'selected' : ''}`}
                                key={index + 1}
                                id={color.id}
                                src={color.img}
                                alt=""
                                onClick={() => handleColorClick(index)}
                            />
                        ))}
                    </div>
                )}

            {isConfimarAñadirProducto && (

                <div className='popup-bg-confirmarProducto'>

                    <div className='popup-confirmarProducto'>
                        <img onClick={ocultarConfirmarProducto} className="confirmarProducto-close-button-img" src={cerrar} alt="Cerrar" />
                        <h2>{props.nombre}</h2>

                        <div className='confirmarProducto'>
                            <div>
                                <img className='confirmarProductoImgPrincipal' src={props.colores[imagenSeleccionada].img} alt="" />
                            </div>

                            <div className='confirmarProductoImgSecundarias'>
                                {props.colores.map((color, index) => (
                                    <img
                                        className={`coloresProductos confirmarProductoImgMini ${selectedColorIndex === index ? 'selected' : ''}`}
                                        key={index + 1}
                                        id={color.id}
                                        src={color.img}
                                        alt=""
                                        onClick={() => handleColorClick(index)}
                                    />
                                ))}
                            </div>
                        </div>

                        <div>
                            <div
                                className={`iconoDeTallas-ConfirmarProducto`}
                            >
                                <p
                                    ref={cardAñadirProductosRef}
                                    onClick={toggleDropdownAñadir}
                                    className='confirmarProductoTalla'
                                >
                                    {tallaSeleccionada === '' ? 'Seleccione una talla' : tallaSeleccionada}
                                </p>
                                <FontAwesomeIcon
                                    className='confirmarPedidoDesplegarTalla'
                                    icon={desplegarTallasAñadir ? faAngleDown : faAngleUp}
                                    onClick={toggleDropdownAñadir}
                                />
                                {isDropdownOpenAñadir && (
                                    <ul className="dropdown-list-confirmarProducto">
                                        {tallas.map((talla, index) => (
                                            <li
                                                onClick={() => seleccionarTalla(talla.talla)}
                                                key={index + 1}>
                                                {talla.talla}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                            <div className='preciosAñadirProducto'>
                                <div className='cantidad-confirmarProducto'>
                                    <img onClick={contadorMenos} className='botonUnidades-confirmarProducto' src={botonMenos} alt="" />
                                    <input
                                        value={unidades}
                                        onChange={setValorCantidadManual}
                                        onKeyDown={soloNumeros}
                                    />
                                    <img onClick={contadorMas} className='botonUnidades-confirmarProducto' src={botonMas} alt="" />
                                </div>
                                <div>
                                    <div className='cardProductoPrecios'>
                                        <p className='cardProductoPrecioNeto'>{`$${formatearNumero(precioAñadir)}`}</p>
                                        <p className='cardProductoDescuento'>-{porcetajeDescuento}%</p>
                                    </div>
                                    <p className='cardProductoPrecioFinal'>${formatearNumero(precioFinalAñadir)}</p>
                                </div>
                            </div>
                            <div className='confirmarProducto-informacionExtra'>
                                <p className='cardProductoRef'><span>REF: </span>{props.referencia}</p>
                                <p className='cardProductoRef cardProductoDetalle'><span>Detalle: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolorem debitis aut nesciunt cumque cum molestias harum, inventore ipsa odit nihil rem sequi laboriosam iusto quia libero sed earum facilis.

                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolorem debitis aut nesciunt cumque cum molestias harum, inventore ipsa odit nihil rem sequi laboriosam iusto quia libero sed earum facilis.

                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolorem debitis aut nesciunt cumque cum molestias harum, inventore ipsa odit nihil rem sequi laboriosam iusto quia libero sed earum facilis.

                                </p>
                                < CardError
                                    info={mensajeError}
                                />
                            </div>
                        </div>
                        {/* <div className='cantidad-agregar-confirmarProducto'>
                            <div className='cantidad-confirmarProducto'>
                                <img onClick={contadorMenos} className='botonUnidades-confirmarProducto' src={botonMenos} alt="" />
                                <input
                                    value={unidades}
                                    onChange={setValorCantidadManual}
                                    onKeyDown={soloNumeros}
                                />
                                <img onClick={contadorMas} className='botonUnidades-confirmarProducto' src={botonMas} alt="" />

                            </div>
                            <div className='agregar-confirmarProducto'>
                                <p>Agregar al Carro</p>
                            </div>
                            </div> */}
                        <div className='agregar-confirmarProducto'>
                            <p onClick={confirmarProducto}>Agregar al Carro</p>
                        </div>
                    </div>

                </div>
            )}
        </div>

    )
}

export default CardProductos