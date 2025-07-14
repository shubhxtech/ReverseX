import React, { useState } from 'react';
import { Clock, CheckCircle, AlertTriangle, BarChart3, Search, Shield, Thermometer, Droplets, Award, MapPin, X, DollarSign, Map, TrendingUp, Package, Truck, Eye } from 'lucide-react';
import VendorApproveReject from './VendorApproveReject';

const Navigation = ({ darkMode, setDarkMode, currentUser, handleLogout, alerts }) => {
  return (
    <nav className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg border-b backdrop-blur-sm`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-blue-600" />
              <h1 className={`text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`}>
                ChainTrust
              </h1>
            </div>
            <div className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
              {currentUser.name}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className={`w-3 h-3 rounded-full ${alerts > 0 ? 'bg-red-500 animate-pulse' : 'bg-green-500'}`}></div>
              {alerts > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {alerts}
                </span>
              )}
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-xl transition-all duration-300 ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            <button
              onClick={handleLogout}
              className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2 rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const IndiaMap = ({ darkMode, products }) => {
  const [selectedState, setSelectedState] = useState(null);
  
  // Mock shipment data for different states
  const shipmentData = {
    'Maharashtra': { shipments: 45, pending: 12, completed: 33 },
    'Gujarat': { shipments: 38, pending: 8, completed: 30 },
    'Karnataka': { shipments: 29, pending: 5, completed: 24 },
    'Tamil Nadu': { shipments: 31, pending: 7, completed: 24 },
    'Uttar Pradesh': { shipments: 22, pending: 9, completed: 13 },
    'West Bengal': { shipments: 18, pending: 3, completed: 15 },
    'Rajasthan': { shipments: 15, pending: 4, completed: 11 },
    'Punjab': { shipments: 12, pending: 2, completed: 10 },
  };

  const stateColors = {
    'Maharashtra': 'fill-blue-500',
    'Gujarat': 'fill-green-500',
    'Karnataka': 'fill-purple-500',
    'Tamil Nadu': 'fill-orange-500',
    'Uttar Pradesh': 'fill-red-500',
    'West Bengal': 'fill-yellow-500',
    'Rajasthan': 'fill-pink-500',
    'Punjab': 'fill-indigo-500',
  };

  return (
    <div className={`p-6 rounded-xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          Shipment Tracking - India
        </h3>
        <Map className="w-6 h-6 text-blue-600" />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Simplified India Map */}
        <div className="relative">
          <svg viewBox="0 0 400 500" className="w-full h-80">
            {/* Simplified state shapes */}
            <path
              d="M80 120 L140 110 L160 140 L120 180 L80 160 Z"
              className={`${stateColors['Punjab']} hover:opacity-75 cursor-pointer transition-all duration-300`}
              onClick={() => setSelectedState('Punjab')}
            />
            <path
              d="M60 160 L120 150 L140 200 L80 220 L60 200 Z"
              className={`${stateColors['Rajasthan']} hover:opacity-75 cursor-pointer transition-all duration-300`}
              onClick={() => setSelectedState('Rajasthan')}
            />
            <path
              d="M140 180 L200 170 L220 220 L180 240 L140 220 Z"
              className={`${stateColors['Uttar Pradesh']} hover:opacity-75 cursor-pointer transition-all duration-300`}
              onClick={() => setSelectedState('Uttar Pradesh')}
            />
            <path
              d="M80 220 L140 210 L160 260 L120 280 L80 260 Z"
              className={`${stateColors['Gujarat']} hover:opacity-75 cursor-pointer transition-all duration-300`}
              onClick={() => setSelectedState('Gujarat')}
            />
            <path
              d="M140 240 L200 230 L220 280 L180 300 L140 280 Z"
              className={`${stateColors['Maharashtra']} hover:opacity-75 cursor-pointer transition-all duration-300`}
              onClick={() => setSelectedState('Maharashtra')}
            />
            <path
              d="M180 300 L240 290 L260 340 L220 360 L180 340 Z"
              className={`${stateColors['Karnataka']} hover:opacity-75 cursor-pointer transition-all duration-300`}
              onClick={() => setSelectedState('Karnataka')}
            />
            <path
              d="M220 360 L280 350 L300 400 L260 420 L220 400 Z"
              className={`${stateColors['Tamil Nadu']} hover:opacity-75 cursor-pointer transition-all duration-300`}
              onClick={() => setSelectedState('Tamil Nadu')}
            />
            <path
              d="M260 180 L320 170 L340 220 L300 240 L260 220 Z"
              className={`${stateColors['West Bengal']} hover:opacity-75 cursor-pointer transition-all duration-300`}
              onClick={() => setSelectedState('West Bengal')}
            />
            
            {/* Animated shipment indicators */}
            <circle cx="180" cy="260" r="4" className="fill-red-500 animate-pulse" />
            <circle cx="120" cy="200" r="3" className="fill-green-500 animate-pulse" />
            <circle cx="240" cy="320" r="3" className="fill-blue-500 animate-pulse" />
            <circle cx="280" cy="380" r="4" className="fill-orange-500 animate-pulse" />
          </svg>
          
          {/* Legend */}
          <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {Object.entries(stateColors).map(([state, color]) => (
              <div key={state} className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded ${color.replace('fill-', 'bg-')}`}></div>
                <span className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{state}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Shipment Details */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Total Shipments</p>
                  <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>210</p>
                </div>
                <Truck className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-green-50'}`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>In Transit</p>
                  <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>50</p>
                </div>
                <Package className="w-8 h-8 text-green-600" />
              </div>
            </div>
          </div>
          
          {/* State-wise breakdown */}
          <div className="space-y-3">
            <h4 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              State-wise Shipments
            </h4>
            <div className="max-h-48 overflow-y-auto space-y-2">
              {Object.entries(shipmentData).map(([state, data]) => (
                <div
                  key={state}
                  className={`p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                    selectedState === state
                      ? `${darkMode ? 'bg-blue-700' : 'bg-blue-100'} border-2 border-blue-500`
                      : `${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'}`
                  }`}
                  onClick={() => setSelectedState(state)}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>{state}</p>
                      <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {data.shipments} total • {data.pending} pending
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${stateColors[state].replace('fill-', 'bg-')}`}></div>
                      <span className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                        {Math.round((data.completed / data.shipments) * 100)}%
                      </span>
                    </div>
                  </div>
                  {selectedState === state && (
                    <div className="mt-2 pt-2 border-t border-gray-300">
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>Completed: {data.completed}</div>
                        <div>Pending: {data.pending}</div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const VendorDashboard = ({
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
  const [showApproveReject, setShowApproveReject] = useState(false);
  const [selectedProductForAction, setSelectedProductForAction] = useState(null);
  const [viewMode, setViewMode] = useState('cards'); // 'cards' or 'table'

  const handleApproveClick = (product) => {
    setSelectedProductForAction(product);
    setShowApproveReject(true);
  };

  const handleRejectClick = (product) => {
    setSelectedProductForAction(product);
    setShowApproveReject(true);
  };

  const handleApprove = (productId, transactionHash) => {
    console.log(`Product ${productId} approved with transaction: ${transactionHash}`);
    setShowApproveReject(false);
  };

  const handleReject = (productId, reason, transactionHash) => {
    console.log(`Product ${productId} rejected: ${reason}, transaction: ${transactionHash}`);
    setShowApproveReject(false);
  };

  // Mock products data if not provided
  const mockProducts = products || [
    { id: 1, name: 'Premium Tea Leaves', sku: 'TEA-001', supplier: 'Assam Organics', status: 'Quality Check', quality: 95 },
    { id: 2, name: 'Organic Spices', sku: 'SPC-002', supplier: 'Kerala Spices Co', status: 'Quality Check', quality: 88 },
    { id: 3, name: 'Basmati Rice', sku: 'RIC-003', supplier: 'Punjab Grains', status: 'Quality Check', quality: 92 },
    { id: 4, name: 'Cotton Fabric', sku: 'FAB-004', supplier: 'Gujarat Textiles', status: 'Quality Check', quality: 78 },
    { id: 5, name: 'Mango Pulp', sku: 'FRT-005', supplier: 'Maharashtra Fruits', status: 'Quality Check', quality: 96 },
    { id: 6, name: 'Handicrafts', sku: 'HND-006', supplier: 'Rajasthan Crafts', status: 'Quality Check', quality: 85 },
  ];

  const productsToShow = filteredProducts || mockProducts;

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <Navigation
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        currentUser={currentUser || { name: 'Quality Inspector' }}
        handleLogout={handleLogout}
        alerts={alerts || 3}
      />
      
      <div className="container mx-auto px-6 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h2 className={`text-3xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Quality Control Dashboard
              </h2>
              <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Monitor and manage product quality across the supply chain
              </p>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <button
                onClick={() => setViewMode(viewMode === 'cards' ? 'table' : 'cards')}
                className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-300 ${
                  darkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-white text-gray-800 hover:bg-gray-50'
                } shadow-md`}
              >
                <Eye className="w-4 h-4" />
                <span>{viewMode === 'cards' ? 'Table View' : 'Card View'}</span>
              </button>
              <button className={`px-6 py-2 rounded-lg flex items-center space-x-2 transition-all duration-300 ${
                darkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-white text-gray-800 hover:bg-gray-50'
              } shadow-md`}>
                <Shield className="w-4 h-4" />
                <span>Blockchain Verify</span>
              </button>
            </div>
          </div>
          
          {/* Enhanced Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className={`p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${
              darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-700' : 'bg-gradient-to-br from-white to-gray-50'
            }`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Pending Review</p>
                  <p className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    {productsToShow.filter(p => p.status === 'Quality Check').length}
                  </p>
                  <p className="text-xs text-orange-600 mt-1">↗ 12% from last week</p>
                </div>
                <div className="p-3 bg-orange-100 rounded-full">
                  <Clock className="w-8 h-8 text-orange-600" />
                </div>
              </div>
            </div>
            
            <div className={`p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${
              darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-700' : 'bg-gradient-to-br from-white to-gray-50'
            }`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>High Quality</p>
                  <p className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    {productsToShow.filter(p => p.quality >= 90).length}
                  </p>
                  <p className="text-xs text-green-600 mt-1">↗ 8% from last week</p>
                </div>
                <div className="p-3 bg-green-100 rounded-full">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
              </div>
            </div>
            
            <div className={`p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${
              darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-700' : 'bg-gradient-to-br from-white to-gray-50'
            }`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Flagged Items</p>
                  <p className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    {productsToShow.filter(p => p.quality < 85).length}
                  </p>
                  <p className="text-xs text-red-600 mt-1">↘ 15% from last week</p>
                </div>
                <div className="p-3 bg-red-100 rounded-full">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                </div>
              </div>
            </div>
            
            <div className={`p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${
              darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-700' : 'bg-gradient-to-br from-white to-gray-50'
            }`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Avg Quality Score</p>
                  <p className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    {Math.round(productsToShow.reduce((acc, p) => acc + p.quality, 0) / productsToShow.length)}%
                  </p>
                  <p className="text-xs text-blue-600 mt-1">↗ 3% from last week</p>
                </div>
                <div className="p-3 bg-purple-100 rounded-full">
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* India Map Section */}
        <div className="mb-8">
          <IndiaMap darkMode={darkMode} products={productsToShow} />
        </div>

        {/* Enhanced Search and Filter Section */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products, suppliers, or SKUs..."
                value={searchTerm || ''}
                onChange={(e) => setSearchTerm && setSearchTerm(e.target.value)}
                className={`w-full pl-12 pr-4 py-4 border rounded-xl text-lg transition-all duration-300 focus:ring-2 focus:ring-blue-500 ${
                  darkMode ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'
                } shadow-md`}
              />
            </div>
            <div className="flex space-x-4">
              <select className={`px-4 py-4 rounded-xl border transition-all duration-300 ${
                darkMode ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'
              } shadow-md`}>
                <option>All Status</option>
                <option>Quality Check</option>
                <option>Approved</option>
                <option>Rejected</option>
              </select>
              <select className={`px-4 py-4 rounded-xl border transition-all duration-300 ${
                darkMode ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'
              } shadow-md`}>
                <option>All Quality</option>
                <option>High (90%+)</option>
                <option>Medium (80-89%)</option>
                <option>Low (80%)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid/Table */}
        {viewMode === 'cards' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productsToShow.map((product) => (
              <div
                key={product.id}
                className={`p-6 rounded-xl shadow-lg hover:shadow-xl cursor-pointer transition-all duration-300 transform hover:-translate-y-1 ${
                  darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-700' : 'bg-gradient-to-br from-white to-gray-50'
                }`}
                onClick={() => setSelectedProduct && setSelectedProduct(product)}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    {product.name}
                  </h3>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                    product.quality >= 95 ? 'bg-green-100 text-green-800' :
                    product.quality >= 85 ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {product.quality}%
                  </div>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center">
                    <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>SKU:</span>
                    <span className={`text-sm font-mono ${darkMode ? 'text-white' : 'text-gray-800'}`}>{product.sku}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Supplier:</span>
                    <span className={`text-sm ${darkMode ? 'text-white' : 'text-gray-800'}`}>{product.supplier}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Status:</span>
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      product.status === 'Quality Check' ? 'bg-orange-100 text-orange-800' :
                      product.status === 'Approved' ? 'bg-green-100 text-green-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {product.status}
                    </span>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleApproveClick(product);
                    }}
                    className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-4 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 text-sm font-medium shadow-lg"
                  >
                    ✓ Approve
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRejectClick(product);
                    }}
                    className="flex-1 bg-gradient-to-r from-red-500 to-red-600 text-white py-3 px-4 rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 text-sm font-medium shadow-lg"
                  >
                    ✗ Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={`rounded-xl shadow-lg overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <tr>
                    <th className={`px-6 py-4 text-left text-xs font-medium uppercase tracking-wider ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                      Product
                    </th>
                    <th className={`px-6 py-4 text-left text-xs font-medium uppercase tracking-wider ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                      SKU
                    </th>
                    <th className={`px-6 py-4 text-left text-xs font-medium uppercase tracking-wider ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                      Supplier
                    </th>
                    <th className={`px-6 py-4 text-left text-xs font-medium uppercase tracking-wider ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                      Quality
                    </th>
                    <th className={`px-6 py-4 text-left text-xs font-medium uppercase tracking-wider ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                      Status
                    </th>
                    <th className={`px-6 py-4 text-left text-xs font-medium uppercase tracking-wider ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className={`divide-y ${darkMode ? 'divide-gray-600' : 'divide-gray-200'}`}>
                  {productsToShow.map((product) => (
                    <tr key={product.id} className={`hover:${darkMode ? 'bg-gray-700' : 'bg-gray-50'} transition-colors duration-200`}>
                      <td className={`px-6 py-4 whitespace-nowrap ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        <div className="font-medium">{product.name}</div>
                      </td>
                      <td className={`px-6 py-4 whitespace-nowrap ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                        <span className="font-mono text-sm">{product.sku}</span>
                      </td>
                      <td className={`px-6 py-4 whitespace-nowrap ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                        {product.supplier}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className={`flex-shrink-0 h-2 w-16 rounded-full mr-2 ${
                            product.quality >= 95 ? 'bg-green-200' :
                            product.quality >= 85 ? 'bg-yellow-200' :
                            'bg-red-200'
                          }`}>
                            <div className={`h-2 rounded-full ${
                              product.quality >= 95 ? 'bg-green-500' :
                              product.quality >= 85 ? 'bg-yellow-500' :
                              'bg-red-500'
                            }`} style={{ width: `${product.quality}%` }}></div>
                          </div>
                          <span className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            {product.quality}%
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          product.status === 'Quality Check' ? 'bg-orange-100 text-orange-800' :
                          product.status === 'Approved' ? 'bg-green-100 text-green-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {product.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                        <button 
                          onClick={() => handleApproveClick(product)}
                          className="bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700 transition-colors duration-200"
                        >
                          Approve
                        </button>
                        <button 
                          onClick={() => handleRejectClick(product)}
                          className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition-colors duration-200"
                        >
                          Reject
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Enhanced Floating Action Button */}
      <div className="fixed bottom-8 right-8 space-y-4">
        <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-full shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110">
          <Shield className="w-6 h-6" />
        </button>
        <button className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-4 rounded-full shadow-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-110">
          <BarChart3 className="w-6 h-6" />
        </button>
      </div>

      {/* Enhanced Modal */}
      {showApproveReject && selectedProductForAction && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="animate-in slide-in-from-bottom-4 duration-300">
            <VendorApproveReject
              product={selectedProductForAction}
              onClose={() => setShowApproveReject(false)}
              darkMode={darkMode}
              onApprove={handleApprove}
              onReject={handleReject}
            />
          </div>
        </div>
      )}


    </div>
  );
};

export default VendorDashboard;