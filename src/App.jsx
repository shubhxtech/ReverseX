import React, { useState } from 'react';
import { mockProducts, mockUsers } from '../public/data/mockData';
import LandingPage from './components/LandingPage';
import CustomerDashboard from './components/CustomerDashboard';
import SupplierDashboard from './components/SupplierDashboard';
import VendorDashboard from './components/VendorDashboard';
import LogisticsDashboard from './components/LogisticsDashboard';
import DigitalTwinDetails from './components/DigitalTwinDetails';
import CreateProductForm from './components/CreateProductForm';
import ReturnProduct from './components/ReturnProduct';

const ChainTrust = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [selectedRole, setSelectedRole] = useState('');
  const [userId, setUserId] = useState('');
  const [products, setProducts] = useState(mockProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showReturnForm, setShowReturnForm] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [alerts, setAlerts] = useState([
    { id: 1, type: 'warning', message: 'Temperature breach detected in Product DT001', time: '2 min ago' },
    { id: 2, type: 'success', message: 'Quality check completed for Product DT003', time: '5 min ago' },
    { id: 3, type: 'info', message: 'Return request submitted for Product DT002', time: '10 min ago' }
  ]);

  const handleLogin = () => {
    if (selectedRole && userId) {
      setCurrentUser({
        role: selectedRole,
        id: userId,
        ...mockUsers[selectedRole]
      });
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setSelectedRole('');
    setUserId('');
    setShowReturnForm(false);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleReturnSubmit = (updatedProducts) => {
    setProducts(updatedProducts);
    setAlerts([
      { id: Date.now(), type: 'success', message: 'Return request submitted successfully', time: 'Just now' },
      ...alerts
    ]);
  };

  return (
    <div className="relative">
      {!currentUser ? (
        <LandingPage
          darkMode={!darkMode}
          setDarkMode={setDarkMode}
          selectedRole={selectedRole}
          setSelectedRole={setSelectedRole}
          userId={userId}
          setUserId={setUserId}
          handleLogin={handleLogin}
        />
      ) : (
        <>
          {currentUser.role === 'customer' && (
            <CustomerDashboard
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              currentUser={currentUser}
              handleLogout={handleLogout}
              products={products}
              filteredProducts={filteredProducts}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              setSelectedProduct={setSelectedProduct}
              setShowReturnForm={setShowReturnForm}
              alerts={alerts}
            />
          )}
          {currentUser.role === 'supplier' && (
            <SupplierDashboard
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              currentUser={currentUser}
              handleLogout={handleLogout}
              products={products}
              filteredProducts={filteredProducts}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              setSelectedProduct={setSelectedProduct}
              setShowCreateForm={setShowCreateForm}
              setShowReturnForm={setShowReturnForm}
              alerts={alerts}
            />
          )}
          {currentUser.role === 'vendor' && (
            <VendorDashboard
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              currentUser={currentUser}
              handleLogout={handleLogout}
              products={products}
              filteredProducts={filteredProducts}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              setSelectedProduct={setSelectedProduct}
              setShowReturnForm={setShowReturnForm}
              alerts={alerts}
            />
          )}
          {currentUser.role === 'logistics' && (
            <LogisticsDashboard
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              currentUser={currentUser}
              handleLogout={handleLogout}
              products={products}
              filteredProducts={filteredProducts}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              setSelectedProduct={setSelectedProduct}
              setShowReturnForm={setShowReturnForm}
              alerts={alerts}
            />
          )}
        </>
      )}
      {selectedProduct && (
        <DigitalTwinDetails
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          darkMode={darkMode}
        />
      )}
      {showCreateForm && (
        <CreateProductForm
          onClose={() => setShowCreateForm(false)}
          onSave={(newProduct) => setProducts([...products, newProduct])}
          currentUser={currentUser}
          products={products}
          darkMode={darkMode}
        />
      )}
      {showReturnForm && (
        <ReturnProduct
          onClose={() => setShowReturnForm(false)}
          currentUser={currentUser}
          products={products}
          setProducts={setProducts}
          darkMode={darkMode}
        />
      )}
    </div>
  );
};

export default ChainTrust;