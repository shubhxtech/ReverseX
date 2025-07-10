import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';

const mockProducts = [
  { name: 'Organic Bananas', tags: ['Organic', 'Fair-trade'], esgScore: 92, imageUrl: '/assets/bananas.jpg' },
  { name: 'Free-range Eggs', tags: ['Cruelty-free', 'Local'], esgScore: 88, imageUrl: '/assets/eggs.jpg' },
  { name: 'Artisanal Coffee', tags: ['Fair-trade'], esgScore: 95, imageUrl: '/assets/coffee.jpg' },
];

const SustainabilityViewPage = () => {
  const [filters, setFilters] = useState([]);

  const handleFilterChange = (filter) => {
    setFilters(prev => prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]);
  };

  const filteredProducts = filters.length ? mockProducts.filter(p => filters.every(f => p.tags.includes(f))) : mockProducts;

  return (
    <div className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Sustainability View</h2>
      <div className="flex space-x-2 mb-6">
        {['Fair-trade', 'Organic', 'Cruelty-free', 'Local'].map(f => (
          <button
            key={f}
            onClick={() => handleFilterChange(f)}
            className={`px-4 py-2 rounded-full font-semibold ${filters.includes(f) ? 'bg-walmart-blue text-white' : 'bg-white text-gray-700'}`}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map(p => <ProductCard key={p.name} product={p} />)}
      </div>
    </div>
  );
};

export default SustainabilityViewPage;