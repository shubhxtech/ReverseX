export default function Features() {
  const features = [
    {
      title: "🔐 Immutable Return Tracking",
      description: "Tamper-proof record of every return lifecycle event (initiation, pickup, inspection, refund).",
      color: "from-blue-500 to-blue-600",
      shadowColor: "shadow-blue-500/20"
    },
    {
      title: "🤖 Smart Contract Automation",
      description: "Auto-approve refunds, reroute items (refurbish/recycle), and update systems based on predefined rules.",
      color: "from-purple-500 to-purple-600",
      shadowColor: "shadow-purple-500/20"
    },
    {
      title: "🎯 Digital Twin per Item",
      description: "Each product unit gets a unique token (e.g., NFT) that tracks its status, ownership, and history.",
      color: "from-indigo-500 to-indigo-600",
      shadowColor: "shadow-indigo-500/20"
    },
    {
      title: "🔗 Multi-Party Transparency",
      description: "All stakeholders (retailer, carrier, return center, refurbisher) access and update a shared ledger.",
      color: "from-cyan-500 to-cyan-600",
      shadowColor: "shadow-cyan-500/20"
    },
    {
      title: "📉 Fraud Prevention",
      description: "Prevents false returns, counterfeit swaps, and duplicate claims via immutable verification.",
      color: "from-emerald-500 to-emerald-600",
      shadowColor: "shadow-emerald-500/20"
    },
    {
      title: "📦 ERP/OMS/WMS Integration",
      description: "Blockchain events sync with existing business systems using APIs and middleware.",
      color: "from-orange-500 to-orange-600",
      shadowColor: "shadow-orange-500/20"
    },
    {
      title: "📊 Real-Time Analytics Ready",
      description: "Unified, trustworthy data for insights on return reasons, processing times, carrier performance, and product quality.",
      color: "from-pink-500 to-pink-600",
      shadowColor: "shadow-pink-500/20"
    },
    {
      title: "♻ Sustainability & Compliance",
      description: "Track recycling, refurbishing, and disposal for ESG goals and regulatory compliance.",
      color: "from-green-500 to-green-600",
      shadowColor: "shadow-green-500/20"
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      {/* Floating Background Orbs */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Key Features
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionizing e-commerce returns with blockchain technology for transparency, efficiency, and trust.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${feature.shadowColor} cursor-pointer`}
            >
              {/* Gradient Border on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-30 rounded-xl blur-sm transition-opacity duration-300 -z-10`}></div>
              
              {/* Card Content */}
              <div className="relative z-10">
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
              
              {/* Hover Arrow */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 active:scale-95">
            <span className="flex items-center gap-2">
              Explore All Features
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}