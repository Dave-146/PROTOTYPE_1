import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import { Ruler, RefreshCw, CheckCircle2, ArrowRight, User, Activity, Sparkles, Building2 } from 'lucide-react';

const stats = [
  { label: 'Chest', value: '42.4"', percentile: '92nd' },
  { label: 'Waist', value: '34.1"', percentile: '74th' },
  { label: 'Shoulders', value: '18.8"', percentile: '88th' },
  { label: 'Arm Length', value: '25.6"', percentile: '65th' },
  { label: 'Inseam', value: '32.0"', percentile: '81st' }
];

const matchedRetailers = [
  { name: 'Theory', match: '98% Match', category: 'Contemporary', logo: 'T' },
  { name: 'Aether', match: '96% Match', category: 'Technical', logo: 'A' },
  { name: 'Zegna', match: '94% Match', category: 'Luxury', logo: 'Z' }
];

const ProfileManagement = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-zinc-50 font-sans pb-32">
      
      {/* 3.2.1 Hero & Visualized Silhouette */}
      <section className="bg-white border-b border-zinc-100 pt-32 pb-20 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="flex items-center gap-3 text-indigo-600 font-bold text-[10px] uppercase tracking-[0.2em] mb-6">
              <User className="w-4 h-4" /> Personal Fit Profile
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-zinc-900 mb-6 tracking-tight">Your Body, <br /><span className="text-zinc-400">Digitized.</span></h1>
            <p className="text-zinc-500 text-lg font-light mb-12 max-w-md">
              Your profile is built on 40,000 unique data points captured during your last volumetric scan.
            </p>

            {/* 3.2.2 Update Scan */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => navigate('/shopper/onboarding')}
                className="bg-zinc-950 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 hover:bg-zinc-800 transition-all shadow-xl shadow-zinc-200"
              >
                <RefreshCw className="w-4 h-4" /> Update Scan
              </button>
              <div className="flex items-center gap-2 px-4 py-4 rounded-xl border border-zinc-100 bg-zinc-50/50">
                 <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Body changed since March 11?</p>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Silhouette Visualization Mockup */}
            <div className="aspect-[4/5] bg-zinc-50 rounded-[3rem] border border-zinc-100 relative overflow-hidden flex items-center justify-center group shadow-2xl">
               <div className="absolute inset-0 bg-[#f9fafb]" />
               
               {/* Faux Scanning Lines */}
               <motion.div 
                 animate={{ y: [0, 400, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-x-0 h-px bg-indigo-500/20 z-10 shadow-[0_0_15px_rgba(99,102,241,0.5)]"
               />

               {/* Silhouette Outline (Stylized) */}
               <div className="w-48 h-80 border-2 border-zinc-200 rounded-[5rem] relative flex flex-col items-center">
                  <div className="w-16 h-16 border-2 border-zinc-200 rounded-full -mt-2" /> {/* Head */}
                  <div className="w-32 h-16 border-2 border-zinc-200 rounded-full mt-2" /> {/* Shoulders */}
                  <div className="w-24 h-40 border-2 border-zinc-200 rounded-full -mt-4" /> {/* Torso */}
                  
                  {/* Measurement Hotspots */}
                  <div className="absolute top-[25%] left-[-10px] w-3 h-3 bg-indigo-500 rounded-full animate-ping" />
                  <div className="absolute top-[50%] right-[-10px] w-3 h-3 bg-indigo-500 rounded-full animate-ping [animation-delay:1s]" />
                  <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-3 h-3 bg-indigo-500 rounded-full animate-ping [animation-delay:2s]" />
               </div>

               <div className="absolute bottom-10 left-10 p-6 bg-white shadow-xl rounded-2xl border border-zinc-100">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Volumetric Confidence</p>
                  <p className="text-xl font-bold text-zinc-900">98.4% <span className="text-xs text-indigo-500">ACCURATE</span></p>
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3.2.1 Body Stats Summary */}
      <section className="max-w-7xl mx-auto px-6 -mt-10 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {stats.map((stat, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              key={stat.label} 
              className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">{stat.label}</p>
              <h3 className="text-2xl font-bold text-zinc-900 mb-2">{stat.value}</h3>
              <div className="flex items-center gap-1.5 pt-4 border-t border-zinc-50">
                <Activity className="w-3 h-3 text-indigo-500" />
                <span className="text-[10px] font-bold text-zinc-600">{stat.percentile} Percentile</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3.2.3 Matched Retailers List */}
      <section className="max-w-7xl mx-auto px-6 mt-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="font-serif text-4xl font-bold text-zinc-900 mb-4">Your Retail Network.</h2>
            <p className="text-zinc-500 font-light text-lg">
              We've analyzed the inventory across our partner network. These brands currently have the best alignment with your architecture.
            </p>
          </div>
          <Link to="/directory" className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-indigo-600 hover:text-indigo-800 transition-colors">
            Explore All Partners <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {matchedRetailers.map((retailer, i) => (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + (i * 0.1) }}
              key={retailer.name}
              className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between h-72"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center text-white font-serif text-xl font-bold italic">
                    {retailer.logo}
                  </div>
                  <div className="flex items-center gap-1.5 text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase">
                    <Sparkles className="w-3 h-3" /> {retailer.match}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-1">{retailer.name}</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">{retailer.category}</p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-zinc-50">
                 <p className="text-xs text-zinc-500 font-light">Inventory Ready</p>
                 <button className="p-2 bg-zinc-50 rounded-full hover:bg-zinc-100 transition-colors">
                    <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-950" />
                 </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Profile Actions */}
      <section className="max-w-7xl mx-auto px-6 mt-32">
        <div className="bg-indigo-600 rounded-[3rem] p-12 md:p-20 text-white flex flex-col items-center text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-[100px] -ml-32 -mt-32" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-400/20 rounded-full blur-[100px] -mr-32 -mb-32" />
          
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8">Ready to shop with precision?</h2>
            <p className="text-indigo-100 text-lg font-light mb-12">
              Your Fit-ID is active and synchronized across our network. Use your Digital Vault to authorize purchases in one click.
            </p>
            <button 
              onClick={() => navigate('/shopper/vault')}
              className="bg-white text-indigo-600 px-10 py-5 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-indigo-50 transition-all shadow-2xl"
            >
              Open Digital Vault
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProfileManagement;
