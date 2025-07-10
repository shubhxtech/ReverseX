import React from 'react';
import { Thermometer } from 'lucide-react';

const ProductCard = ({ product, onSelect, darkMode }) => {
  return (
    <div
      className={`p-6 rounded-xl shadow-md cursor-pointer transition-all duration-300 hover:shadow-lg ${
        darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
      }`}
      onClick={() => onSelect(product)}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          {product.name}
        </h3>
        <div
          className={`px-3 py-1 rounded-full text-sm ${
            product.quality >= 95
              ? 'bg-green-100 text-green-800'
              : product.quality >= 85
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-red-100 text-red-800'
          }`}
        >
          {product.quality}%
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between">
          <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>SKU:</span>
          <span className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            {product.sku}
          </span>
        </div>

        <div className="flex justify-between">
          <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Status:</span>
          <span className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            {product.status}
          </span>
        </div>

        <div className="flex justify-between">
          <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Location:</span>
          <span className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            {product.location}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Temperature:</span>
          <div className="flex items-center">
            <Thermometer className="w-4 h-4 mr-1 text-blue-500" />
            <span className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              {product.temperature}°C
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
