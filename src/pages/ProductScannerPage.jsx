import React, { useState } from 'react';
import {  AnimatePresence } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { FaCheckCircle, FaHashtag, FaFileContract } from 'react-icons/fa';

const mockProductData = {
  name: 'Organic Strawberries',
  batchNumber: 'OSB-2025-Q3-1A',
  manufactured: '2025-07-01',
  timeline: [
    { stage: 'Farm', location: 'Salinas, CA', timestamp: '2025-07-01 08:00 UTC' },
    { stage: 'Distribution Center', location: 'Fontana, CA', timestamp: '2025-07-02 04:00 UTC' },
    { stage: 'Walmart Store #5422', location: 'Plano, TX', timestamp: '2025-07-03 16:00 UTC' },
  ],
  coldChain: {
    logs: [
      { time: '08:00', temp: 1.5 }, { time: '12:00', temp: 2.0 }, { time: '16:00', temp: 1.8 },
      { time: '20:00', temp: 2.2 }, { time: '00:00', temp: 1.7 }, { time: '04:00', temp: 1.9 },
    ],
    status: 'Optimal',
  },
  certifications: [
    { name: 'USDA Organic', hash: 'QmXo...Y4a' },
    { name: 'FDA Approved', hash: 'QmTz...B7c' },
  ],
  blockchain: {
    hash: '0xabc...def',
    txId: '0x123...789',
    status: 'Confirmed',
  },
  freshnessScore: 98,
  trustRating: 'Excellent',
  zkProof: true,
};

const ProductScannerPage = () => {
  const [productId, setProductId] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleScan = () => {
    setLoading(true);
    setTimeout(() => {
      setData(mockProductData);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Product Scanner</h2>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            placeholder="Enter Product ID or scan QR code"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-walmart-blue"
          />
          <button onClick={handleScan} className="bg-walmart-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800">
            {loading ? 'Scanning...' : 'Scan'}
          </button>
        </div>
        <AnimatePresence>
          {data && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="mt-6">
              {/* Product Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-bold text-xl mb-2">{data.name}</h3>
                  <p><strong>Batch:</strong> {data.batchNumber}</p>
                  <p><strong>Manufactured:</strong> {data.manufactured}</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg flex items-center justify-between">
                  <div>
                    <p className="font-semibold">Freshness Score: {data.freshnessScore}/100</p>
                    <p className="font-semibold">Trust Rating: {data.trustRating}</p>
                  </div>
                  {data.zkProof && <FaCheckCircle className="text-green-500 text-3xl" title="ZK-Proof Passed" />}
                </div>
              </div>

              {/* Timeline */}
              <div className="mt-6">
                <h4 className="font-bold text-lg mb-2">Provenance Timeline</h4>
                <div className="flex justify-between items-center relative">
                  {data.timeline.map((item, index) => (
                    <div key={index} className="flex-1 text-center">
                      <p className="font-bold">{item.stage}</p>
                      <p className="text-sm text-gray-500">{item.location}</p>
                      <p className="text-xs text-gray-400">{item.timestamp}</p>
                    </div>
                  ))}
                  <div className="absolute top-1/2 left-0 w-full h-0.5 bg-walmart-blue -translate-y-1/2 -z-10"></div>
                </div>
              </div>

              {/* Cold Chain & Certs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="font-bold text-lg mb-2">Cold Chain Log</h4>
                  <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={data.coldChain.logs}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="time" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="temp" stroke="#0071ce" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                  <p className="text-center text-sm">Status: <span className="font-semibold text-green-600">{data.coldChain.status}</span></p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Certifications</h4>
                  {data.certifications.map(cert => (
                    <div key={cert.name} className="flex items-center bg-gray-100 p-2 rounded-lg mb-2">
                      <FaFileContract className="text-walmart-blue mr-2" />
                      <div>
                        <p className="font-semibold">{cert.name}</p>
                        <p className="text-xs text-gray-500">IPFS Hash: {cert.hash}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProductScannerPage;