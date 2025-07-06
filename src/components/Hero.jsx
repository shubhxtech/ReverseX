
export default function Hero() {
  const handleGetStarted = () => {
    // You can replace this with your Link component when integrating
    window.location.href = "/customer-dashboard";
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-0"></div>
      
      {/* Animated Shapes */}
      <div className="absolute inset-0 overflow-hidden z-5">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] z-5"></div>
      
      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Main Content */}
        <div className="text-white space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Streamline Returns
              </span>
              <br />
              <span className="text-white">with Blockchain!</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
              A smarter way to handle e-commerce returns — transparent, fast, and
              secure reverse logistics powered by blockchain.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={handleGetStarted}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center gap-2">
                Get Started
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            
            <button className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm">
              Learn More
            </button>
          </div>
        </div>
        
        {/* Feature Highlight */}
        <div className="text-right space-y-4">
          <div className="inline-block p-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl">
            <div className="space-y-6 text-white">
              <div className="flex items-center justify-end gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-400">Live & Secure</span>
              </div>
              
              <div className="space-y-4 text-right">
                <div className="group cursor-pointer">
                  <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors duration-300">
                    Smarter Returns
                  </h3>
                  <div className="w-full h-0.5 bg-gradient-to-l from-blue-400 to-transparent mt-2 group-hover:from-blue-300 transition-colors duration-300"></div>
                </div>
                
                <div className="group cursor-pointer">
                  <h3 className="text-2xl font-bold group-hover:text-purple-400 transition-colors duration-300">
                    Faster Refunds
                  </h3>
                  <div className="w-full h-0.5 bg-gradient-to-l from-purple-400 to-transparent mt-2 group-hover:from-purple-300 transition-colors duration-300"></div>
                </div>
                
                <div className="group cursor-pointer">
                  <h3 className="text-2xl font-bold group-hover:text-indigo-400 transition-colors duration-300">
                    Verified Every Step
                  </h3>
                  <div className="w-full h-0.5 bg-gradient-to-l from-indigo-400 to-transparent mt-2 group-hover:from-indigo-300 transition-colors duration-300"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <div className="text-2xl font-bold text-blue-400">99.9%</div>
              <div className="text-sm text-gray-300">Uptime</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <div className="text-2xl font-bold text-purple-400">24/7</div>
              <div className="text-sm text-gray-300">Support</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}