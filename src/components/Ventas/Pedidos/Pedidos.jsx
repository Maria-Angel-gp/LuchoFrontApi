import React from 'react';
import { Link } from 'react-router-dom';
import '../Pedidos/Pedidos.css'

const Pedidos = () => {
    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
                <div id="tituloPedidos">
                    <h2>Pedidos</h2>
                </div>
            <div class="botones">
                <Link to="/agregarPedidos">
                    <button class="rojo boton botonAgregar" ><i class="fa-solid fa-plus"></i> Agregar</button>
                </Link>
                <button class="vinotinto boton boton-generar"><i class="fa-solid fa-file-pdf"></i> Generar reportes</button>
            </div>
            <div class="tabla">
                <table id="tablaDataTable" class="display">
                    <thead>
                        <tr>
                            <th><i class="fa-solid fa-key iconosRojos"></i> ID</th>
                            <th><i class="fa-solid fa-message iconosRojos"></i> Descripción</th>
                            <th><i class="fa-sharp fa-solid fa-dollar-sign iconosRojos"></i> Precio del pedido</th>
                            <th><i class="fa-solid fa-calendar-week iconosRojos"></i> Fecha del pedido</th>
                            <th><i class="fa-solid fa-beer iconosRojos"></i> Productos</th>
                            <th><i class="fa-solid fa-user iconosRojos"></i> Cliente</th>
                            <th><i class="fa-solid fa-gear iconosRojos"></i> Funciones</th>
                        </tr>
                    </thead>
                    <tbody id="contenidotablapedidos">

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Pedidos;