export default function Footer() {
  const handleNavigation = (path) => {
    // Replace with your Link component when integrating
    window.location.href = path;
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      {/* Floating Background Orbs */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-purple-600/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      {/* Top Border with Gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                ReverseLogix
              </h3>
              <p className="text-gray-400 mt-2 max-w-md">
                Revolutionizing e-commerce returns with blockchain technology for transparency, efficiency, and trust.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <button className="p-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 group">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </button>
              
              <button className="p-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 group">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </button>
              
              <button className="p-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 group">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </button>
              
              <button className="p-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all duration-300 group">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-indigo-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <nav className="space-y-2">
              <button 
                onClick={() => handleNavigation("/")}
                className="block text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavigation("/features")}
                className="block text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                Features
              </button>
              <button 
                onClick={() => handleNavigation("/about")}
                className="block text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                About
              </button>
              <button 
                onClick={() => handleNavigation("/contact")}
                className="block text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                Contact
              </button>
            </nav>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Support</h4>
            <nav className="space-y-2">
              <button 
                onClick={() => handleNavigation("/docs")}
                className="block text-gray-400 hover:text-purple-400 transition-colors duration-300"
              >
                Documentation
              </button>
              <button 
                onClick={() => handleNavigation("/api")}
                className="block text-gray-400 hover:text-purple-400 transition-colors duration-300"
              >
                API Reference
              </button>
              <button 
                onClick={() => handleNavigation("/help")}
                className="block text-gray-400 hover:text-purple-400 transition-colors duration-300"
              >
                Help Center
              </button>
              <button 
                onClick={() => handleNavigation("/status")}
                className="block text-gray-400 hover:text-purple-400 transition-colors duration-300"
              >
                System Status
              </button>
            </nav>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} ReverseLogix • Built for Hackathons
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-green-400">System Online</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <button className="hover:text-white transition-colors duration-300">Privacy Policy</button>
              <span>•</span>
              <button className="hover:text-white transition-colors duration-300">Terms of Service</button>
              <span>•</span>
              <button className="hover:text-white transition-colors duration-300">Cookie Policy</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}