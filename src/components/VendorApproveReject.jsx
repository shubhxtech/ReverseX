import React, { useState } from 'react';
import { Clock, CheckCircle, AlertTriangle, BarChart3, Search, Shield, Thermometer, Droplets, Award, MapPin, X, DollarSign, Loader2 } from 'lucide-react';

const VendorApproveReject = ({ product, onClose, darkMode, onApprove, onReject }) => {
  const [processing, setProcessing] = useState(false);
  const [approved, setApproved] = useState(false);
  const [rejected, setRejected] = useState(false);
  const [transactionHash, setTransactionHash] = useState('');
  const [rejectionReason, setRejectionReason] = useState('');
  const [showRejectForm, setShowRejectForm] = useState(false);
  const [processingStep, setProcessingStep] = useState('');

  const generateTransactionHash = () => {
    return '0x' + Math.random().toString(16).substr(2, 64);
  };

  const handleApprove = async () => {
    setProcessing(true);
    setProcessingStep('Initializing smart contract...');
    
    // Simulate processing steps
    await new Promise(resolve => setTimeout(resolve, 800));
    setProcessingStep('Verifying product quality...');
    
    await new Promise(resolve => setTimeout(resolve, 700));
    setProcessingStep('Processing payment...');
    
    await new Promise(resolve => setTimeout(resolve, 500));
    setProcessingStep('Finalizing transaction...');
    
    await new Promise(resolve => setTimeout(resolve, 600));
    
    const txHash = generateTransactionHash();
    setTransactionHash(txHash);
    setApproved(true);
    setProcessing(false);
    
    // Call parent handler after a brief delay to show success
    setTimeout(() => {
      onApprove(product.id, txHash);
    }, 3000);
  };

  const handleReject = async () => {
    if (!rejectionReason.trim()) {
      alert('Please provide a reason for rejection');
      return;
    }
    
    setProcessing(true);
    setProcessingStep('Initializing rejection process...');
    
    await new Promise(resolve => setTimeout(resolve, 600));
    setProcessingStep('Recording rejection reason...');
    
    await new Promise(resolve => setTimeout(resolve, 500));
    setProcessingStep('Notifying supplier...');
    
    await new Promise(resolve => setTimeout(resolve, 400));
    
    const txHash = generateTransactionHash();
    setTransactionHash(txHash);
    setRejected(true);
    setProcessing(false);
    
    // Call parent handler after a brief delay to show result
    setTimeout(() => {
      onReject(product.id, rejectionReason, txHash);
    }, 2000);
  };

  // Processing Overlay Component
  const ProcessingOverlay = () => (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[60]">
      <div className={`bg-white ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl`}>
        <div className="text-center">
          <div className="relative mb-6">
            <div className="w-20 h-20 mx-auto rounded-full bg-blue-100 flex items-center justify-center">
              <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
              <Shield className="w-4 h-4 text-white" />
            </div>
          </div>
          
          <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Processing Transaction
          </h3>
          
          <p className={`text-sm mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {processingStep}
          </p>
          
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                 style={{ width: processing ? '75%' : '100%' }}>
            </div>
          </div>
          
          <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Please wait while we process your request on the blockchain...
          </p>
        </div>
      </div>
    </div>
  );

  // Success Modal Component
  const SuccessModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[60]">
      <div className={`bg-white ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl`}>
        <div className="text-center">
          <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          
          <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Payment Complete!
          </h3>
          
          <div className="space-y-3 mb-6">
            <div className="flex items-center justify-center text-green-600">
              <DollarSign className="w-5 h-5 mr-2" />
              <span className="font-medium">$2,500.00 sent to {product.supplier}</span>
            </div>
            
            <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <div className="flex items-center justify-center mb-2">
                <Shield className="w-4 h-4 mr-2" />
                <span>Transaction verified on blockchain</span>
              </div>
              <div className="bg-gray-100 p-2 rounded font-mono text-xs break-all">
                {transactionHash}
              </div>
            </div>
          </div>
          
          <div className="flex space-x-3">
            <button
              onClick={onClose}
              className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 font-medium transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Rejection Modal Component
  const RejectionModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[60]">
      <div className={`bg-white ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl`}>
        <div className="text-center">
          <div className="w-20 h-20 mx-auto rounded-full bg-red-100 flex items-center justify-center mb-6">
            <X className="w-10 h-10 text-red-600" />
          </div>
          
          <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Product Rejected
          </h3>
          
          <div className="space-y-3 mb-6">
            <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Product has been returned to supplier
            </p>
            
            <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <div className="flex items-center justify-center mb-2">
                <Shield className="w-4 h-4 mr-2" />
                <span>Transaction recorded on blockchain</span>
              </div>
              <div className="bg-gray-100 p-2 rounded font-mono text-xs break-all">
                {transactionHash}
              </div>
            </div>
            
            <div className={`text-left p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <p className={`text-sm font-medium mb-1 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Rejection Reason:
              </p>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {rejectionReason}
              </p>
            </div>
          </div>
          
          <div className="flex space-x-3">
            <button
              onClick={onClose}
              className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 font-medium transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className={`max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Quality Control: {product.name}
              </h2>
              <button onClick={onClose} className={`p-2 rounded-lg hover:bg-gray-100 ${darkMode ? 'text-white hover:bg-gray-700' : 'text-gray-600'}`}>
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Product Information</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>SKU:</span>
                    <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>{product.sku}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Batch:</span>
                    <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>{product.batch}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Category:</span>
                    <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>{product.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Supplier:</span>
                    <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>{product.supplier}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Quality Score:</span>
                    <span className={`font-medium ${product.quality >= 95 ? 'text-green-600' : product.quality >= 85 ? 'text-yellow-600' : 'text-red-600'}`}>
                      {product.quality}%
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Current Status</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Status:</span>
                    <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>{product.status}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Location:</span>
                    <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>{product.location}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Temperature:</span>
                    <div className="flex items-center">
                      <Thermometer className="w-4 h-4 mr-1 text-blue-500" />
                      <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>{product.temperature}°C</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Humidity:</span>
                    <div className="flex items-center">
                      <Droplets className="w-4 h-4 mr-1 text-blue-500" />
                      <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>{product.humidity}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Certifications</h3>
              <div className="flex flex-wrap gap-2">
                {product.certifications.map((cert, index) => (
                  <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm flex items-center">
                    <Award className="w-4 h-4 mr-1" />
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Supply Chain Journey</h3>
              <div className="space-y-4">
                {product.journey.map((step, index) => (
                  <div key={index} className={`flex items-start space-x-4 p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium ${index === product.journey.length - 1 ? 'bg-blue-600' : 'bg-gray-400'}`}>
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>{step.stage}</h4>
                          <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            <MapPin className="w-4 h-4 inline mr-1" />
                            {step.location}
                          </p>
                        </div>
                        <div className={`text-right text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          <p>{new Date(step.timestamp).toLocaleDateString()}</p>
                          <p>{new Date(step.timestamp).toLocaleTimeString()}</p>
                        </div>
                      </div>
                      <div className="flex space-x-4 mt-2">
                        <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          <Thermometer className="w-4 h-4 inline mr-1" />
                          {step.temp}°C
                        </span>
                        <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          <Droplets className="w-4 h-4 inline mr-1" />
                          {step.humidity}%
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Blockchain Verification</h3>
              <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Blockchain Hash:</span>
                  <span className={`font-mono text-sm ${darkMode ? 'text-white' : 'text-gray-800'}`}>{product.blockchainHash}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Verified on blockchain</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            {!approved && !rejected && !processing && (
              <div className="border-t pt-6">
                <div className="flex space-x-4">
                  <button
                    onClick={handleApprove}
                    className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 font-medium transition-colors"
                  >
                    Approve Product
                  </button>
                  <button
                    onClick={() => setShowRejectForm(true)}
                    className="flex-1 bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 font-medium transition-colors"
                  >
                    Reject Product
                  </button>
                </div>
              </div>
            )}

            {/* Rejection Form */}
            {showRejectForm && !processing && !rejected && (
              <div className="border-t pt-6">
                <h4 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  Rejection Reason
                </h4>
                <textarea
                  value={rejectionReason}
                  onChange={(e) => setRejectionReason(e.target.value)}
                  placeholder="Please provide a detailed reason for rejection..."
                  className={`w-full p-3 border rounded-lg mb-4 ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'}`}
                  rows="4"
                />
                <div className="flex space-x-4">
                  <button
                    onClick={handleReject}
                    className="flex-1 bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 font-medium transition-colors"
                  >
                    Confirm Rejection
                  </button>
                  <button
                    onClick={() => setShowRejectForm(false)}
                    className={`flex-1 py-3 px-6 rounded-lg font-medium transition-colors ${darkMode ? 'bg-gray-600 text-white hover:bg-gray-500' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Overlay Modals */}
      {processing && <ProcessingOverlay />}
      {approved && !processing && <SuccessModal />}
      {rejected && !processing && <RejectionModal />}
    </>
  );
};



export default VendorApproveReject