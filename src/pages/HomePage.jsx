import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const HomePage = () => (
  <div className="text-center py-20 px-4 bg-gray-50">
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <img src="/assets/chaintrust-logo.png" alt="ChainTrust Logo" className="mx-auto h-24 w-auto" />
      <h1 className="text-5xl font-extrabold text-gray-900 mt-4">
        ChainTrust
      </h1>
      <p className="text-2xl text-gray-600 mt-2">
        Building Trust, One Product at a Time
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
      className="mt-12 max-w-2xl mx-auto text-lg text-gray-700"
    >
      ChainTrust provides end-to-end transparency for Walmart's supply chain. By leveraging blockchain technology, we ensure product provenance, safety, and authenticity from farm to shelf.
    </motion.div>

    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="mt-12"
    >
      <Link
        to="/scan"
        className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-walmart-blue rounded-full shadow-lg hover:bg-blue-800 transition-transform transform hover:scale-105"
      >
        Explore Demo <FaArrowRight className="ml-3" />
      </Link>
    </motion.div>
  </div>
);

export default HomePage;