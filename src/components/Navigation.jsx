import React from 'react';
import { Shield, Bell, Sun, Moon, LogOut } from 'lucide-react';

const Navigation = ({ darkMode, setDarkMode, currentUser, handleLogout, alerts }) => {
  return (
    <nav className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md p-4`}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Shield className="w-8 h-8 text-blue-600 mr-2" />
          <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>ChainTrust</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Bell className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-gray-600'} cursor-pointer`} />
            {alerts.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {alerts.length}
              </span>
            )}
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'}`}
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <div className={`${darkMode ? 'text-white' : 'text-gray-800'}`}>
            <span className="font-medium">{currentUser.name}</span>
            <span className="text-sm opacity-70 ml-2">({currentUser.role})</span>
          </div>
          <button
            onClick={handleLogout}
            className={`p-2 rounded-lg hover:bg-red-100 ${darkMode ? 'text-white hover:bg-red-900' : 'text-gray-600'}`}
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;