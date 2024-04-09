import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import About from './components/About';
import Home from './components/Home';
import Default from './components/Default';
import Dashboard from './components/Dashboard';
import Usuarios from './components/Usuarios/Usuarios';
import Roles from './components/Configuracion/Roles';
import AgregarRoles from './components/Configuracion/AgregarRoles';
import AgregarUsuarios from './components/Usuarios/AgregarUsuarios';
import RegistrarCliente from './components/Ventas/Clientes/RegistrarCliente';
import Ventas from './components/Ventas/Ventas/Ventas';
import RegistrarPedido from './components/Ventas/Pedidos/RegistrarPedidos';
import Pedidos from './components/Ventas/Pedidos/Pedidos';
import Cliente from './components/Ventas/Clientes/Clientes';
import EditarPedidos from './components/Ventas/Pedidos/EditarPedidos';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/usuarios" element={<Usuarios />}/>
          <Route path="/agregarUsuarios" element={<AgregarUsuarios />}/>
          <Route path="/roles" element={<Roles />}/>
          <Route path="/agregarRoles" element={<AgregarRoles />}/>
          <Route path="/agregarCliente" element={<RegistrarCliente />}/>
          <Route path="/ventas" element={<Ventas />}/>
          <Route path="/agregarPedidos" element={<RegistrarPedido />}/>
          <Route path="/pedidos" element={<Pedidos />}/>
          <Route path="/clientes" element={<Cliente />}/>
          <Route path="/editarpedidos/:id_pedido" element={<EditarPedidos/>}/>
          <Route path="*" element={<Default />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
