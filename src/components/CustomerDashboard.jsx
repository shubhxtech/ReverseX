import React from 'react';
import Navigation from './Navigation';
import { Package, Shield, CheckCircle, Search, RotateCcw, Eye, AlertTriangle, Clock } from 'lucide-react';

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
  setShowReturnForm,
  alerts
}) => {
  const deliveredProducts = products.filter(p => p.status === 'At Store');
  const returnPendingProducts = products.filter(p => p.status === 'Return Pending');
  const authenticatedProducts = products.filter(p => p.verified);

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
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Delivered</p>
                  <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{deliveredProducts.length}</p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <div className={`p-6 rounded-xl shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Authenticated</p>
                  <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{authenticatedProducts.length}</p>
                </div>
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
            </div>
            <div className={`p-6 rounded-xl shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Returns Pending</p>
                  <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{returnPendingProducts.length}</p>
                </div>
                <RotateCcw className="w-8 h-8 text-orange-600" />
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
            <button 
              onClick={() => setShowReturnForm(true)}
              className={`px-6 py-3 rounded-lg flex items-center bg-orange-600 text-white hover:bg-orange-700 shadow-md transition-colors`}
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              Return Product
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'}`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{product.name}</h3>
                <div className={`px-3 py-1 rounded-full text-sm flex items-center ${
                  product.status === 'At Store' ? 'bg-green-100 text-green-800' : 
                  product.status === 'Return Pending' ? 'bg-orange-100 text-orange-800' :
                  product.status === 'In Transit' ? 'bg-blue-100 text-blue-800' : 
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {product.status === 'Return Pending' && <Clock className="w-3 h-3 mr-1" />}
                  {product.status === 'At Store' && <CheckCircle className="w-3 h-3 mr-1" />}
                  {product.status === 'In Transit' && <Package className="w-3 h-3 mr-1" />}
                  {product.status}
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>SKU:</span>
                  <span className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>{product.sku}</span>
                </div>
                <div className="flex justify-between">
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Category:</span>
                  <span className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>{product.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Location:</span>
                  <span className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>{product.location}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Verified:</span>
                  <div className="flex items-center">
                    {product.verified ? (
                      <Shield className="w-4 h-4 text-green-500 mr-1" />
                    ) : (
                      <AlertTriangle className="w-4 h-4 text-red-500 mr-1" />
                    )}
                    <span className={`text-sm font-medium ${product.verified ? 'text-green-600' : 'text-red-600'}`}>
                      {product.verified ? 'Yes' : 'No'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Return Info Section */}
              {product.returnInfo && (
                <div className={`p-3 rounded-lg mb-4 ${darkMode ? 'bg-orange-900/20 border border-orange-700' : 'bg-orange-50 border border-orange-200'}`}>
                  <div className="flex items-center mb-2">
                    <RotateCcw className="w-4 h-4 text-orange-600 mr-2" />
                    <span className={`text-sm font-medium ${darkMode ? 'text-orange-300' : 'text-orange-800'}`}>
                      Return Status
                    </span>
                  </div>
                  <div className="text-xs space-y-1">
                    <div className="flex justify-between">
                      <span className={darkMode ? 'text-orange-400' : 'text-orange-700'}>Return ID:</span>
                      <span className={darkMode ? 'text-orange-300' : 'text-orange-800'}>{product.returnInfo.id}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={darkMode ? 'text-orange-400' : 'text-orange-700'}>Reason:</span>
                      <span className={darkMode ? 'text-orange-300' : 'text-orange-800'}>{product.returnInfo.reason}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={darkMode ? 'text-orange-400' : 'text-orange-700'}>Status:</span>
                      <span className={darkMode ? 'text-orange-300' : 'text-orange-800'}>{product.returnInfo.status}</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex space-x-2">
                <button 
                  onClick={() => setSelectedProduct(product)}
                  className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 text-sm flex items-center justify-center"
                >
                  <Eye className="w-4 h-4 mr-1" />
                  View Details
                </button>
                {product.status === 'At Store' && !product.returnInfo && (
                  <button 
                    onClick={() => setShowReturnForm(true)}
                    className="flex-1 bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 text-sm flex items-center justify-center"
                  >
                    <RotateCcw className="w-4 h-4 mr-1" />
                    Return
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className={`text-center py-12 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            <Package className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p className="text-lg">No products found</p>
            <p className="text-sm mt-2">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerDashboard;