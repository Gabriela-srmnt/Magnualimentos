// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Usamos Link de React Router
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import './Navbar.css';
import logo from '../../assets/logo.png';
import PropTypes from 'prop-types';

const Navbar = ({ cart }) => {
  const cartLength = cart && Array.isArray(cart) ? cart.length : 0;

  return (
    <header className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo de Magnu" className="logo" />
      </div>
      <div className="search-container">
        <input type="text" placeholder="Buscar productos..." className="search-bar" />
      </div>
      <nav className="nav-links">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/us">Nosotros</Link></li>
          <li><Link to="/recetas">Recetas</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/product">Productos</Link></li>
          <li><Link to="/account">Mi cuenta</Link></li> {/* Enlace a Mi cuenta */}
        </ul>
      </nav>

      <div className="cart-container">
        <Link to="/cart">
          <ShoppingCartCheckoutIcon style={{ fontSize: 30, color: '#28a745' }} />
          <span className="cart-count">{cartLength}</span>
        </Link>
      </div>
    </header>
  );
};

// Asegúrate de exportar el componente por defecto
export default Navbar;
