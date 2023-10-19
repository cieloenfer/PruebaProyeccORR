import React from 'react';
import { ItemCount } from "..Components/ItemCount"
import { Item } from "..Components/item"
import { ItemCount } from "..Components/ItemCount"

const ItemDetails = ({ product }) => {
  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div>
      <h2>Detalle del Producto</h2>
      <p><strong>Nombre:</strong> {product.name}</p>
      <p><strong>Descripción:</strong> {product.description}</p>
      {/* Agrega más detalles según tus necesidades */}
    </div>
  );
};

export default ItemDetails;

