import React, { useState, useEffect } from 'react';
import { Search, Shield, Truck, Factory, Store, AlertTriangle, CheckCircle, Thermometer, Award, Scan, ChevronDown, Filter, RefreshCw, Eye, ArrowRight, Zap, Globe, Leaf, Users, Clock, MapPin, TrendingUp, Database, Lock, Verified, Scale, Recycle, Package, AlertCircle } from 'lucide-react';

// Mock Data
const mockProducts = [
  {
    id: 'WM-2024-001',
    name: 'Organic Spinach',
    batch: 'SP-2024-0515',
    manufactured: '2024-05-15',
    expiry: '2024-05-22',
    origin: 'Green Valley Farm, California',
    blockchain: {
      hash: '0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b',
      txId: '0xdef123456789abcdef123456789abcdef123456789abcdef123456789abcdef',
      confirmations: 1234,
      blockNumber: 18259432
    },
    freshness: 94,
    trust: 98,
    certifications: ['USDA Organic', 'FDA Approved', 'Non-GMO'],
    timeline: [
      { status: 'Harvested', location: 'Green Valley Farm, CA', timestamp: '2024-05-15T06:30:00Z', temp: null },
      { status: 'Processed', location: 'FreshPack Processing, CA', timestamp: '2024-05-15T14:20:00Z', temp: 4 },
      { status: 'Shipped', location: 'Distribution Center, TX', timestamp: '2024-05-16T09:15:00Z', temp: 3 },
      { status: 'Delivered', location: 'Walmart Store #1234', timestamp: '2024-05-17T07:45:00Z', temp: 2 }
    ],
    sustainability: {
      carbon: 2.4,
      water: 1.2,
      waste: 0.8,
      local: true,
      organic: true,
      fairTrade: false
    }
  },
  {
    id: 'WM-2024-002',
    name: 'Free-Range Chicken',
    batch: 'CH-2024-0520',
    manufactured: '2024-05-20',
    expiry: '2024-05-27',
    origin: 'Happy Farms, Kentucky',
    blockchain: {
      hash: '0x9f8e7d6c5b4a3928f7e6d5c4b3a2918f7e6d5c4b3a2918f7e6d5c4b3a2918f7e',
      txId: '0xabc987654321fedcba987654321fedcba987654321fedcba987654321fedcba',
      confirmations: 892,
      blockNumber: 18259445
    },
    freshness: 89,
    trust: 96,
    certifications: ['Free-Range', 'Antibiotic-Free', 'USDA Inspected'],
    timeline: [
      { status: 'Processed', location: 'Happy Farms, KY', timestamp: '2024-05-20T05:00:00Z', temp: null },
      { status: 'Packed', location: 'PoultryPack, KY', timestamp: '2024-05-20T12:30:00Z', temp: 2 },
      { status: 'Shipped', location: 'Cold Chain Express', timestamp: '2024-05-21T08:00:00Z', temp: 1 },
      { status: 'Delivered', location: 'Walmart Store #1234', timestamp: '2024-05-22T06:30:00Z', temp: 1 }
    ],
    sustainability: {
      carbon: 5.2,
      water: 8.4,
      waste: 1.2,
      local: false,
      organic: false,
      fairTrade: false
    }
  },
  {
    id: 'WM-2024-003',
    name: 'Organic Strawberries',
    batch: 'ST-2024-0518',
    manufactured: '2024-05-18',
    expiry: '2024-05-25',
    origin: 'Sunny Acres, Florida',
    blockchain: {
      hash: '0x5f4e3d2c1b0a9f8e7d6c5b4a3f2e1d0c9f8e7d6c5b4a3f2e1d0c9f8e7d6c5b4a',
      txId: '0x321fedcba987654321fedcba987654321fedcba987654321fedcba987654321f',
      confirmations: 1567,
      blockNumber: 18259401
    },
    freshness: 91,
    trust: 97,
    certifications: ['USDA Organic', 'Fair Trade', 'Sustainable'],
    timeline: [
      { status: 'Harvested', location: 'Sunny Acres, FL', timestamp: '2024-05-18T05:30:00Z', temp: null },
      { status: 'Sorted', location: 'Berry Processing, FL', timestamp: '2024-05-18T14:00:00Z', temp: 4 },
      { status: 'Shipped', location: 'Fresh Express Logistics', timestamp: '2024-05-19T10:15:00Z', temp: 3 },
      { status: 'Delivered', location: 'Walmart Store #1234', timestamp: '2024-05-20T08:20:00Z', temp: 3 }
    ],
    sustainability: {
      carbon: 3.1,
      water: 2.8,
      waste: 0.5,
      local: false,
      organic: true,
      fairTrade: true
    }
  }
];

// Mock Recall Data
const mockRecalls = [
  {
    id: 'RC-2024-001',
    product: 'Romaine Lettuce',
    batch: 'RL-2024-0510',
    contamination: 'E. coli',
    status: 'Active Recall',
    affected: 342,
    stores: ['Store #1001', 'Store #1002', 'Store #1003'],
    issued: '2024-05-21',
    severity: 'High'
  },
  {
    id: 'RC-2024-002',
    product: 'Ground Beef',
    batch: 'GB-2024-0512',
    contamination: 'Salmonella',
    status: 'Under Investigation',
    affected: 89,
    stores: ['Store #1004', 'Store #1005'],
    issued: null,
    severity: 'Medium'
  }
];

// Mock Sustainability Products
const sustainabilityProducts = mockProducts.map(product => ({
  ...product,
  esgScore: Math.floor(Math.random() * 20) + 80,
  badges: [
    ...(product.sustainability.organic ? ['Organic'] : []),
    ...(product.sustainability.fairTrade ? ['Fair Trade'] : []),
    ...(product.sustainability.local ? ['Local'] : []),
    'Sustainable'
  ]
}));

// Navigation Component
const Navigation = ({ currentPage, setCurrentPage }) => {
  const pages = [
    { id: 'home', label: 'Home', icon: <Shield className="w-4 h-4" /> },
    { id: 'scan', label: 'Product Scanner', icon: <Scan className="w-4 h-4" /> },
    { id: 'admin', label: 'Recall Dashboard', icon: <AlertTriangle className="w-4 h-4" /> },
    { id: 'sustainability', label: 'Sustainability', icon: <Leaf className="w-4 h-4" /> },
    { id: 'returns', label: 'Returns Checker', icon: <Package className="w-4 h-4" /> }
  ];

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Shield className="h-8 w-8 text-yellow-400" />
              <span className="ml-2 text-xl font-bold">ChainTrust</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {pages.map((page) => (
                  <button
                    key={page.id}
                    onClick={() => setCurrentPage(page.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-2 transition-colors ${
                      currentPage === page.id
                        ? 'bg-blue-700 text-white'
                        : 'text-blue-100 hover:bg-blue-500 hover:text-white'
                    }`}
                  >
                    {page.icon}
                    <span>{page.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Home Page Component
const HomePage = ({ setCurrentPage }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="flex justify-center mb-8">
              <div className="bg-blue-600 p-4 rounded-full">
                <Shield className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Chain<span className="text-blue-600">Trust</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Building Trust, One Product at a Time
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
              Blockchain-powered product provenance and recall system ensuring food safety, sustainability, and transparency from farm to shelf.
            </p>
            <button
              onClick={() => setCurrentPage('scan')}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors transform hover:scale-105 duration-200 flex items-center space-x-2 mx-auto"
            >
              <Scan className="w-5 h-5" />
              <span>Explore Demo</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How ChainTrust Works</h2>
            <p className="text-xl text-gray-600">Transparent, secure, and efficient supply chain management</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Scan className="w-12 h-12 text-blue-600" />,
                title: 'Product Scanning',
                description: 'Scan any product to instantly access its complete journey from source to shelf with blockchain verification.'
              },
              {
                icon: <AlertTriangle className="w-12 h-12 text-yellow-500" />,
                title: 'Instant Recalls',
                description: 'Automated recall system that can trace and notify affected stores within minutes of contamination detection.'
              },
              {
                icon: <Leaf className="w-12 h-12 text-green-500" />,
                title: 'Sustainability Tracking',
                description: 'Monitor ESG metrics, carbon footprint, and sustainability certifications with blockchain-verified data.'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:ype-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: '99.9%', label: 'Accuracy Rate' },
              { value: '2.3sec', label: 'Average Scan Time' },
              { value: '50,000+', label: 'Products Tracked' },
              { value: '1,200', label: 'Stores Connected' }
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Product Scanner Component
const ProductScanner = () => {
  const [productId, setProductId] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [scannedProduct, setScannedProduct] = useState(null);

  const handleScan = () => {
    if (productId.trim()) {
      setIsScanning(true);
      setTimeout(() => {
        const product = mockProducts.find(p => p.id === productId) || mockProducts[0];
        setScannedProduct(product);
        setIsScanning(false);
      }, 2000);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Product Scanner</h1>
          <p className="text-lg text-gray-600">Scan or enter a product ID to trace its journey</p>
        </div>

        {/* Scanner Input */}
        <div className="max-w-md mx-auto mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-3">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={productId}
                  onChange={(e) => setProductId(e.target.value)}
                  placeholder="Enter Product ID (e.g., WM-2024-001)"
                  className="flex-1 text-black border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                onClick={handleScan}
                disabled={isScanning}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center justify-center space-x-2"
              >
                {isScanning ? (
                  <RefreshCw className="w-5 h-5 animate-spin" />
                ) : (
                  <Scan className="w-5 h-5" />
                )}
                <span>{isScanning ? 'Scanning...' : 'Scan Product'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Quick Scan Examples */}
        <div className="text-center mb-12">
          <p className="text-sm text-gray-500 mb-4">Try these example IDs:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {mockProducts.map(product => (
              <button
                key={product.id}
                onClick={() => setProductId(product.id)}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
              >
                {product.id}
              </button>
            ))}
          </div>
        </div>

        {/* Scanning Animation */}
        {isScanning && (
          <div className="text-center mb-12">
            <div className="inline-block animate-pulse">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Scan className="w-10 h-10 text-blue-600 animate-spin" />
              </div>
              <p className="text-lg font-semibold text-gray-700">Scanning blockchain...</p>
            </div>
          </div>
        )}

        {/* Product Details */}
        {scannedProduct && !isScanning && (
          <div className="space-y-6">
            {/* Product Header */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{scannedProduct.name}</h2>
                  <p className="text-gray-600">Batch: {scannedProduct.batch}</p>
                  <p className="text-gray-600">Origin: {scannedProduct.origin}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-green-600 font-semibold">ZK-Proof Verified</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    Manufactured: {formatDate(scannedProduct.manufactured)}
                  </div>
                </div>
              </div>

              {/* Trust and Freshness Scores */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-green-700">Freshness Score</span>
                    <span className="text-2xl font-bold text-green-600">{scannedProduct.freshness}%</span>
                  </div>
                  <div className="w-full bg-green-200 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${scannedProduct.freshness}%` }}
                    ></div>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-blue-700">Trust Rating</span>
                    <span className="text-2xl font-bold text-blue-600">{scannedProduct.trust}%</span>
                  </div>
                  <div className="w-full bg-blue-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${scannedProduct.trust}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Supply Chain Timeline */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Truck className="w-5 h-5 mr-2" />
                Supply Chain Timeline
              </h3>
              <div className="space-y-4">
                {scannedProduct.timeline.map((event, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      {event.status === 'Harvested' && <Factory className="w-4 h-4 text-green-600" />}
                      {event.status === 'Processed' && <Package className="w-4 h-4 text-blue-600" />}
                      {event.status === 'Shipped' && <Truck className="w-4 h-4 text-yellow-600" />}
                      {event.status === 'Delivered' && <Store className="w-4 h-4 text-green-600" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-gray-900">{event.status}</p>
                          <p className="text-sm text-gray-600">{event.location}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500">{formatTime(event.timestamp)}</p>
                          {event.temp && (
                            <div className="flex items-center space-x-1 text-sm text-blue-600">
                              <Thermometer className="w-3 h-3" />
                              <span>{event.temp}°C</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Award className="w-5 h-5 mr-2" />
                Certifications
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {scannedProduct.certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="font-medium text-green-800">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Blockchain Details */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semib�ฟ mb-6 flex items-center">
                <Lock className="w-5 h-5 mr-2" />
                Blockchain Verification
              </h3>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Transaction Hash</p>
                    <p className="text-sm text-gray-800 font-mono break-all">{scannedProduct.blockchain.hash}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Transaction ID</p>
                    <p className="text-sm text-gray-800 font-mono break-all">{scannedProduct.blockchain.txId}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Confirmations</p>
                    <p className="text-sm text-gray-800">{scannedProduct.blockchain.confirmations.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Block Number</p>
                    <p className="text-sm text-gray-800">{scannedProduct.blockchain.blockNumber.toLocaleString()}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-green-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-medium text-green-800">Blockchain Status: Confirmed</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Recall Dashboard Component
const RecallDashboard = () => {
  const [recalls, setRecalls] = useState(mockRecalls);
  const [expandedRecall, setExpandedRecall] = useState(null);

  const issueRecall = (id) => {
    setRecalls(recalls.map(recall => 
      recall.id === id 
        ? { ...recall, status: 'Active Recall', issued: new Date().toISOString().split('T')[0] }
        : recall
    ));
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'High': return 'text-red-600 bg-red-50';
      case 'Medium': return 'text-yellow-600 bg-yellow-50';
      case 'Low': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active Recall': return 'text-red-600 bg-red-50';
      case 'Under Investigation': return 'text-yellow-600 bg-yellow-50';
      case 'Resolved': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Recall Dashboard</h1>
          <p className="text-lg text-gray-600">Monitor and manage product recalls across all stores</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-600">Active Recalls</p>
                <p className="text-2xl font-bold text-red-600">1</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-red-500" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-600">Under Investigation</p>
                <p className="text-2xl font-bold text-yellow-600">1</p>
              </div>
              <Eye className="w-8 h-8 text-yellow-500" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-600">Affected Stores</p>
                <p className="text-2xl font-bold text-blue-600">5</p>
              </div>
              <Store className="w-8 h-8 text-blue-500" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-600">Total Products</p>
                <p className="text-2xl font-bold text-gray-900">431</p>
              </div>
              <Package className="w-8 h-8 text-gray-500" />
            </div>
          </div>
        </div>

        {/* Recalls Table */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Product Recalls</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contamination</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Severity</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Affected</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recalls.map((recall) => (
                  <React.Fragment key={recall.id}>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{recall.product}</div>
                          <div className="text-sm text-gray-500">Batch: {recall.batch}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                          {recall.contamination}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(recall.status)}`}>
                          {recall.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getSeverityColor(recall.severity)}`}>
                          {recall.severity}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {recall.affected} products
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                        <button
                          onClick={() => setExpandedRecall(expandedRecall === recall.id ? null : recall.id)}
                          className="text-blue-600 hover:text-blue-900 flex items-center space-x-1"
                        >
                          <Eye className="w-4 h-4" />
                          <span>View</span>
                          <ChevronDown className={`w-4 h-4 transform transition-transform ${expandedRecall === recall.id ? 'rotate-180' : ''}`} />
                        </button>
                        {recall.status !== 'Active Recall' && (
                          <button
                            onClick={() => issueRecall(recall.id)}
                            className="text-red-600 hover:text-red-900 flex items-center space-x-1"
                          >
                            <AlertTriangle className="w-4 h-4" />
                            <span>Issue Recall</span>
                          </button>
                        )}
                      </td>
                    </tr>
                    {expandedRecall === recall.id && (
                      <tr>
                        <td colSpan="6" className="px-6 py-4 bg-gray-50">
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">Affected Stores</h4>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                                {recall.stores.map((store, index) => (
                                  <div key={index} className="flex items-center space-x-2 p-2 bg-white rounded border">
                                    <Store className="w-4 h-4 text-gray-500" />
                                    <span className="text-sm">{store}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            {recall.issued && (
                              <div>
                                <span className="text-sm text-gray-600">Recall Issued: {recall.issued}</span>
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

// Sustainability View Component
const SustainabilityView = () => {
  const [filters, setFilters] = useState({
    fairTrade: false,
    organic: false,
    local: false,
    sustainable: false
  });

  const [filteredProducts, setFilteredProducts] = useState(sustainabilityProducts);

  useEffect(() => {
    let filtered = sustainabilityProducts;
    
    if (filters.fairTrade) {
      filtered = filtered.filter(p => p.sustainability.fairTrade);
    }
    if (filters.organic) {
      filtered = filtered.filter(p => p.sustainability.organic);
    }
    if (filters.local) {
      filtered = filtered.filter(p => p.sustainability.local);
    }
    
    setFilteredProducts(filtered);
  }, [filters]);

  const toggleFilter = (filterName) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: !prev[filterName]
    }));
  };

  const getESGColor = (score) => {
    if (score >= 90) return 'text-green-600 bg-green-50';
    if (score >= 80) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Sustainability Dashboard</h1>
          <p className="text-lg text-gray-600">Track blockchain-verified sustainability metrics and certifications</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <Filter className="w-5 h-5 text-gray-500" />
            <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {[
              { key: 'fairTrade', label: 'Fair Trade', icon: <Scale className="w-4 h-4" /> },
              { key: 'organic', label: 'Organic', icon: <Leaf className="w-4 h-4" /> },
              { key: 'local', label: 'Local', icon: <MapPin className="w-4 h-4" /> },
              { key: 'sustainable', label: 'Sustainable', icon: <Recycle className="w-4 h-4" /> }
            ].map(filter => (
              <button
                key={filter.key}
                onClick={() => toggleFilter(filter.key)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-colors ${
                  filters[filter.key]
                    ? 'bg-green-50 border-green-200 text-green-700'
                    : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
                }`}
              >
                {filter.icon}
                <span>{filter.label}</span>
                {filters[filter.key] && <CheckCircle className="w-4 h-4" />}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{product.name}</h3>
                    <p className="text-sm text-gray-600">{product.origin}</p>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${getESGColor(product.esgScore)}`}>
                    ESG: {product.esgScore}
                  </div>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.badges.map((badge, index) => (
                    <span key={index} className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Sustainability Metrics */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Carbon Footprint</span>
                    <span className="text-sm font-medium">{product.sustainability.carbon}kg CO₂</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Water Usage</span>
                    <span className="text-sm font-medium">{product.sustainability.water}L</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Waste Generated</span>
                    <span className="text-sm font-medium">{product.sustainability.waste}kg</span>
                  </div>
                </div>

                {/* Blockchain Verification */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-green-600 font-medium">Blockchain Verified</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 mb-4">
              <Filter className="w-12 h-12 mx-auto mb-4" />
              <p className="text-lg">No products match your current filters</p>
              <p className="text-sm">Try adjusting your filter criteria</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Returns Checker Component
const ReturnsChecker = () => {
  const [serialNumber, setSerialNumber] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  const [checkResult, setCheckResult] = useState(null);

  const mockReturnData = {
    'SN-2024-001': {
      status: 'Genuine',
      resellable: true,
      flagged: false,
      returnReason: 'Customer preference',
      condition: 'Excellent',
      blockchain: {
        verified: true,
        originalPurchase: '2024-05-15',
        store: 'Walmart Store #1234'
      }
    },
    'SN-2024-002': {
      status: 'Counterfeit',
      resellable: false,
      flagged: true,
      returnReason: 'Suspected fraud',
      condition: 'Poor',
      blockchain: {
        verified: false,
        originalPurchase: null,
        store: null
      }
    },
    'SN-2024-003': {
      status: 'Genuine',
      resellable: false,
      flagged: true,
      returnReason: 'Damaged',
      condition: 'Poor',
      blockchain: {
        verified: true,
        originalPurchase: '2024-05-10',
        store: 'Walmart Store #5678'
      }
    }
  };

  const handleCheck = () => {
    if (serialNumber.trim()) {
      setIsChecking(true);
      setTimeout(() => {
        const result = mockReturnData[serialNumber] || mockReturnData['SN-2024-001'];
        setCheckResult(result);
        setIsChecking(false);
      }, 1500);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Genuine': return 'text-green-600 bg-green-50';
      case 'Counterfeit': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getConditionColor = (condition) => {
    switch (condition) {
      case 'Excellent': return 'text-green-600 bg-green-50';
      case 'Good': return 'text-yellow-600 bg-yellow-50';
      case 'Poor': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Returns Checker</h1>
          <p className="text-lg text-gray-600">Verify returned products for authenticity and resale eligibility</p>
        </div>

        {/* Serial Number Input */}
        <div className="max-w-md mx-auto mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-3">
                <Package className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={serialNumber}
                  onChange={(e) => setSerialNumber(e.target.value)}
                  placeholder="Enter Product Serial Number"
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                onClick={handleCheck}
                disabled={isChecking}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center justify-center space-x-2"
              >
                {isChecking ? (
                  <RefreshCw className="w-5 h-5 animate-spin" />
                ) : (
                  <Search className="w-5 h-5" />
                )}
                <span>{isChecking ? 'Checking...' : 'Check Product'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Quick Check Examples */}
        <div className="text-center mb-12">
          <p className="text-sm text-gray-500 mb-4">Try these example serial numbers:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {Object.keys(mockReturnData).map(serial => (
              <button
                key={serial}
                onClick={() => setSerialNumber(serial)}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
              >
                {serial}
              </button>
            ))}
          </div>
        </div>

        {/* Checking Animation */}
        {isChecking && (
          <div className="text-center mb-12">
            <div className="inline-block animate-pulse">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Search className="w-10 h-10 text-blue-600 animate-spin" />
              </div>
              <p className="text-lg font-semibold text-gray-700">Verifying product...</p>
            </div>
          </div>
        )}

        {/* Check Results */}
        {checkResult && !isChecking && (
          <div className="space-y-6">
            {/* Status Overview */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-6">Product Verification Results</h2>
              
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(checkResult.status)}`}>
                    {checkResult.status === 'Genuine' ? (
                      <CheckCircle className="w-4 h-4 mr-2" />
                    ) : (
                      <AlertCircle className="w-4 h-4 mr-2" />
                    )}
                    {checkResult.status}
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Authenticity Status</p>
                </div>
                
                <div className="text-center">
                  <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                    checkResult.resellable ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'
                  }`}>
                    {checkResult.resellable ? (
                      <CheckCircle className="w-4 h-4 mr-2" />
                    ) : (
                      <AlertCircle className="w-4 h-4 mr-2" />
                    )}
                    {checkResult.resellable ? 'Resellable' : 'Not Resellable'}
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Resale Status</p>
                </div>
                
                <div className="text-center">
                  <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                    checkResult.flagged ? 'text-red-600 bg-red-50' : 'text-green-600 bg-green-50'
                  }`}>
                    {checkResult.flagged ? (
                      <AlertTriangle className="w-4 h-4 mr-2" />
                    ) : (
                      <CheckCircle className="w-4 h-4 mr-2" />
                    )}
                    {checkResult.flagged ? 'Flagged' : 'Clear'}
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Security Status</p>
                </div>
              </div>

              {/* Product Details */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Return Information</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Return Reason:</span>
                      <span className="text-sm font-medium">{checkResult.returnReason}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Condition:</span>
                      <span className={`text-sm font-medium px-2 py-1 rounded-full ${getConditionColor(checkResult.condition)}`}>
                        {checkResult.condition}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Blockchain Verification</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Blockchain Status:</span>
                      <span className={`text-sm font-medium ${checkResult.blockchain.verified ? 'text-green-600' : 'text-red-600'}`}>
                        {checkResult.blockchain.verified ? 'Verified' : 'Unverified'}
                      </span>
                    </div>
                    {checkResult.blockchain.originalPurchase && (
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Original Purchase:</span>
                        <span className="text-sm font-medium">{checkResult.blockchain.originalPurchase}</span>
                      </div>
                    )}
                    {checkResult.blockchain.store && (
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Original Store:</span>
                        <span className="text-sm font-medium">{checkResult.blockchain.store}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Recommended Actions */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Recommended Actions</h3>
              <div className="space-y-3">
                {checkResult.status === 'Genuine' && checkResult.resellable && (
                  <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-green-800">Approve for Resale</p>
                      <p className="text-sm text-green-600">This product is genuine and in good condition for resale.</p>
                    </div>
                  </div>
                )}
                
                {checkResult.status === 'Counterfeit' && (
                  <div className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg">
                    <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-red-800">Counterfeit Detected</p>
                      <p className="text-sm text-red-600">This product appears to be counterfeit. Do not resell and investigate further.</p>
                    </div>
                  </div>
                )}
                
                {checkResult.flagged && (
                  <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-yellow-800">Requires Manual Review</p>
                      <p className="text-sm text-yellow-600">This product has been flagged for manual inspection.</p>
                    </div>
                  </div>
                )}
                
                {!checkResult.resellable && checkResult.status === 'Genuine' && (
                  <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Package className="w-5 h-5 text-gray-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-800">Dispose or Repair</p>
                      <p className="text-sm text-gray-600">Product is genuine but not suitable for resale due to condition.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'scan':
        return <ProductScanner />;
      case 'admin':
        return <RecallDashboard />;
      case 'sustainability':
        return <SustainabilityView />;
      case 'returns':
        return <ReturnsChecker />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
};

export default App;