import React from 'react';
import Navigation from './Navigation';
import ProductCard from './ProductCard';
import { Package, CheckCircle, Truck, Target, QrCode, Search } from 'lucide-react';

const CustomerDashboard = ({
  darkMode,
  setDarkMode,
  currentUser,
  handleLogout,
  products,
  filteredProducts,
  searchTerm,
  setSearchTerm,
  setSelectedProduct,
  alerts
}) => {
  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <Navigation
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        currentUser={currentUser}
        handleLogout={handleLogout}
        alerts={alerts}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Customer Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div className={`p-6 rounded-xl shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Total Products</p>
                  <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{products.length}</p>
                </div>
                <Package className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <div className={`p-6 rounded-xl shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Verified Products</p>
                  <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    {products.filter(p => p.quality >= 90).length}
                  </p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <div className={`p-6 rounded-xl shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>In Transit</p>
                  <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    {products.filter(p => p.status === 'In Transit').length}
                  </p>
                </div>
                <Truck className="w-8 h-8 text-orange-600" />
              </div>
            </div>
            <div className={`p-6 rounded-xl shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Avg Quality</p>
                  <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    {Math.round(products.reduce((acc, p) => acc + p.quality, 0) / products.length)}%
                  </p>
                </div>
                <Target className="w-8 h-8 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-10 pr-4 py-3 border rounded-lg ${darkMode ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'}`}
              />
            </div>
            <button className={`px-6 py-3 rounded-lg flex items-center ${darkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-white text-gray-800 hover:bg-gray-50'} shadow-md`}>
              <QrCode className="w-5 h-5 mr-2" />
              Scan QR Code
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onSelect={setSelectedProduct} darkMode={darkMode} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
