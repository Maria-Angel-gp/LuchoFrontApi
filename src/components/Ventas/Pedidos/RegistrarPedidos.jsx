import React from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import '../Pedidos/estilosRPedidos.css';
import Modal from '../Clientes/modal';
import styled from "styled-components";
import { useState, useEffect } from "react";
const RegistrarPedido = () => {
    const [estadoModal1, cambiarEstadoModal1] = useState(false);
    const [clientes, setclientes] = useState([]);
    const [filtro, setFiltro] = useState('');
    const [cliente, setCliente] = useState(null);
    const [customers, setClientes] = useState([]);
    const [selectedCliente, setselectedCliente] = useState(null);
    const [ventanaClienteDetalle, VentanaClienteDetalle] = useState(false);

    const fetchVenta = async () => {
        try {
            const response = await fetch('http://localhost:8082/ventas/clientes');
            if (response.ok) {
                const data = await response.json();
                const clienteData = data.filter(cliente =>cliente.cliente_frecuente===1).map(cliente => ({
                    id_cliente: cliente.id_cliente,
                    nombre_cliente: cliente.nombre_cliente,
                    telefono_cliente: cliente.telefono_cliente,
                    direccion_cliente: cliente.direccion_cliente,
                    cliente_frecuente: cliente.cliente_frecuente,
                    estado_cliente: cliente.estado_cliente,
                }));
                setclientes(clienteData);
                setClientes(clienteData);
            } else {
                console.error('Error al obtener las venta');
            }
        } catch (error) {
            console.error('Error al obtener las venta:', error);
        }
    };
    useEffect(() => {
        fetchVenta();
    }, []);

    useEffect(() => {
        if (selectedCliente) {
          setCliente(
            customers.find((c) => c.id_cliente === selectedCliente.id_cliente)
          );
        }
    }, [selectedCliente, customers]);

    const handleFiltroChange = (e) => {
        setFiltro(e.target.value);
    };
    const filteredClientes = clientes.filter(cliente =>
        cliente.id_cliente.toString().includes(filtro) ||
        cliente.nombre_cliente.toLowerCase().includes(filtro.toLowerCase()) ||
        cliente.telefono_cliente.includes(filtro) ||
        cliente.direccion_cliente.toString().includes(filtro)||
        cliente.cliente_frecuente.toString().includes(filtro)||
        cliente.estado_cliente.toString().includes(filtro)

    );
    
    const columns =[
        {
            name : "Seccionar",
            cell : (row) =>(
                <div className="seleccionar">
                  <input
                    type="radio"
                    name="opcion"
                    id={`radio-${row.id_cliente}`}
                    checked={selectedCliente && selectedCliente.id_cliente === row.id_cliente}
                    onChange={() => setselectedCliente(row)}
                  />
                </div>
            )
        },
        {
            name : "Documento",
            selector: (row)=>row.id_cliente,
        },
        {
            name : "Nombre",
            selector: (row)=>row.nombre_cliente,
            sortable: true
        },
        {
            name : "Teléfono",
            selector: (row)=>row.telefono_cliente,
            sortable: true
        },
        {
            name : "Dirección",
            selector: (row)=>row.direccion_cliente,
            sortable: true
        },
        
    ]
    return (
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
            <div classNameName="contenido2">
                    <div id="tituloRPedidos">
                        <h2>Registrar Pedido</h2>
                    </div>
                <div id="contenedorcito">
                    <div className="input-container">
                        
                        <div id="kaka">
                            <p id="skad"><i className="fa-solid fa-calendar-days iconosRojos"></i> Fecha del Pedido</p>
                            <input id="fechapedido" className="input-field" type="date" />
                        </div>
                        <div id="kake">
                            <p id="skady"><i className="fa-solid fa-message iconosRojos"></i> Descripción del Pedido</p>
                            <textarea name="Descripcion" id="descripcion" cols="5" rows="4"></textarea>
                            {/* <input id="descpedido" className="input-field2" type="text" placeholder="Descripción del pedido" /> */}
                        </div>
                        <div id="cliente">
                            <p><i className="fa-solid fa-user-tie iconosRojos"></i> Cliente asociado</p>
                            <button onClick={() => cambiarEstadoModal1(!estadoModal1)} className="btnAgregar">Agregar</button>

                        </div>
                        <div id='ClienteAgregado'>
                            {ventanaClienteDetalle && (
                                <div className="detalleC">
                                    <h3 className="TablaCliente">Información del Cliente</h3>
                                    <p>Documento: {cliente.id_cliente}</p>
                                    <p>Nombre: {cliente.nombre_cliente}</p>
                                    <p>Telefono: {cliente.telefono_cliente}</p>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="TablaDetallePedidos">
                        <div className="agrPedidos">
                            <p><i className="fa-solid fa-basket-shopping iconosRojos"></i> Agregar Productos</p>
                            <button><i className="fa-solid fa-plus"></i></button>
                        </div>
                        <div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th></th>
                                        <th>Cantidad</th>
                                        <th></th>
                                        <th>Precio</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <select name="Seleccionar" id="Seleccionar">
                                                <option value="">Elije un producto</option>
                                                <option value="">opcion 1</option>
                                                <option value="">opcion 2</option>
                                                <option value="">opcion 3</option>
                                            </select>
                                        </td>
                                        <td></td>
                                        <td>
                                            <input type="number" className="inputcantidad" />
                                        </td>
                                        <td></td>
                                        <td>
                                            <input type="text" readOnly className="inputPrecio"/>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="cajaBotonesRPedidos">
                            <button onclick="registrar()" className="vinotinto" type="button">Guardar</button>
                            
                            <Link to="/pedidos">
                                <button className="rojoRPedidos" type="button">Cancelar</button>
                            </Link>
                        </div> 
                        
                    </div>
                    <div className="BotonesPedidos">
                        <div id="totalpedidos">
                            <p id="skady"><i className="fa-solid fa-dollar-sign iconosRojos"></i> Total Pedido</p>
                            <input readOnly id="preciopedido" className="input-field2" type="number"
                                />
                        </div>
                       
                    </div>
                </div>
                
                
                <Modal
                    estado={estadoModal1}
                    cambiarEstado={cambiarEstadoModal1}
                    titulo="Seleccionar Cliente"
                    mostrarHeader={true}
                    mostrarOverlay={true}
                    posicionModal={'center'}
                    width={'560px'}
                    padding={'20px'}
                    
                >
                    <Contenido>
                        <div className='filtro'>
                            <input type="text" placeholder="Buscar..." value={filtro} onChange={handleFiltroChange} className="busqueda"/>
                        </div>
                        <div className='tabla'>
                            <DataTable columns={columns} data={filteredClientes} pagination paginationPerPage={3} highlightOnHover></DataTable>
                        </div>                        
					    <button onClick={() => {VentanaClienteDetalle(true); cambiarEstadoModal1(!estadoModal1)}}>Aceptar</button>
                    </Contenido>

                </Modal>
                
            </div>
        </>
    )
}

export default RegistrarPedido;

const ContenedorBotones = styled.div`
	padding: 40px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
`;

const Boton = styled.button`
	display: block;
	padding: 10px 30px;
	border-radius: 100px;
	color: #fff;
	border: none;
	background: #1766DC;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	transition: .3s ease all;
    margin-top: 20px;

	&:hover {
		background: #0066FF;
	}
`;

const Contenido = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	h1 {
		font-size: 42px;
		font-weight: 700;
		margin-bottom: 10px;
	}

	p {
		font-size: 16px;
		margin-bottom: 11px;
	}

	img {
		width: 100%;
		vertical-align: top;
		border-radius: 3px;
	}
`;