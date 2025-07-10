import React from 'react';
import { Thermometer, Droplets, Award, MapPin, CheckCircle } from 'lucide-react';

const DigitalTwinDetails = ({ product, onClose, darkMode }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className={`max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Digital Twin: {product.name}</h2>
            <button onClick={onClose} className={`p-2 rounded-lg hover:bg-gray-100 ${darkMode ? 'text-white hover:bg-gray-700' : 'text-gray-600'}`}>
              ✕
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

          <div className="border-t pt-4">
            <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Blockchain Verification</h3>
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <div className="flex items-center justify-between">
                <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Blockchain Hash:</span>
                <span className={`font-mono text-sm ${darkMode ? 'text-white' : 'text-gray-800'}`}>{product.blockchainHash}</span>
              </div>
              <div className="flex items-center mt-2">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Verified on blockchain</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DigitalTwinDetails;
