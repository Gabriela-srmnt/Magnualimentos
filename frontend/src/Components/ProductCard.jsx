import React from 'react';
import InventoryIcon from '@mui/icons-material/Inventory'; // Importa el icono de inventario

const ProductCard = ({ name, price, currency, onAdd, onRemove }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        {/* Mostrar el icono de Material UI en lugar de una imagen */}
        <InventoryIcon style={{ fontSize: 50, color: '#28a745' }} />
      </div>
      <div className="product-info">
        <h3>{name}</h3>
        <p>{currency} {price}</p>
        <div className="quantity-controls">
          <button onClick={onRemove}>-</button> {/* Disminuye la cantidad */}
          <button onClick={onAdd}>+</button> {/* Aumenta la cantidad */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
