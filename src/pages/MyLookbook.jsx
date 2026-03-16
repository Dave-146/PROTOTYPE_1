import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { RefreshCw, TrendingUp, MapPin, ExternalLink, User, ShieldCheck, ArrowRight } from 'lucide-react';

const MyLookbook = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check for session token (simplified - in production, use proper auth)
  useEffect(() => {
    // Simulate auth check
    const checkAuth = () => {
      const sessionToken = sessionStorage.getItem('doubl_session_token');
      const profileComplete = sessionStorage.getItem('doubl_profile_complete') === 'true';
      
      if (!sessionToken || !profileComplete) {
        // Redirect to Inner Sanctum if not authenticated
        navigate('/shopper/vault', { replace: true });
      } else {
        setIsAuthenticated(true);
      }
    };
    
    checkAuth();
    
    // Check for session expiration (30 minutes)
    const sessionExpiry = sessionStorage.getItem('doubl_session_expiry');
    if (sessionExpiry && new Date().getTime() > parseInt(sessionExpiry)) {
      navigate('/shopper/vault', { replace: true });
    }
  }, [navigate]);

  // Simulated data
  const bodyStats = {
    fitCode: 'DB-990-22',
    lastScan: 'March 11, 2026',
    measurements: {
      chest: '38"',
      waist: '32"',
      hips: '36"',
      inseam: '32"',
      shoulder: '17"',
    }
  };

  const matchedBrands = [
    { name: 'ACNE STUDIOS', match: 98, link: '/directory' },
    { name: 'LEVI\'S', match: 95, link: '/directory' },
    { name: 'THEORY', match: 92, link: '/directory' },
    { name: 'ZEGNA', match: 89, link: '/directory' },
  ];

  if (!isAuthenticated) {
    return null; // Will redirect
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-indigo-500/30 overflow-x-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[300px] h-[300px] bg-zinc-800/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-20 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1 border border-indigo-500/30 rounded-full text-[10px] font-bold uppercase tracking-widest text-indigo-400 mb-4 backdrop-blur-sm bg-indigo-500/5">
                <ShieldCheck className="w-3 h-3" /> Authenticated
              </div>
              <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tight mb-2">
                My Lookbook
              </h1>
              <p className="text-zinc-400 text-lg font-light">
                Your personalized style dashboard
              </p>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <User className="w-5 h-5 text-zinc-500" />
              <span className="text-sm font-mono">{bodyStats.fitCode}</span>
            </div>
          </div>
        </motion.div>

        {/* 3.2.1 Body Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-indigo-600 to-indigo-900 rounded-[2.5rem] p-8 md:p-12 mb-8 overflow-hidden shadow-[0_30px_100px_rgba(99,102,241,0.4)] relative"
        >
          {/* Holographic Texture */}
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 1px, white 1px, white 2px)', backgroundSize: '10px 10px' }} />
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-[80px] -mr-32 -mt-32" />
          
          <div className="relative z-10">
            <h2 className="font-serif text-3xl font-bold mb-6">Body Stats Summary</h2>
            
            {/* Visualized Silhouette Data */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              {Object.entries(bodyStats.measurements).map(([key, value]) => (
                <div key={key} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-2">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </p>
                  <p className="text-2xl font-bold font-mono">{value}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-white/10">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-1">
                  Last Scanned
                </p>
                <p className="text-sm font-bold tracking-widest">{bodyStats.lastScan}</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-1">
                  Fit Code
                </p>
                <p className="text-2xl font-mono font-bold tracking-widest">{bodyStats.fitCode}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3.2.2 Update Scan */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 mb-8"
        >
          <div className="flex items-center justify-between">
            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center">
                <RefreshCw className="w-6 h-6 text-indigo-400" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Body changed?</h3>
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest">
                  Start a new 3D scan to update your measurements
                </p>
              </div>
            </div>
            <button 
              onClick={() => navigate('/shopper/onboarding')}
              className="px-6 py-3 bg-indigo-600 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-indigo-500 transition-colors flex items-center gap-2"
            >
              Update Scan <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* 3.2.3 Matched Brands List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-serif text-3xl font-bold">Matched Brands</h2>
            <div className="flex items-center gap-2 text-sm text-zinc-400">
              <TrendingUp className="w-4 h-4" />
              <span>Sorted by match accuracy</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {matchedBrands.map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-colors group cursor-pointer"
                onClick={() => navigate(brand.link)}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg">{brand.name}</h3>
                  <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-zinc-800 rounded-full h-2 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-indigo-500 to-indigo-600 transition-all duration-500"
                      style={{ width: `${brand.match}%` }}
                    />
                  </div>
                  <span className="text-sm font-bold text-indigo-400">{brand.match}%</span>
                </div>
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-3">
                  Match accuracy
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => navigate('/directory')}
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              <MapPin className="w-4 h-4" />
              View Full Retailer Directory
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default MyLookbook;
