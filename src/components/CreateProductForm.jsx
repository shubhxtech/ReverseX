import React, { useState } from 'react';

const CreateProductForm = ({ onClose, onSave, currentUser, products, darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    sku: '',
    batch: '',
    category: '',
    supplier: currentUser.name,
    certifications: [],
    initialTemp: '',
    initialHumidity: '',
    location: ''
  });

  const [showNFTPopup, setShowNFTPopup] = useState(false);
  const [isMinting, setIsMinting] = useState(false);
  const [nftId, setNftId] = useState('');

  const generateNFTId = () => {
    // Generate a random valid NFT ID
    const randomId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    return `0x${randomId}`;
  };

  const handleSubmit = async () => {
    // Basic validation
    if (!formData.name || !formData.sku || !formData.batch || !formData.category || 
        !formData.initialTemp || !formData.initialHumidity || !formData.location) {
      alert('Please fill in all required fields');
      return;
    }
    
    // Show minting popup
    setShowNFTPopup(true);
    setIsMinting(true);
    
    // Simulate minting delay
    setTimeout(() => {
      const generatedNftId = generateNFTId();
      setNftId(generatedNftId);
      setIsMinting(false);
      
      // Create the product
      const newProduct = {
        id: `DT${String(products.length + 1).padStart(3, '0')}`,
        ...formData,
        quality: Math.floor(Math.random() * 20) + 80,
        status: 'Created',
        temperature: parseFloat(formData.initialTemp),
        humidity: parseFloat(formData.initialHumidity),
        blockchainHash: `0x${Math.random().toString(16).substr(2, 20)}`,
        nftId: generatedNftId,
        created: new Date().toISOString(),
        journey: [{
          stage: 'Created',
          location: formData.location,
          timestamp: new Date().toISOString(),
          temp: parseFloat(formData.initialTemp),
          humidity: parseFloat(formData.initialHumidity)
        }],
        image: '/api/placeholder/300/200'
      };
      
      onSave(newProduct);
    }, 2500); // 2.5 second delay
  };

  const handleNFTPopupClose = () => {
    setShowNFTPopup(false);
    setIsMinting(false);
    setNftId('');
    onClose();
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className={`max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="p-6">
            <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Create Digital Twin</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-white' : 'text-gray-700'}`}>Product Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className={`w-full p-3 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'}`}
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-white' : 'text-gray-700'}`}>SKU</label>
                  <input
                    type="text"
                    required
                    value={formData.sku}
                    onChange={(e) => setFormData({...formData, sku: e.target.value})}
                    className={`w-full p-3 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'}`}
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-white' : 'text-gray-700'}`}>Batch Number</label>
                  <input
                    type="text"
                    required
                    value={formData.batch}
                    onChange={(e) => setFormData({...formData, batch: e.target.value})}
                    className={`w-full p-3 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'}`}
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-white' : 'text-gray-700'}`}>Category</label>
                  <select
                    required
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    className={`w-full p-3 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'}`}
                  >
                    <option value="">Select Category</option>
                    <option value="Produce">Produce</option>
                    <option value="Meat">Meat</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Packaged">Packaged</option>
                    <option value="Frozen">Frozen</option>
                  </select>
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-white' : 'text-gray-700'}`}>Initial Temperature (°C)</label>
                  <input
                    type="number"
                    step="0.1"
                    required
                    value={formData.initialTemp}
                    onChange={(e) => setFormData({...formData, initialTemp: e.target.value})}
                    className={`w-full p-3 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'}`}
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-white' : 'text-gray-700'}`}>Initial Humidity (%)</label>
                  <input
                    type="number"
                    step="0.1"
                    required
                    value={formData.initialHumidity}
                    onChange={(e) => setFormData({...formData, initialHumidity: e.target.value})}
                    className={`w-full p-3 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'}`}
                  />
                </div>
              </div>
              <div>
                <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-white' : 'text-gray-700'}`}>Current Location</label>
                <input
                  type="text"
                  required
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  className={`w-full p-3 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'}`}
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-white' : 'text-gray-700'}`}>Certifications</label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {['USDA Organic', 'FDA Approved', 'ISO 22000', 'HACCP', 'Free Range Certified'].map((cert) => (
                    <label key={cert} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.certifications.includes(cert)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFormData({...formData, certifications: [...formData.certifications, cert]});
                          } else {
                            setFormData({...formData, certifications: formData.certifications.filter(c => c !== cert)});
                          }
                        }}
                        className="mr-2"
                      />
                      <span className={`text-sm ${darkMode ? 'text-white' : 'text-gray-700'}`}>{cert}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="flex justify-end space-x-4 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Create Digital Twin
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NFT Minting Popup */}
      {showNFTPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-60">
          <div className={`max-w-md w-full rounded-xl shadow-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} p-6`}>
            {isMinting ? (
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  Minting Aptos NFT
                </h3>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Please wait while your digital twin is being minted on the Aptos blockchain...
                </p>
              </div>
            ) : (
              <div className="text-center">
                <div className="bg-green-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  NFT Created Successfully!
                </h3>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                  Your digital twin has been minted as an NFT on the Aptos blockchain.
                </p>
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} mb-4`}>
                  <p className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-1`}>NFT ID:</p>
                  <p className={`text-sm font-mono ${darkMode ? 'text-white' : 'text-gray-800'} break-all`}>
                    {nftId}
                  </p>
                </div>
                <button
                  onClick={handleNFTPopupClose}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 w-full"
                >
                  Continue
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CreateProductForm;