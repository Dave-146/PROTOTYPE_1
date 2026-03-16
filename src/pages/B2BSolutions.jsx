import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const B2BSolutions = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-80px)] bg-zinc-950 text-white pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header content */}
        <div className="max-w-3xl mb-24">
           <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight mb-8">
             Enterprise Intelligence.
           </h1>
           <p className="font-sans text-xl text-zinc-400 font-light tracking-wide leading-relaxed">
             DOUBL doesn't just reduce returns; it transforms your supply chain by converting previously invisible body geometry into actionable, predictive analytics.
           </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="bg-zinc-900 border border-zinc-800 p-12"
           >
             <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-8">
               <svg className="w-8 h-8 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
             </div>
             <h3 className="font-serif text-3xl font-bold mb-4">Zero-Guessing Returns Reduction</h3>
             <p className="text-zinc-400 font-light mb-8">
               By matching garments to the exact geometric requirements of the Shopper, DOUBL effectively eliminates "bracketing" (buying multiple sizes to return the ones that don't fit). Watch return rates plummet by an estimated 42% in year one.
             </p>
             <ul className="space-y-3 text-sm text-zinc-300 font-bold uppercase tracking-widest">
               <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500"/> Drastically lower reverse logistics costs</li>
               <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500"/> Eliminate "Wardrobing" habits</li>
               <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500"/> Improve customer lifetime value</li>
             </ul>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="bg-zinc-900 border border-zinc-800 p-12"
           >
             <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-8">
               <svg className="w-8 h-8 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
             </div>
             <h3 className="font-serif text-3xl font-bold mb-4">Predictive Inventory Analytics</h3>
             <p className="text-zinc-400 font-light mb-8">
               Stop manufacturing garments for an idealized standard. Aggregate anonymized body data from your shoppers to dynamically adjust your manufacturing size breaks.
             </p>
             <ul className="space-y-3 text-sm text-zinc-300 font-bold uppercase tracking-widest">
               <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500"/> Optimize cutting tickets</li>
               <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500"/> Reduce deadstock inventory</li>
               <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500"/> Future-proof collection sizing</li>
             </ul>
           </motion.div>
        </div>

        {/* Integration Preview block */}
        <section className="bg-zinc-900 border border-zinc-800 flex flex-col md:flex-row overflow-hidden">
           <div className="md:w-1/2 p-12 flex flex-col justify-center">
             <h3 className="font-serif text-4xl font-bold mb-6">Seamless Platform Integration.</h3>
             <p className="text-zinc-400 mb-8 font-light">
               DOUBL injects a highly responsive "Match Confidence" widget directly onto your Product Data Pages via a lightweight SDK. Native support for Shopify Plus, Salesforce Commerce Cloud, and commercetools.
             </p>
             <button
               onClick={() => navigate('/brands/demo')}
               className="self-start text-xs font-bold uppercase tracking-widest border-b border-indigo-400 pb-1 text-indigo-400 hover:text-indigo-300 hover:border-indigo-300 transition-colors"
             >
               View API Documentation →
             </button>
           </div>
           {/* Mock Integration Visual */}
           <div className="md:w-1/2 bg-zinc-950 p-12 relative flex items-center justify-center border-l border-zinc-800">
             <div className="bg-white w-full max-w-sm rounded overflow-hidden shadow-2xl">
               <div className="h-4 bg-zinc-100 flex items-center px-2 space-x-1">
                 <div className="w-1.5 h-1.5 rounded-full bg-red-400"/>
                 <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"/>
                 <div className="w-1.5 h-1.5 rounded-full bg-green-400"/>
               </div>
               <div className="p-6">
                 <div className="w-full h-40 bg-zinc-200 mb-4 animate-pulse"/>
                 <div className="w-3/4 h-4 bg-zinc-200 mb-2"/>
                 <div className="w-1/4 h-4 bg-zinc-200 mb-6"/>
                 
                 {/* The DOUBL Widget */}
                 <div className="w-full border border-indigo-200 bg-indigo-50/50 p-4 rounded flex justify-between items-center">
                   <div className="flex items-center gap-3">
                     <div className="w-6 h-6 bg-indigo-600 rounded text-white flex justify-center items-center text-[10px] font-bold font-serif">D</div>
                     <span className="text-zinc-800 text-xs font-bold">Size L is a 96% Match</span>
                   </div>
                 </div>
               </div>
             </div>
           </div>
        </section>

      </div>
    </div>
  );
};

export default B2BSolutions;
