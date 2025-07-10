import { NavLink } from 'react-router-dom';
import { FaBoxes, FaQrcode, FaShieldAlt, FaLeaf, FaUndo } from 'react-icons/fa';

const Header = () => (
  <header className="bg-white shadow-md">
    <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
      <div className="flex items-center">
        <img src="/assets/chaintrust-logo.png" alt="ChainTrust Logo" className="h-10 w-auto" />
        <span className="ml-3 text-2xl font-bold text-gray-800">ChainTrust</span>
      </div>
      <div className="flex items-center space-x-4">
        <NavLink to="/scan" className="flex items-center text-gray-600 hover:text-walmart-blue transition-colors">
          <FaQrcode className="mr-2" /> Scan
        </NavLink>
        <NavLink to="/admin/recalls" className="flex items-center text-gray-600 hover:text-walmart-blue transition-colors">
          <FaShieldAlt className="mr-2" /> Recalls
        </NavLink>
        <NavLink to="/sustainability" className="flex items-center text-gray-600 hover:text-walmart-blue transition-colors">
          <FaLeaf className="mr-2" /> Sustainability
        </NavLink>
        <NavLink to="/returns" className="flex items-center text-gray-600 hover:text-walmart-blue transition-colors">
          <FaUndo className="mr-2" /> Returns
        </NavLink>
      </div>
    </nav>
  </header>
);

export default Header;