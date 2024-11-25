import React from 'react';
import InventoryIcon from '@mui/icons-material/Inventory'; // Importa el icono de inventario

const ProductCard = ({ name, price, currency, onAdd, onRemove }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        {/* Muestra el icono de Material UI en lugar de la imagen */}
        <InventoryIcon style={{ fontSize: 50, color: '#28a745' }} />  {/* Personaliza el tamaño y color */}
      </div>
      <div className="product-info">
        <h3>{name}</h3>
        <p>{currency} {price}</p>
        <div className="quantity-controls">
          <button onClick={onRemove}>-</button>
          <button onClick={onAdd}>+</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
