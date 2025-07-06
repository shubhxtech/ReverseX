import React, { useState } from 'react';
import { DigitalTwinSystem } from '../../mainFiles/digital_twin_export.js';

const ManufacturerForm = () => {
  const [formData, setFormData] = useState({
    productId: '',
    name: '',
    description: '',
    uri: 'https://placeholder.uri',
  });

  const [status, setStatus] = useState(null); // success | error
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const digitalTwin = new DigitalTwinSystem();

    try {
      const result = await digitalTwin.mintFromFrontend({
        productId: formData.productId,
        name: formData.name,
        description: formData.description,
        metadataUrl: formData.uri,
      });

      console.log('Mint result:', result);

      if (result.success) {
        setStatus({ type: 'success', message: result.message, tx: result.transactionHash });
      } else {
        setStatus({ type: 'error', message: result.message });
      }
    } catch (error) {
      console.error('Error minting:', error);
      setStatus({ type: 'error', message: 'Minting failed. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Register Product</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="productId">
              Product ID
            </label>
            <input
              id="productId"
              name="productId"
              type="text"
              value={formData.productId}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={3}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="uri">
              Metadata URI
            </label>
            <input
              id="uri"
              name="uri"
              type="text"
              value={formData.uri}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full flex justify-center items-center gap-2 ${
              loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
            } text-white font-semibold py-2 px-4 rounded-lg transition duration-200`}
          >
            {loading && (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
            )}
            {loading ? 'Minting...' : 'Mint'}
          </button>
        </form>

        {status && (
          <div
            className={`mt-6 p-4 rounded-lg ${
              status.type === 'success' ? 'bg-green-600' : 'bg-red-600'
            }`}
          >
            <p>{status.message}</p>
            {status.type === 'success' && status.tx && (
              <a
                href={`https://explorer.aptoslabs.com/txn/${status.tx}?network=testnet`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-sm mt-2 inline-block"
              >
                View Transaction
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ManufacturerForm;
