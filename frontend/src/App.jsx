import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductPage from './Components/ProductPage';  // Página de productos
import Navbar from './Components/Navbar/Navbar';  // Navbar
import HomePage from './Components/HomePage';  // Página de inicio
import Account from './Components/Account';  // Página de login
import CartPage from './Components/CartPage'; // Importa la nueva página de carrito

const App = () => {
  const [cart, setCart] = useState([]); // Estado para el carrito

  // Función para agregar un producto al carrito
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      // Verifica si el producto ya está en el carrito
      const existingProduct = updatedCart.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1; // Si ya está, aumenta la cantidad
      } else {
        updatedCart.push({ ...product, quantity: 1 }); // Si no está, agrega el producto
      }
      return updatedCart;
    });
  };

  // Función para remover un producto del carrito
  const handleRemoveFromCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      const existingProduct = updatedCart.find(item => item.id === product.id);
      if (existingProduct && existingProduct.quantity > 1) {
        existingProduct.quantity -= 1; // Si hay más de 1, solo reduce la cantidad
      } else {
        return updatedCart.filter(item => item.id !== product.id); // Si la cantidad es 1, lo elimina
      }
      return updatedCart;
    });
  };

  return (
    <Router>
      <Navbar cart={cart} /> {/* Pasamos el carrito al Navbar */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route 
          path="/product" 
          element={
            <ProductPage 
              cart={cart} 
              onAddToCart={handleAddToCart} 
              onRemoveFromCart={handleRemoveFromCart} 
            />
          } 
        />
        <Route path="/account" element={<Account />} />
        <Route
          path="/cart"
          element={<CartPage cart={cart} onAdd={handleAddToCart} onRemove={handleRemoveFromCart} />}
        />

      </Routes>
    </Router>
  );
};

export default App;
