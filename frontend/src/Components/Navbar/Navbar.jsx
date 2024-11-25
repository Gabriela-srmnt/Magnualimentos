import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link do React Router
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import './Navbar.css'; // Certifique-se de adicionar estilos
import logo from '../../assets/logo.png'; // Importa a imagem do logo
import PropTypes from 'prop-types';

const Navbar = ({ cart }) => {
  const cartLength = cart ? cart.length : 0;  // Definindo valor padrão para cart

  return (
    <header className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo de Magnu" className="logo" />
      </div>
      <div className="search-container">
        <input type="text" placeholder="Buscar produtos..." className="search-bar" />
      </div>
      <nav className="nav-links">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/product">Produtos</Link></li>
          <li><Link to="/account">Mi cuenta</Link></li>
          {/* Adicione mais links conforme necessário */}
        </ul>
      </nav>
      <div className="cart-container">
        <a href="/cart">
          <ShoppingCartCheckoutIcon style={{ fontSize: 30, color: '#28a745' }} />
          <span className="cart-count">{cartLength}</span>  {/* Usando cartLength com valor padrão */}
        </a>
      </div>
    </header>
  );
};

// Validação de tipos das propriedades do Navbar
Navbar.propTypes = {
  cart: PropTypes.array.isRequired,  // Garantindo que cart será sempre um array
};

export default Navbar;

