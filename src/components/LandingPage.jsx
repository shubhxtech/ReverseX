import React, { useState, useEffect } from 'react';
import { Shield, Package, Truck, Users, Eye, ChevronRight, Zap, Globe, Lock, Check, Moon, Sun, Play, Award, Activity } from 'lucide-react';

// Floating Card Component
const FloatingCard = ({ children, delay = 0, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  );
};

// Gradient Orb Component
const GradientOrb = ({ size, color, top, left, delay }) => (
  <div
    className={`absolute rounded-full blur-3xl opacity-10 animate-pulse ${color}`}
    style={{
      width: size,
      height: size,
      top: top,
      left: left,
      animationDelay: `${delay}s`,
      animationDuration: '6s'
    }}
  />
);

// Header Component
const Header = ({ darkMode, setDarkMode, onGetStarted }) => (
  <header className="fixed top-0 w-full z-50 backdrop-blur-lg bg-white/90 dark:bg-slate-900/90 border-b border-slate-200/50 dark:border-slate-700/50">
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <div className="relative">
          <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full animate-ping" />
        </div>
        <span className="text-2xl font-bold text-slate-800 dark:text-white">
          ChainTrust
        </span>
      </div>
      <nav className="hidden md:flex items-center space-x-8">
        <a href="#features" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Features</a>
        <a href="#use-cases" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Use Cases</a>
        <a href="#testimonials" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Testimonials</a>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 hover:scale-110"
        >
          {darkMode ? <Sun className="w-5 h-5 text-amber-500" /> : <Moon className="w-5 h-5 text-slate-600" />}
        </button>
        <button
          onClick={onGetStarted}
          className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:scale-105"
        >
          Get Started
        </button>
      </nav>
    </div>
  </header>
);

// Stats Component
const Stats = ({ darkMode }) => {
  const stats = [
    { number: '99.9%', label: 'Accuracy Rate', icon: Award },
    { number: '50M+', label: 'Products Tracked', icon: Package },
    { number: '150+', label: 'Countries', icon: Globe },
    { number: '24/7', label: 'Monitoring', icon: Activity }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
      {stats.map((stat, idx) => (
        <FloatingCard key={idx} delay={1000 + idx * 100}>
          <div className="text-center p-6 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <stat.icon className="w-8 h-8 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
            <div className="text-3xl font-bold mb-2 text-slate-800 dark:text-white">
              {stat.number}
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              {stat.label}
            </div>
          </div>
        </FloatingCard>
      ))}
    </div>
  );
};

