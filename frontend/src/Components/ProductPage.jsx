import React, { useState } from 'react';
import ProductCard from './ProductCard';
import './ProductPage.css';
import Navbar from "./Navbar/Navbar";

const ProductPage = () => {
  const [cart, setCart] = useState([]);  // Estado do carrinho

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = (product) => {
    setCart(cart.filter(item => item !== product));
  };

  const products = [
    { id: 1, name: 'Jengibre (kilo)', price: 1900, currency: 'CRC', image: '', quantity: 0 },
    { id: 2, name: 'Plátano (un)', price: 150, currency: 'CRC', image: '', quantity: 0 },
    { id: 3, name: 'Limón Mandarina (un)', price: 150, currency: 'CRC', image: '', quantity: 0 },
    { id: 4, name: 'Chile Panameno (20 unidades)', price: 1900, currency: 'CRC', image: '', quantity: 0 },
    { id: 5, name: 'Jugo de Cana (1 Galon)', price: 5000, currency: 'CRC', image: '', quantity: 0 },
    { id: 6, name: 'Jugo de Cana (2L)', price: 2800, currency: 'CRC', image: '', quantity: 0 },
    { id: 7, name: 'Huevos (30 unidades)', price: 4000, currency: 'CRC', image: '', quantity: 0 },
    { id: 8, name: 'Papaya', price: 600, currency: 'CRC', image: '', quantity: 0 },
    { id: 9, name: 'Algarroba 250g', price: 3500, currency: 'CRC', image: '', quantity: 0 },
    { id: 10, name: 'Avena Integral 1Kg', price: 1750, currency: 'CRC', image: '', quantity: 0 },
    { id: 11, name: 'Carbon Activado 80g', price: 3500, currency: 'CRC', image: '', quantity: 0 },
    { id: 12, name: 'Cevada en Polvo', price: 3000, currency: 'CRC', image: '', quantity: 0 },
    { id: 13, name: 'Colochos de Soya', price: 6250, currency: 'CRC', image: '', quantity: 0 },
    { id: 14, name: 'Granola 500g', price: 3500, currency: 'CRC', image: '', quantity: 0 },
    { id: 15, name: 'Levadura nutricional 142g', price: 6000, currency: 'CRC', image: '', quantity: 0 },
    { id: 16, name: 'Queque 600g', price: 4000, currency: 'CRC', image: '', quantity: 0 },
    { id: 17, name: 'Miel Pura de Abeja 1 kg', price: 7000, currency: 'CRC', image: '', quantity: 0 },
    { id: 18, name: 'Tora de Falafel', price: 3500, currency: 'CRC', image: '', quantity: 0 },
    { id: 19, name: 'Fortmag', price: 200, currency: 'USD', image: '', quantity: 0 },
    { id: 20, name: 'Masa para chorreada 1kg', price: 2500, currency: 'CRC', image: '', quantity: 0 },

    // Agrega más productos aquí
  ];

  return (
    <div className="NavBar">
      {/* Passando o cart como prop para o Navbar */}
      <Navbar cart={cart} />
      <header>
        {/* Resto do código */}
      </header>
      
      <div className="products-grid">
        {products.map(product => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            currency={product.currency}
            image={product.image}
            onAdd={() => handleAddToCart(product)}  // Passando função de adicionar ao carrinho
            onRemove={() => handleRemoveFromCart(product)}  // Passando função de remover do carrinho
          />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;