import { useState } from "react";

// Mock data for demonstration
const mockReturns = [
  { 
    id: "RET001", 
    item: "Nike Air Max Shoes", 
    status: "Processing", 
    date: "2025-01-15",
    value: "$129.99",
    reason: "Size too big"
  },
  { 
    id: "RET002", 
    item: "Samsung Galaxy Watch", 
    status: "Approved", 
    date: "2025-01-10",
    value: "$329.99",
    reason: "Battery issues"
  },
];

const mockRewards = [
  { type: "Cashback", amount: "$25.50", status: "Available" },
  { type: "Store Credit", amount: "$50.00", status: "Pending" },
  { type: "Discount Voucher", amount: "15% OFF", status: "Used" },
];

export default function CustomerDashboard() {
  const [activeSection, setActiveSection] = useState("return");

  const menuItems = [
    { key: "return", label: "Request Return", icon: "📦" },
    { key: "myReturns", label: "My Returns", icon: "📁" },
    { key: "rewards", label: "Rewards", icon: "🎁" },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Approved":
        return "text-green-400 bg-green-400/10 border-green-400/20";
      case "Processing":
        return "text-blue-400 bg-blue-400/10 border-blue-400/20";
      case "Pending":
        return "text-yellow-400 bg-yellow-400/10 border-yellow-400/20";
      case "Rejected":
        return "text-red-400 bg-red-400/10 border-red-400/20";
      default:
        return "text-gray-400 bg-gray-400/10 border-gray-400/20";
    }
  };

  const ReturnForm = () => (
    <div className="space-y-6">
      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
        <h3 className="text-xl font-semibold text-white mb-4">Request Product Return</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Order ID</label>
            <input
              type="text"
              placeholder="Enter your order ID"
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Product Name</label>
            <input
              type="text"
              placeholder="Enter product name"
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-300 mb-2">Return Reason</label>
            <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="">Select a reason</option>
              <option value="defective">Defective Product</option>
              <option value="wrong-size">Wrong Size</option>
              <option value="not-as-described">Not as Described</option>
              <option value="damaged">Damaged in Transit</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-300 mb-2">Additional Details</label>
            <textarea
              rows={4}
              placeholder="Please provide additional details about your return request..."
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
          </div>
        </div>
        <div className="mt-6">
          <button className="group px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 active:scale-95">
            Submit Return Request
          </button>
        </div>
      </div>
    </div>
  );

  const ReturnList = () => (
    <div className="space-y-6">
      <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
        <div className="px-6 py-4 bg-white/10">
          <h3 className="text-xl font-semibold text-white">My Return Requests</h3>
        </div>
        <div className="divide-y divide-white/10">
          {mockReturns.map((returnItem) => (
            <div key={returnItem.id} className="p-6 hover:bg-white/5 transition-colors duration-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-medium text-gray-400">#{returnItem.id}</span>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(returnItem.status)}`}>
                      {returnItem.status}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-1">{returnItem.item}</h4>
                  <p className="text-gray-300 text-sm mb-2">{returnItem.reason}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span>Date: {returnItem.date}</span>
                    <span>Value: {returnItem.value}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all duration-300 text-sm">
                    View Details
                  </button>
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-sm">
                    Track Status
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const Rewards = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Rewards</p>
              <p className="text-2xl font-bold text-white">$75.50</p>
            </div>
            <div className="p-3 bg-green-500/20 rounded-lg">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Available</p>
              <p className="text-2xl font-bold text-green-400">$25.50</p>
            </div>
            <div className="p-3 bg-blue-500/20 rounded-lg">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Pending</p>
              <p className="text-2xl font-bold text-yellow-400">$50.00</p>
            </div>
            <div className="p-3 bg-yellow-500/20 rounded-lg">
              <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
        <div className="px-6 py-4 bg-white/10">
          <h3 className="text-xl font-semibold text-white">Reward History</h3>
        </div>
        <div className="divide-y divide-white/10">
          {mockRewards.map((reward, index) => (
            <div key={index} className="p-6 hover:bg-white/5 transition-colors duration-200">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-semibold text-white">{reward.type}</h4>
                  <p className="text-2xl font-bold text-blue-400">{reward.amount}</p>
                </div>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(reward.status)}`}>
                  {reward.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>

      <div className="relative min-h-screen flex">
        {/* Sidebar */}
        <div className="w-64 bg-white/5 backdrop-blur-sm border-r border-white/10 p-6">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Customer Portal
            </h2>
          </div>
          
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.key}
                onClick={() => setActiveSection(item.key)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeSection === item.key
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                  {menuItems.find(item => item.key === activeSection)?.label}
                </span>
              </h1>
              <p className="text-gray-400">
                {activeSection === "return" && "Submit a return request for your purchased items"}
                {activeSection === "myReturns" && "Track and manage your return requests"}
                {activeSection === "rewards" && "View your available rewards and cashback"}
              </p>
            </div>

            {/* Content */}
            {activeSection === "return" && <ReturnForm />}
            {activeSection === "myReturns" && <ReturnList />}
            {activeSection === "rewards" && <Rewards />}
          </div>
        </main>
      </div>
    </div>
  );
}