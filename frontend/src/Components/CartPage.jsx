// CartPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const CartPage = ({ cart, onAdd, onRemove }) => {
  // Calcular el total y los productos en el carrito
  const calculateTotal = () => {
    return cart.reduce((total, product) => total + (product.price * product.quantity), 0);
  };

  return (
    <div className="cart-page">
      <div className="cart-items">
        <h2>Carrito de Compras</h2>
        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Carrito vacío, agregue productos</p>
            <Link to="/product">
              <button>Ir a productos</button>
            </Link>
          </div>
        ) : (
          <div className="cart-items-list">
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Subtotal</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((product) => (
                  <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.currency} {product.price}</td>
                    <td>
                      <div className="quantity-controls">
                        <button onClick={() => onRemove(product)}>-</button>
                        {product.quantity}
                        <button onClick={() => onAdd(product)}>+</button>
                      </div>
                    </td>
                    <td>{product.currency} {product.price * product.quantity}</td>
                    <td>
                      <button className="cart-item-actions" onClick={() => onRemove(product)}>Eliminar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="cart-summary">
              <h3>Total: {cart[0]?.currency} {calculateTotal().toFixed(2)}</h3>
              <button>Finalizar Pedido</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
