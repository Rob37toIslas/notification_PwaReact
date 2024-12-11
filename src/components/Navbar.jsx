import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/nav.css';  // Si estás utilizando el archivo CSS externo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);  // Estado para controlar el menú

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navLogo">
        <Link to="/" className="logoLink">
          <img src="https://cdn.hidalgo.gob.mx/componentes/header/Logo_gob_hidalgo.svg" alt="Logo" />
        </Link>
      </div>

      {/* Icono de hamburguesa */}
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Menú de navegación */}
      <ul className={`navList ${isOpen ? 'open' : ''}`}>
        <li className="navItem">
          <Link to="/" className="navLink">Inicio</Link>
        </li>
        <li className="navItem">
          <Link to="/services" className="navLink">Servicios</Link> {/* Corregido "Servisios" a "Servicios" */}
        </li>
        <li className="navItem">
          <Link to="/login" className="navLink">Iniciar sesión</Link> {/* Corregido "Iniciar session" a "Iniciar sesión" */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
