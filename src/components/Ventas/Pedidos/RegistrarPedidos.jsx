import React from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import '../Pedidos/estilosRPedidos.css';
const RegistrarPedido = () => {

    const columns1 = [
        {
            name: "Nombre",
            selector : row =>row.nombre,
            sortable : true
        },
        {
            name: "Apellido",
            selector : row => row.apellido,
            sortable : true

        },
        {
            name: "Edad",
            selector : row => row.edad,
            sortable : true


        },
    ]

    const data1 = [
        {
            nombre: "Juan",
            apellido: "Perez",
            edad: 25
        },
        {
            nombre: "Maria",
            apellido: "gonzalez",
            edad: 20
        },
        {
            nombre: "Sebas",
            apellido: "Ocampo",
            edad: 22
        },
        {
            nombre: "Sebas",
            apellido: "Ocampo",
            edad: 22
        },
        {
            nombre: "Sebas",
            apellido: "Ocampo",
            edad: 22
        },
    ]

    const columns2 =[
        {
            name : "Nombre",
            selector : row =>row.nombre,
            sortable : true

        },
        {
            name : "Apellido",
            selector : row =>row.apellido,
            sortable : true

        },
        {
            name : "Edad",
            selector : row =>row.edad,
            sortable : true

        },

    ]

    const data2 = [
        {
            nombre: "Juan Jose",
            apellido: "Gomez",
            edad: 20
        }  
    ]
    return (
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
            <div classNameName="contenido2">
                <center>
                    <div id="tituloRPedidos">
                        <h2>Registrar Pedido</h2>

                    </div>
                </center>
                <div id="contenedorcito">
                    <div className="input-container">
                        <div id="kaka">
                            <p id="skad"><span className="icon key-icon iconosRojos"></span>ID del Pedido</p>
                            <input id="idpedido" className="input-field" type="number" placeholder="Ingrese el ID del Pedido"
                                 />
                        </div>
                        <div id="kake">
                            <p id="skady"><i className="fa-sharp fa-solid fa-dollar-sign iconosRojos"></i> Precio del Pedido</p>
                            <input id="preciopedido" className="input-field2" type="number" placeholder="Precio del pedido"
                                />
                        </div>
                    </div>
                </div>
                <div id="contenedorcito">
                    <div className="input-container">
                        <div id="kaka">

                            <p id="skad"><span className="icon key-icon iconosRojos"></span>Fecha del Pedido</p>
                            <input id="fechapedido" className="input-field" type="date" placeholder="08/08/2023"
                                />
                        </div>
                        <br />
                        <br />
                        <br />
                        <div id="kake">
                            <p id="skady"><i className="fa-solid fa-message iconosRojos"></i> Descripción del Pedido</p>
                            <input id="descpedido" className="input-field2" type="text" placeholder="Descripción del pedido" />
                        </div>
                    </div>
                </div>
                <div className="cajaBotonesRPedidos">
                    <button onclick="registrar()" className="vinotinto" type="button">Guardar</button>
                    <div className="espacioEntreBotonesRPedidos"></div>
                    <Link to="/pedidos">
                        <button className="rojoRPedidos" type="button">Cancelar</button>
                    </Link>
                </div>
                <br />
                <div className="tabladetalleP">
                    <div className="tabladetalleInsu">
                        <div className="hijotablaInsu">
                            <DataTable title= "Insumos" columns={columns1} data={data1} pagination paginationPerPage={2}/>
                            <button className="agregarInsu"><i className="fa-solid fa-plus"></i></button>
                        </div>
                        
                    </div>
                    <div className="tabladetalleClien">
                        <DataTable title="Cliente" columns={columns2} data={data2}/>
                        <button className="agregarClient"><i className="fa-solid fa-refresh"></i></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegistrarPedido;