import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Info, ArrowRight, X, Filter, Building2, ExternalLink } from 'lucide-react';

const retailers = [
  {
    id: 'aether',
    name: 'Aether Apparel',
    logo: 'AETHER',
    category: 'Outerwear',
    location: 'Los Angeles, CA',
    mission: 'Aether was founded with the goal of creating high-quality, design-focused technical outerwear that looks as good in the city as it performs in the wild. Partners with DOUBL to ensure zero-compromise precision for adventure-ready silhouettes.',
    fitGuide: 'Aether utilizes the DOUBL Fit-Code primarily for their technical layering systems. Ensure your measurements are updated within 3 months for optimal shell-to-midlayer match.',
    stores: ['La Brea Flagship', 'SF Hayes Valley', 'Aspen Core']
  },
  {
    id: 'theory',
    name: 'Theory',
    logo: 'THEORY',
    category: 'Contemporary',
    location: 'New York, NY',
    mission: 'Theory is built on a foundation of effortless style and impeccable fit. By integrating DOUBL, Theory brings "Made-to-Measure" precision to their ready-to-wear collections, beginning with their signature Precision Ponte line.',
    fitGuide: 'Theory uses DOUBL to determine "Block Preference." If you prefer a slimmer tailored look, select "Slim Silhouette" during your Vibe Check before applying your Fit-Code at checkout.',
    stores: ['Meatpacking District', 'SoHo', 'Beverly Hills']
  },
  {
    id: 'zegna',
    name: 'Zegna',
    logo: 'ZEGNA',
    category: 'Luxury',
    location: 'Milan, Italy',
    mission: 'Excellence in tailoring for over 100 years. Zegna partners with DOUBL to bridge the gap between traditional bespoke craftsmanship and digital scalability for the modern global gentleman.',
    fitGuide: 'Zegna leverages the full 40-point biometric scan for their "Made-to-Measure Digital" service. Your Fit-Code will unlock specific garment ease allowances unique to the Zegna tailoring block.',
    stores: ['Milan Via Montenapoleone', 'London New Bond St', 'NYC 5th Ave']
  },
  {
    id: 'reformation',
    name: 'Reformation',
    logo: 'REFORMATION',
    category: 'Sustainable',
    location: 'Los Angeles, CA',
    mission: 'Sustainable fashion without sacrificing fit. Reformation uses DOUBL to eliminate bracket-ordering and reduce shipping-related carbon emissions by ensuring perfectly sized garments the first time.',
    fitGuide: 'Best used for Reformation denim and structured linen pieces. The Fit-Code accounts for the low-stretch nature of eco-fabrics to suggest your most comfortable size.',
    stores: ['Melrose Ave', 'Bond St, NYC', 'Shoreditch, London']
  }
];

const RetailerDirectory = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedRetailer, setSelectedRetailer] = useState(null);

  const categories = ['All', ...new Set(retailers.map(r => r.category))];

  const filteredRetailers = useMemo(() => {
    return retailers.filter(r => {
      const matchesSearch = r.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || r.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-zinc-50 font-sans selection:bg-indigo-100 pb-32">
      
      {/* 4.1 Search Interface & Hero */}
      <section className="bg-zinc-950 text-white pt-32 pb-48 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] -z-0" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-7xl font-bold mb-8 tracking-tight"
          >
            Find a Partner.
          </motion.h1>
          <p className="text-zinc-400 text-xl font-light mb-12 max-w-2xl mx-auto">
            DOUBL is integrated into the world's most innovative retail experiences. Locate a store to scan in person or shop online with confidence.
          </p>

          <div className="max-w-2xl mx-auto flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
              <input 
                type="text" 
                placeholder="Search retailers by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-indigo-500 transition-all"
              />
            </div>
            
            <div className="flex gap-2 bg-zinc-900 p-2 rounded-xl border border-zinc-800 overflow-x-auto">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap ${
                    selectedCategory === cat ? 'bg-white text-zinc-950' : 'text-zinc-500 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4.2 Partner Store Grid */}
      <section className="max-w-7xl mx-auto px-6 -mt-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRetailers.map((retailer) => (
            <motion.div
              layoutId={retailer.id}
              key={retailer.id}
              onClick={() => setSelectedRetailer(retailer)}
              className="bg-white border border-zinc-200 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all cursor-pointer group flex flex-col justify-between h-80"
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div className={`text-2xl font-serif font-black tracking-tighter ${
                    retailer.name === 'Aether Apparel' ? 'text-zinc-900' :
                    retailer.name === 'Theory' ? 'text-zinc-900 font-sans tracking-widest' :
                    retailer.name === 'Zegna' ? 'text-zinc-900 font-serif italic' : 'text-zinc-900'
                  }`}>
                    {retailer.logo}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-2 py-1 rounded">
                    {retailer.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600 transition-colors">{retailer.name}</h3>
                <div className="flex items-center gap-2 text-zinc-500 text-sm">
                  <MapPin className="w-4 h-4" />
                  {retailer.location}
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-zinc-100">
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">View Details</span>
                <ArrowRight className="w-4 h-4 text-zinc-300 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4.3 Retailer Detail View (Modal) */}
      <AnimatePresence>
        {selectedRetailer && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedRetailer(null)}
              className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm"
            />
            
            <motion.div 
              layoutId={selectedRetailer.id}
              className="bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl relative z-10 flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedRetailer(null)}
                className="absolute top-6 right-6 p-2 bg-zinc-100 rounded-full hover:bg-zinc-200 transition-colors z-20"
              >
                <X className="w-5 h-5 text-zinc-900" />
              </button>

              <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto">
                <div className="mb-8">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-600 mb-2">Partner Brand</h4>
                  <h2 className="text-4xl font-serif font-bold mb-4">{selectedRetailer.name}</h2>
                  <div className="flex gap-4">
                    <span className="flex items-center gap-1 text-xs text-zinc-500">
                      <Filter className="w-3 h-3" /> {selectedRetailer.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-zinc-500">
                      <MapPin className="w-3 h-3" /> {selectedRetailer.location}
                    </span>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h5 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-900 mb-4">
                      <Info className="w-4 h-4 text-indigo-600" /> 4.3.1 Brand Mission
                    </h5>
                    <p className="text-zinc-600 font-light leading-relaxed">
                      {selectedRetailer.mission}
                    </p>
                  </div>

                  <div>
                    <h5 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-900 mb-4">
                      <Filter className="w-4 h-4 text-indigo-600" /> 4.3.2 The Fit Guide
                    </h5>
                    <div className="bg-zinc-50 border border-zinc-100 p-6 rounded-2xl">
                      <p className="text-sm text-zinc-600 italic">
                        {selectedRetailer.fitGuide}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2 bg-zinc-950 p-8 md:p-12 text-white flex flex-col justify-between">
                <div>
                  <h5 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400 mb-8">
                    <MapPin className="w-4 h-4 text-indigo-400" /> 4.3.3 Store Locator
                  </h5>
                  
                  <div className="space-y-6">
                    {selectedRetailer.stores.map((store, i) => (
                      <div key={i} className="flex justify-between items-center group cursor-pointer border-b border-zinc-800 pb-4">
                        <div>
                          <p className="font-bold text-lg">{store}</p>
                          <p className="text-[10px] text-zinc-600 uppercase tracking-widest font-bold">Authorized DOUBL Hub</p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-zinc-700 group-hover:text-white transition-all" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-12">
                   <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold uppercase tracking-widest py-4 rounded-xl transition-all flex items-center justify-center gap-2">
                     Get Directions <MapPin className="w-4 h-4" />
                   </button>
                   <p className="text-center text-[10px] text-zinc-600 font-bold uppercase tracking-widest mt-4">
                     Visit any location for a manual audit scan.
                   </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default RetailerDirectory;