// Features Section Component
const Features = ({ darkMode }) => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: Lock,
      title: 'Blockchain Security',
      description: 'Immutable records with cryptographic verification',
      detail: 'Every transaction is secured by blockchain technology',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Globe,
      title: 'Global Tracking',
      description: 'Real-time visibility across the entire supply chain',
      detail: 'Track products from origin to destination',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Zap,
      title: 'Instant Verification',
      description: 'Immediate authenticity checks and compliance validation',
      detail: 'Verify certifications and quality standards instantly',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Multi-Stakeholder',
      description: 'Seamless collaboration across all supply chain partners',
      detail: 'Connect suppliers, vendors, logistics, and customers',
      color: 'from-orange-500 to-red-500'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section id="features" className="relative z-20 py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800 dark:text-white">
            Powerful Features
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Experience the future of supply chain management with our cutting-edge blockchain technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className={`p-8 rounded-2xl border transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm ${
                activeFeature === idx 
                  ? 'border-blue-500 dark:border-blue-400 shadow-lg' 
                  : 'border-slate-200/50 dark:border-slate-700/50 hover:border-blue-300 dark:hover:border-blue-500'
              }`}
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                {feature.description}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-500">
                {feature.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Use Cases Component
const UseCases = ({ darkMode }) => {
  const useCases = [
    {
      title: 'Food Safety',
      description: 'Track farm-to-table journey with temperature monitoring',
      icon: '🍎',
      metrics: ['Temperature logs', 'Expiry tracking', 'Origin verification']
    },
    {
      title: 'Pharmaceutical',
      description: 'Ensure drug authenticity and prevent counterfeiting',
      icon: '💊',
      metrics: ['Batch tracking', 'Cold chain monitoring', 'Authentication']
    },
    {
      title: 'Electronics',
      description: 'Verify component authenticity and manufacturing details',
      icon: '📱',
      metrics: ['Component tracking', 'Quality assurance', 'Warranty management']
    },
    {
      title: 'Luxury Goods',
      description: 'Combat counterfeiting with blockchain certificates',
      icon: '💎',
      metrics: ['Authenticity proof', 'Ownership history', 'Resale value']
    }
  ];

  return (
    <section id="use-cases" className="relative z-20 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800 dark:text-white">
            Industry Applications
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            See how ChainTrust transforms various industries with blockchain transparency
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, idx) => (
            <div 
              key={idx} 
              className="p-8 rounded-2xl border transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50 group"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {useCase.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-white">
                {useCase.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                {useCase.description}
              </p>
              <div className="space-y-2">
                {useCase.metrics.map((metric, metricIdx) => (
                  <div key={metricIdx} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      {metric}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Component
const Testimonials = ({ darkMode }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Supply Chain Director',
      company: 'GlobalTech Solutions',
      content: 'ChainTrust revolutionized our supply chain transparency. We reduced fraud by 95% and improved customer trust significantly.',
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'Operations Manager',
      company: 'FreshFood Corp',
      content: 'The real-time tracking capabilities are incredible. We can now monitor temperature and humidity for our perishable goods throughout the entire journey.',
      avatar: 'MC'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Quality Assurance Lead',
      company: 'PharmaCare International',
      content: 'Blockchain verification has made our compliance audits seamless. The digital twins provide unprecedented visibility into our products.',
      avatar: 'ER'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="relative z-20 py-20 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-900 dark:to-indigo-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800 dark:text-white">
            What Our Clients Say
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Trusted by industry leaders worldwide
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="w-full flex-shrink-0 px-4">
                  <div className="p-8 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                      {testimonial.avatar}
                    </div>
                    <p className="text-lg mb-6 text-slate-700 dark:text-slate-300 italic">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <h4 className="font-semibold text-slate-800 dark:text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentTestimonial(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentTestimonial ? 'bg-blue-500' : 'bg-slate-300 dark:bg-slate-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Login Modal Component
const LoginModal = ({ showLogin, setShowLogin, selectedRole, setSelectedRole, userId, setUserId, handleLogin, darkMode }) => {
  const roles = [
    { 
      id: 'customer', 
      name: 'Customer', 
      icon: Eye, 
      description: 'Track products and verify authenticity',
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      id: 'supplier', 
      name: 'Supplier', 
      icon: Package, 
      description: 'Create digital twins and manage products',
      color: 'from-emerald-500 to-teal-500'
    },
    { 
      id: 'vendor', 
      name: 'Vendor', 
      icon: Shield, 
      description: 'Quality inspection and blockchain verification',
      color: 'from-purple-500 to-pink-500'
    },
    { 
      id: 'logistics', 
      name: 'Logistics', 
      icon: Truck, 
      description: 'Track shipments and environmental conditions',
      color: 'from-orange-500 to-red-500'
    }
  ];

  if (!showLogin) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="max-w-2xl w-full mx-4">
        <div className="p-8 rounded-3xl border backdrop-blur-sm bg-white/95 dark:bg-slate-800/95 border-slate-200/50 dark:border-slate-700/50 shadow-2xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-slate-800 dark:text-white">
            Choose Your Role
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {roles.map((role) => (
              <button
                key={role.id}
                onClick={() => setSelectedRole(role.id)}
                className={`p-6 rounded-2xl text-left transition-all duration-300 hover:scale-105 ${
                  selectedRole === role.id
                    ? `bg-gradient-to-br ${role.color} text-white shadow-lg`
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                } border ${
                  selectedRole === role.id
                    ? 'border-transparent'
                    : 'border-slate-200 dark:border-slate-600'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    selectedRole === role.id
                      ? 'bg-white/20'
                      : 'bg-slate-200 dark:bg-slate-600'
                  }`}>
                    <role.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{role.name}</h3>
                    <p className="text-sm opacity-80">{role.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Enter your User ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="w-full p-4 rounded-xl border bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
            />
            
            <div className="flex space-x-4">
              <button
                onClick={handleLogin}
                disabled={!selectedRole || !userId}
                className="flex-1 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                Login to Dashboard
              </button>
              <button
                onClick={() => setShowLogin(false)}
                className="px-6 py-4 rounded-xl font-semibold bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600 transition-all duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Footer Component
const Footer = ({ darkMode }) => (
  <footer className="relative z-20 py-12 bg-slate-900 dark:bg-black text-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="w-6 h-6 text-blue-400" />
            <span className="text-xl font-bold">ChainTrust</span>
          </div>
          <p className="text-slate-400">
            Revolutionizing supply chain transparency with blockchain technology.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-slate-400">
            <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
        <p>&copy; 2024 ChainTrust. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

// Main Landing Page Component
const LandingPage = ({ 
  darkMode, 
  setDarkMode, 
  selectedRole, 
  setSelectedRole, 
  userId, 
  setUserId, 
  handleLogin 
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={`min-h-screen relative overflow-hidden transition-all duration-300 ${
      darkMode ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900' : 'bg-gradient-to-br from-white via-slate-50 to-indigo-50'
    }`}>
      {/* Animated Background Elements */}
      <GradientOrb size="400px" color="bg-blue-500" top="10%" left="10%" delay={0} />
      <GradientOrb size="300px" color="bg-purple-500" top="60%" left="70%" delay={1} />
      <GradientOrb size="200px" color="bg-indigo-500" top="30%" left="80%" delay={2} />
      
      {/* Mouse Follower Effect */}
      <div
        className="fixed pointer-events-none z-10 rounded-full mix-blend-multiply"
        style={{
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)',
          transform: `translate(${mousePosition.x - 150}px, ${mousePosition.y - 150}px)`,
          transition: 'transform 0.2s ease-out'
        }}
      />

      <Header darkMode={darkMode} setDarkMode={setDarkMode} onGetStarted={() => setShowLogin(true)} />

      {/* Hero Section */}
      <section className="relative z-20 max-w-7xl mx-auto px-6 py-24 pt-32">
        <div className="text-center mb-16">
          <FloatingCard delay={200}>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-slate-900 dark:text-white">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Chain
              </span>
              <span className="text-slate-900 dark:text-white">Trust</span>
            </h1>
          </FloatingCard>
          
          <FloatingCard delay={400}>
            <p className="text-xl md:text-2xl mb-8 text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
              Blockchain-Powered Supply Chain Transparency with 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                {' '}Digital Twins
              </span>
            </p>
          </FloatingCard>

          <FloatingCard delay={600}>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {['FDA Certified', 'USDA Verified', 'ISO Compliant', 'Cold Chain Monitored'].map((cert, idx) => (
                <div key={idx} className="px-4 py-2 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 flex items-center space-x-2">
                  <Check className="w-4 h-4" />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </FloatingCard>

          <FloatingCard delay={800}>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <button
                onClick={() => setShowLogin(true)}
                className="group relative inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <span>Get Started</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="inline-flex items-center space-x-3 px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>
          </FloatingCard>
        </div>

        <Stats darkMode={darkMode} />
      </section>

      <Features darkMode={darkMode} />
      <UseCases darkMode={darkMode} />
      <Testimonials darkMode={darkMode} />

      <LoginModal 
        showLogin={showLogin}
        setShowLogin={setShowLogin}
        selectedRole={selectedRole}
        setSelectedRole={setSelectedRole}
        userId={userId}
        setUserId={setUserId}
        handleLogin={handleLogin}
        darkMode={darkMode}
      />

      {/* Floating Digital Twin Visualization */}
      <div className="fixed bottom-10 right-10 z-30">
        <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 shadow-lg">
          <Package className="w-8 h-8 text-white" />
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
          </div>
        </div>
      </div>

      <Footer darkMode={darkMode} />
    </div>
  );
};

export default LandingPage;