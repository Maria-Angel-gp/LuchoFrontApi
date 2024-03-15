import React from "react";
import { Outlet, Link } from "react-router-dom";
import '../Clientes/Clientes.css';

const Cliente = () => {
    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
                <div id="tituloCliente">
                    <h1>Clientes</h1>
                </div>
            <div className="botonesCliente">
                <Link to= "/agregarCliente">                
                    <button className="botonCliente botonAgregarCliente rojoCliente"><i className="fa-solid fa-plus"></i> Agregar cliente</button>
                </Link>
                <button className="botonCliente boton-generarCliente vinotintoCliente"><i className="fa-solid fa-file-pdf"></i> Generar reportes</button>
            </div>
            <div className="tablaCliente">
                <table id="tablaDataTableCliente" className="display">
                    <thead>
                        <tr>
                            <th><i className="fa-solid fa-key iconosRojosCliente"></i> ID</th>
                            <th><i className="fa-solid fa-font iconosRojosCliente"></i> Nombre</th>
                            <th><i className="fa-solid fa-phone iconosRojosCliente"></i> Telefono</th>
                            <th><i className="fa-sharp fa-solid fa-location-dot iconosRojosCliente"></i> Dirección</th>
                            <th><i className="fa-solid fa-gear iconosRojosCliente"></i> Funciones</th>
                        </tr>
                    </thead>
                    <tbody id="contenidoClientes">
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Cliente;