import React from 'react';
import { Link } from 'react-router-dom';

export const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="block transform transition-transform duration-300 hover:scale-105">
      <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg">
        <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
        </div>
      </div>
    </Link>
  );
};