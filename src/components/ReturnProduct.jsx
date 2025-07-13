import React, { useState } from 'react';
import { X, Search, Package, Shield, AlertTriangle, CheckCircle, Clock, MapPin, Thermometer, Droplets, RefreshCw, FileText, Camera } from 'lucide-react';

const ReturnProduct = ({ onClose, currentUser, products, setProducts, darkMode }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [returnReason, setReturnReason] = useState('');
  const [returnDescription, setReturnDescription] = useState('');
  const [returnImages, setReturnImages] = useState([]);
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [returnStep, setReturnStep] = useState(1); // 1: Search, 2: Verify, 3: Details, 4: Confirmation

  const returnReasons = [
    'Damaged during shipping',
    'Not as described',
    'Quality issues',
    'Wrong item received',
    'Expired product',
    'Defective item',
    'Other'
  ];

  const filteredProducts = products.filter(product =>
    (product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     product.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
     product.uniqueId.toLowerCase().includes(searchTerm.toLowerCase())) &&
    product.status === 'At Store' // Only allow returns for delivered items
  );

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setReturnStep(2);
  };

  const handleVerifyAuthenticity = async () => {
    setIsVerifying(true);
    
    // Simulate authentication verification process
    setTimeout(() => {
      const isAuthentic = Math.random() > 0.1; // 90% chance of being authentic
      
      setVerificationResult({
        isAuthentic,
        verificationId: `VER-${Date.now()}`,
        timestamp: new Date(),
        digitalTwinMatch: isAuthentic,
        blockchainVerified: isAuthentic,
        temperatureHistory: isAuthentic,
        locationHistory: isAuthentic,
        confidenceScore: isAuthentic ? Math.floor(Math.random() * 10) + 90 : Math.floor(Math.random() * 30) + 20
      });
      
      setIsVerifying(false);
      
      if (isAuthentic) {
        setReturnStep(3);
      }
    }, 2000);
  };

  const handleSubmitReturn = () => {
    if (!returnReason || !returnDescription) {
      alert('Please fill in all required fields');
      return;
    }

    const returnId = `RET-${Date.now()}`;
    const currentTime = new Date();

    // Create return record
    const returnRecord = {
      id: returnId,
      productId: selectedProduct.id,
      productName: selectedProduct.name,
      productSku: selectedProduct.sku,
      uniqueId: selectedProduct.uniqueId,
      customerId: currentUser.id,
      customerName: currentUser.name,
      reason: returnReason,
      description: returnDescription,
      images: returnImages,
      timestamp: currentTime,
      status: 'Pending Review',
      verificationResult,
      estimatedProcessingTime: '3-5 business days'
    };

    // Update product history with return information
    const updatedProducts = products.map(product => {
      if (product.id === selectedProduct.id) {
        return {
          ...product,
          history: [
            ...product.history,
            {
              timestamp: currentTime.toISOString(),
              event: 'Return Initiated',
              location: 'Customer Location',
              details: `Return initiated by ${currentUser.name}. Reason: ${returnReason}`,
              returnId: returnId,
              status: 'Returned'
            }
          ],
          status: 'Return Pending',
          returnInfo: returnRecord
        };
      }
      return product;
    });

    setProducts(updatedProducts);
    setShowConfirmation(true);
    setReturnStep(4);
  };

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    setReturnImages([...returnImages, ...files.map(file => ({
      name: file.name,
      url: URL.createObjectURL(file),
      size: file.size
    }))]);
  };

  const removeImage = (index) => {
    setReturnImages(returnImages.filter((_, i) => i !== index));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className={`w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className={`sticky top-0 flex items-center justify-between p-6 border-b ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'}`}>
          <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Return Product</h2>
          <button onClick={onClose} className={`p-2 rounded-lg hover:bg-gray-100 ${darkMode ? 'hover:bg-gray-700 text-gray-400' : 'text-gray-500'}`}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    step <= returnStep 
                      ? 'bg-blue-600 text-white' 
                      : darkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-200 text-gray-500'
                  }`}>
                    {step}
                  </div>
                  {step < 4 && (
                    <div className={`w-16 h-0.5 mx-2 ${
                      step < returnStep ? 'bg-blue-600' : darkMode ? 'bg-gray-700' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-sm">
              <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Search Product</span>
              <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Verify Authenticity</span>
              <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Return Details</span>
              <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Confirmation</span>
            </div>
          </div>

          {/* Step 1: Search Product */}
          {returnStep === 1 && (
            <div className="space-y-6">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by product name, SKU, or unique ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'}`}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-96 overflow-y-auto">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 hover:shadow-md ${
                      darkMode ? 'border-gray-600 bg-gray-700 hover:bg-gray-600' : 'border-gray-200 bg-gray-50 hover:bg-gray-100'
                    }`}
                    onClick={() => handleProductSelect(product)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{product.name}</h3>
                      <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                        {product.status}
                      </div>
                    </div>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>SKU: {product.sku}</p>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Unique ID: {product.uniqueId}</p>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Category: {product.category}</p>
                  </div>
                ))}
              </div>

              {searchTerm && filteredProducts.length === 0 && (
                <div className={`text-center py-8 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  <Package className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>No eligible products found for return</p>
                  <p className="text-sm mt-2">Only delivered products can be returned</p>
                </div>
              )}
            </div>
          )}

          {/* Step 2: Verify Authenticity */}
          {returnStep === 2 && selectedProduct && (
            <div className="space-y-6">
              <div className={`p-6 rounded-lg border ${darkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-200 bg-gray-50'}`}>
                <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  Product Details
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Name:</p>
                    <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>{selectedProduct.name}</p>
                  </div>
                  <div>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>SKU:</p>
                    <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>{selectedProduct.sku}</p>
                  </div>
                  <div>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Unique ID:</p>
                    <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>{selectedProduct.uniqueId}</p>
                  </div>
                  <div>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Category:</p>
                    <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>{selectedProduct.category}</p>
                  </div>
                </div>
              </div>

              {isVerifying && (
                <div className={`p-6 rounded-lg border text-center ${darkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-200 bg-gray-50'}`}>
                  <RefreshCw className="w-12 h-12 mx-auto mb-4 text-blue-600 animate-spin" />
                  <p className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    Verifying Authenticity...
                  </p>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Checking digital twin, blockchain records, and sensor data...
                  </p>
                </div>
              )}

              {verificationResult && (
                <div className={`p-6 rounded-lg border ${
                  verificationResult.isAuthentic 
                    ? 'border-green-500 bg-green-50' 
                    : 'border-red-500 bg-red-50'
                }`}>
                  <div className="flex items-center mb-4">
                    {verificationResult.isAuthentic ? (
                      <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
                    ) : (
                      <AlertTriangle className="w-8 h-8 text-red-600 mr-3" />
                    )}
                    <div>
                      <h3 className={`text-lg font-semibold ${
                        verificationResult.isAuthentic ? 'text-green-800' : 'text-red-800'
                      }`}>
                        {verificationResult.isAuthentic ? 'Authentic Product Verified' : 'Authentication Failed'}
                      </h3>
                      <p className={`text-sm ${
                        verificationResult.isAuthentic ? 'text-green-600' : 'text-red-600'
                      }`}>
                        Confidence Score: {verificationResult.confidenceScore}%
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center">
                      <Shield className={`w-5 h-5 mr-2 ${verificationResult.digitalTwinMatch ? 'text-green-600' : 'text-red-600'}`} />
                      <span className={`text-sm ${verificationResult.digitalTwinMatch ? 'text-green-700' : 'text-red-700'}`}>
                        Digital Twin Match
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Package className={`w-5 h-5 mr-2 ${verificationResult.blockchainVerified ? 'text-green-600' : 'text-red-600'}`} />
                      <span className={`text-sm ${verificationResult.blockchainVerified ? 'text-green-700' : 'text-red-700'}`}>
                        Blockchain Verified
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Thermometer className={`w-5 h-5 mr-2 ${verificationResult.temperatureHistory ? 'text-green-600' : 'text-red-600'}`} />
                      <span className={`text-sm ${verificationResult.temperatureHistory ? 'text-green-700' : 'text-red-700'}`}>
                        Temperature History
                      </span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className={`w-5 h-5 mr-2 ${verificationResult.locationHistory ? 'text-green-600' : 'text-red-600'}`} />
                      <span className={`text-sm ${verificationResult.locationHistory ? 'text-green-700' : 'text-red-700'}`}>
                        Location History
                      </span>
                    </div>
                  </div>

                  <p className={`text-xs ${verificationResult.isAuthentic ? 'text-green-600' : 'text-red-600'}`}>
                    Verification ID: {verificationResult.verificationId}
                  </p>
                </div>
              )}

              {!isVerifying && !verificationResult && (
                <button
                  onClick={handleVerifyAuthenticity}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <Shield className="w-5 h-5 mr-2" />
                  Verify Product Authenticity
                </button>
              )}

              {verificationResult && !verificationResult.isAuthentic && (
                <div className={`p-4 rounded-lg border ${darkMode ? 'border-red-600 bg-red-900/20' : 'border-red-200 bg-red-50'}`}>
                  <p className={`text-sm ${darkMode ? 'text-red-300' : 'text-red-700'}`}>
                    This product could not be authenticated. Returns are only accepted for verified authentic products.
                    Please contact customer support for assistance.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Step 3: Return Details */}
          {returnStep === 3 && verificationResult?.isAuthentic && (
            <div className="space-y-6">
              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-700'}`}>
                  Return Reason *
                </label>
                <select
                  value={returnReason}
                  onChange={(e) => setReturnReason(e.target.value)}
                  className={`w-full p-3 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'}`}
                >
                  <option value="">Select a reason...</option>
                  {returnReasons.map((reason) => (
                    <option key={reason} value={reason}>{reason}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-700'}`}>
                  Description *
                </label>
                <textarea
                  value={returnDescription}
                  onChange={(e) => setReturnDescription(e.target.value)}
                  placeholder="Please provide detailed information about the issue..."
                  rows={4}
                  className={`w-full p-3 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'}`}
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-700'}`}>
                  Upload Images (Optional)
                </label>
                <div className={`border-2 border-dashed rounded-lg p-6 text-center ${darkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-300 bg-gray-50'}`}>
                  <Camera className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Upload images of the product issue
                  </p>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <label
                    htmlFor="image-upload"
                    className="mt-2 inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 cursor-pointer"
                  >
                    Choose Images
                  </label>
                </div>

                {returnImages.length > 0 && (
                  <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
                    {returnImages.map((image, index) => (
                      <div key={index} className="relative">
                        <img
                          src={image.url}
                          alt={image.name}
                          className="w-full h-24 object-cover rounded-lg"
                        />
                        <button
                          onClick={() => removeImage(index)}
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={handleSubmitReturn}
                disabled={!returnReason || !returnDescription}
                className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
              >
                <FileText className="w-5 h-5 mr-2" />
                Submit Return Request
              </button>
            </div>
          )}

          {/* Step 4: Confirmation */}
          {returnStep === 4 && showConfirmation && (
            <div className="text-center space-y-6">
              <div className="bg-green-100 p-6 rounded-lg">
                <CheckCircle className="w-16 h-16 mx-auto text-green-600 mb-4" />
                <h3 className="text-xl font-semibold text-green-800 mb-2">Return Request Submitted Successfully!</h3>
                <p className="text-green-700">
                  Your return request has been submitted and is being processed.
                </p>
              </div>

              <div className={`p-6 rounded-lg border ${darkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-200 bg-gray-50'}`}>
                <h4 className={`font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Return Summary</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Product:</span>
                    <span className={darkMode ? 'text-white' : 'text-gray-800'}>{selectedProduct.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Return ID:</span>
                    <span className={darkMode ? 'text-white' : 'text-gray-800'}>{selectedProduct.returnInfo?.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Reason:</span>
                    <span className={darkMode ? 'text-white' : 'text-gray-800'}>{returnReason}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Status:</span>
                    <span className="text-yellow-600">Pending Review</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Processing Time:</span>
                    <span className={darkMode ? 'text-white' : 'text-gray-800'}>3-5 business days</span>
                  </div>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReturnProduct;