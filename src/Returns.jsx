import React, { useState } from 'react';
import { Eye, RefreshCw, CheckCircle, AlertTriangle, Shield, Package, Calendar, MapPin, Thermometer, Award, Clock, DollarSign, User, FileText } from 'lucide-react';

const ReturnsChecker = () => {
  const [returnInput, setReturnInput] = useState('');
  const [returnResult, setReturnResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Mock return data generator
  const generateReturnData = (serial) => {
    const isGenuine = Math.random() > 0.2; // 80% chance of being genuine
    const isResellable = isGenuine && Math.random() > 0.3; // 70% chance if genuine
    const isFlagged = Math.random() > 0.8; // 20% chance of being flagged
    
    const mockProducts = [
      'iPhone 15 Pro Max',
      'Samsung Galaxy S24',
      'Nike Air Max 270',
      'Sony WH-1000XM5',
      'MacBook Pro 14"',
      'Dell XPS 13',
      'Apple Watch Series 9',
      'Organic Cotton T-Shirt',
      'Vitamins Supplement',
      'Bluetooth Speaker'
    ];

    const randomProduct = mockProducts[Math.floor(Math.random() * mockProducts.length)];
    
    return {
      serial: serial,
      genuine: isGenuine,
      resellable: isResellable,
      flagged: isFlagged,
      productName: randomProduct,
      originalPrice: `$${(Math.random() * 500 + 50).toFixed(2)}`,
      purchaseDate: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toLocaleDateString(),
      warranty: isGenuine ? 'Valid' : 'Void',
      condition: isResellable ? ['Excellent', 'Good', 'Fair'][Math.floor(Math.random() * 3)] : 'Poor',
      returnWindow: Math.floor(Math.random() * 30) + 1,
      blockchain: {
        verified: isGenuine,
        hash: isGenuine ? '0x' + Math.random().toString(16).substr(2, 40) : 'N/A',
        timestamp: new Date().toISOString()
      },
      previousReturns: Math.floor(Math.random() * 3),
      fraudScore: Math.floor(Math.random() * 100),
      manufacturerVerified: isGenuine,
      retailerNotes: isFlagged ? 'Requires manual review' : 'Standard return process',
      estimatedRefund: isResellable ? `$${(Math.random() * 300 + 20).toFixed(2)}` : '$0.00',
      processingTime: isGenuine && isResellable && !isFlagged ? 'Instant' : '24-48 hours',
      returnReason: ['Defective', 'Not as described', 'Changed mind', 'Wrong size', 'Damaged'][Math.floor(Math.random() * 5)]
    };
  };

  const handleReturn = async () => {
    if (!returnInput.trim()) return;
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const mockReturnData = generateReturnData(returnInput);
      setReturnResult(mockReturnData);
      setIsLoading(false);
    }, 2000);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'genuine':
        return 'border-green-200 bg-green-50 text-green-800';
      case 'fake':
        return 'border-red-200 bg-red-50 text-red-800';
      case 'flagged':
        return 'border-yellow-200 bg-yellow-50 text-yellow-800';
      default:
        return 'border-gray-200 bg-gray-50 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Package className="w-12 h-12 text-blue-600 mr-4" />
            <h1 className="text-5xl font-bold text-gray-800">Returns Checker</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Verify product authenticity, return eligibility, and process returns with blockchain-powered verification
          </p>
        </div>

        {/* Input Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Enter Product Information</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Serial Number / Barcode
                </label>
                <div className="flex items-center space-x-4">
                  <input
                    type="text"
                    placeholder="Enter serial number (e.g., SN123456789)"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    value={returnInput}
                    onChange={(e) => setReturnInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleReturn()}
                  />
                  <button
                    onClick={handleReturn}
                    disabled={isLoading || !returnInput.trim()}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 shadow-lg hover:shadow-xl"
                  >
                    {isLoading ? (
                      <>
                        <RefreshCw className="w-5 h-5 animate-spin" />
                        <span>Verifying...</span>
                      </>
                    ) : (
                      <>
                        <Eye className="w-5 h-5" />
                        <span>Check Product</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-sm text-gray-500">
                  Try example serials: <span className="font-mono bg-gray-100 px-2 py-1 rounded">SN123456789</span>, 
                  <span className="font-mono bg-gray-100 px-2 py-1 rounded ml-2">RET987654321</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <RefreshCw className="w-8 h-8 text-blue-600 animate-spin" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Verifying Product...</h3>
            <p className="text-gray-600">Checking blockchain records, authenticity, and return eligibility</p>
          </div>
        )}

        {/* Results Section */}
        {returnResult && !isLoading && (
          <div className="space-y-8">
            {/* Main Status Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Authenticity Status */}
              <div className={`p-6 rounded-2xl border-2 transition-all hover:shadow-lg ${
                returnResult.genuine 
                  ? 'border-green-200 bg-green-50' 
                  : 'border-red-200 bg-red-50'
              }`}>
                <div className="flex items-center space-x-3 mb-4">
                  {returnResult.genuine ? (
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  ) : (
                    <AlertTriangle className="w-10 h-10 text-red-600" />
                  )}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Authenticity</h3>
                    <p className="text-sm text-gray-600">Blockchain Verified</p>
                  </div>
                </div>
                <p className={`text-2xl font-bold mb-2 ${
                  returnResult.genuine ? 'text-green-700' : 'text-red-700'
                }`}>
                  {returnResult.genuine ? 'Genuine Product' : 'Potentially Counterfeit'}
                </p>
                <p className="text-sm text-gray-600">
                  {returnResult.genuine 
                    ? 'Verified through blockchain records' 
                    : 'Failed blockchain verification'
                  }
                </p>
              </div>

              {/* Return Eligibility */}
              <div className={`p-6 rounded-2xl border-2 transition-all hover:shadow-lg ${
                returnResult.resellable 
                  ? 'border-green-200 bg-green-50' 
                  : 'border-yellow-200 bg-yellow-50'
              }`}>
                <div className="flex items-center space-x-3 mb-4">
                  {returnResult.resellable ? (
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  ) : (
                    <AlertTriangle className="w-10 h-10 text-yellow-600" />
                  )}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Return Status</h3>
                    <p className="text-sm text-gray-600">Resale Eligibility</p>
                  </div>
                </div>
                <p className={`text-2xl font-bold mb-2 ${
                  returnResult.resellable ? 'text-green-700' : 'text-yellow-700'
                }`}>
                  {returnResult.resellable ? 'Returnable' : 'Not Returnable'}
                </p>
                <p className="text-sm text-gray-600">
                  Condition: {returnResult.condition}
                </p>
              </div>

              {/* Security Status */}
              <div className={`p-6 rounded-2xl border-2 transition-all hover:shadow-lg ${
                returnResult.flagged 
                  ? 'border-red-200 bg-red-50' 
                  : 'border-green-200 bg-green-50'
              }`}>
                <div className="flex items-center space-x-3 mb-4">
                  {returnResult.flagged ? (
                    <AlertTriangle className="w-10 h-10 text-red-600" />
                  ) : (
                    <Shield className="w-10 h-10 text-green-600" />
                  )}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Security Check</h3>
                    <p className="text-sm text-gray-600">Fraud Detection</p>
                  </div>
                </div>
                <p className={`text-2xl font-bold mb-2 ${
                  returnResult.flagged ? 'text-red-700' : 'text-green-700'
                }`}>
                  {returnResult.flagged ? 'Flagged' : 'Clean'}
                </p>
                <p className="text-sm text-gray-600">
                  Fraud Score: {returnResult.fraudScore}/100
                </p>
              </div>
            </div>

            {/* Detailed Information */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Product Details */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                  <Package className="w-6 h-6 mr-2 text-blue-600" />
                  Product Information
                </h3>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-500">Product Name</label>
                      <p className="text-lg font-semibold text-gray-800">{returnResult.productName}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Serial Number</label>
                      <p className="text-lg font-semibold text-gray-800 font-mono">{returnResult.serial}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-500">Original Price</label>
                      <p className="text-lg font-semibold text-gray-800">{returnResult.originalPrice}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Purchase Date</label>
                      <p className="text-lg font-semibold text-gray-800">{returnResult.purchaseDate}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-500">Warranty Status</label>
                      <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${
                        returnResult.warranty === 'Valid' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {returnResult.warranty}
                      </span>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Return Window</label>
                      <p className="text-lg font-semibold text-gray-800">{returnResult.returnWindow} days remaining</p>
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-gray-500">Return Reason</label>
                    <p className="text-lg font-semibold text-gray-800">{returnResult.returnReason}</p>
                  </div>
                </div>
              </div>

              {/* Blockchain & Processing Info */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                  <Shield className="w-6 h-6 mr-2 text-blue-600" />
                  Verification Details
                </h3>
                
                <div className="space-y-6">
                  {/* Blockchain Info */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-3">Blockchain Verification</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Status:</span>
                        <span className={`text-sm font-medium ${
                          returnResult.blockchain.verified ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {returnResult.blockchain.verified ? 'Verified ✓' : 'Failed ✗'}
                        </span>
                      </div>
                      {returnResult.blockchain.verified && (
                        <div>
                          <span className="text-sm text-gray-600">Hash:</span>
                          <p className="text-xs font-mono text-gray-800 break-all">{returnResult.blockchain.hash}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Processing Information */}
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Processing Information</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Estimated Refund:</span>
                        <span className="text-lg font-bold text-green-600">{returnResult.estimatedRefund}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Processing Time:</span>
                        <span className="text-sm font-medium text-gray-800">{returnResult.processingTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Previous Returns:</span>
                        <span className="text-sm font-medium text-gray-800">{returnResult.previousReturns}</span>
                      </div>
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">Retailer Notes</h4>
                    <p className="text-sm text-blue-700">{returnResult.retailerNotes}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Return Actions</h3>
              
              <div className="flex flex-wrap gap-4 justify-center">
                {returnResult.genuine && returnResult.resellable && !returnResult.flagged && (
                  <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>Approve Return</span>
                  </button>
                )}
                
                {returnResult.flagged && (
                  <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl flex items-center space-x-2">
                    <Eye className="w-5 h-5" />
                    <span>Manual Review</span>
                  </button>
                )}
                
                {!returnResult.genuine && (
                  <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl flex items-center space-x-2">
                    <AlertTriangle className="w-5 h-5" />
                    <span>Reject Return</span>
                  </button>
                )}
                
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl flex items-center space-x-2">
                  <FileText className="w-5 h-5" />
                  <span>Generate Report</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* No Results State */}
        {returnResult === null && returnInput && !isLoading && (
          <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
            <AlertTriangle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No Results Found</h3>
            <p className="text-gray-500 mb-4">Could not find product information for this serial number.</p>
            <button
              onClick={() => {
                setReturnInput('');
                setReturnResult(null);
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReturnsChecker;