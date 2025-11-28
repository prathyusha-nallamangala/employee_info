import React from 'react';

interface ProductProps {
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
  };
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
