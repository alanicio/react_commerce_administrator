import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, NavDropdown } from './styled'

const Header = () => {
  return (
    <Navbar>
      <NavDropdown>
        <button type="button">
          Productos <i className="fas fa-caret-down"></i>
        </button>
        <ul>
          <li><Link to="/productos">Mostrar Productos</Link></li>
          <li><Link to="/productos/nuevo">Agregar Producto</Link></li>
        </ul>
      </NavDropdown>

      <NavDropdown>
        <button type="button">
          Clientes <i className="fas fa-caret-down"></i>
        </button>
        <ul>
          <li>Agregar Cliente</li>
          <li>Mostrar Clientes</li>
        </ul>
      </NavDropdown>

    </Navbar>
  )
}

export default Header
