import React from 'react';
import { motion } from 'framer-motion';

const Resources = () => {
  return (
    <div className="bg-white min-h-screen pb-32">
      {/* 1.2.1 Hero Section */}
      <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1 border border-zinc-200 rounded-full text-xs font-bold tracking-widest text-zinc-500 uppercase mb-8">
            The Knowledge Base
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 mb-6">
            Sartorial Intelligence.
          </h1>
          <p className="text-xl text-zinc-500 font-light max-w-2xl mx-auto">
            Deep dives into the intersection of biometric engineering and modern bespoke tailoring.
          </p>
        </motion.div>
      </section>

      {/* 1.2.2 Featured Article Banner */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
         <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative h-[500px] w-full overflow-hidden cursor-pointer"
         >
            <img 
               src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2000&auto=format&fit=crop" 
               alt="Featured Article" 
               className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full md:w-2/3">
               <div className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-4">Featured Report</div>
               <h2 className="font-serif text-4xl md:text-5xl text-white font-bold mb-4 leading-tight">
                 The End of Vanity Sizing: How Algorithms Are Reshaping the Cutting Room.
               </h2>
               <p className="text-zinc-300 font-light mb-8 max-w-xl">
                 An exclusive look at how leading luxury houses are quietly abandoning standardized size charts in favor of dynamic biometric grading.
               </p>
               <button className="bg-white text-zinc-950 px-8 py-3 rounded-none text-xs font-bold tracking-widest uppercase hover:bg-zinc-200 transition-colors shadow-lg">
                 Read Article
               </button>
            </div>
         </motion.div>
      </section>

      {/* 1.2.3 Article Grid */}
      <section className="px-6 max-w-7xl mx-auto mb-32">
         <div className="flex justify-between items-end border-b border-zinc-200 pb-4 mb-12">
            <h3 className="font-serif text-3xl font-bold text-zinc-900">Trending Now</h3>
            <button className="text-xs font-bold uppercase tracking-widest text-indigo-600 hover:text-indigo-800 transition-colors">
               View All
            </button>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Article Card 1 */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="group cursor-pointer flex flex-col h-full"
            >
               <div className="w-full h-64 overflow-hidden mb-6 bg-zinc-100">
                  <img src="https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800&auto=format&fit=crop" alt="Article 1" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" />
               </div>
               <div className="text-[10px] font-bold tracking-widest uppercase text-zinc-400 mb-3">Industry Insights • 5 min read</div>
               <h4 className="font-serif text-xl font-bold text-zinc-900 mb-3 group-hover:text-indigo-600 transition-colors">Digital Draping: The Physics of Fabric Simulation</h4>
               <p className="text-zinc-500 text-sm font-light flex-grow">How modern rendering engines accurately predict tension and drape on individualized body models before a single cut is made.</p>
            </motion.div>

            {/* Article Card 2 */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="group cursor-pointer flex flex-col h-full"
            >
               <div className="w-full h-64 overflow-hidden mb-6 bg-zinc-100">
                  <img src="https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?q=80&w=800&auto=format&fit=crop" alt="Article 2" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" />
               </div>
               <div className="text-[10px] font-bold tracking-widest uppercase text-zinc-400 mb-3">Consumer Trends • 8 min read</div>
               <h4 className="font-serif text-xl font-bold text-zinc-900 mb-3 group-hover:text-indigo-600 transition-colors">The Sustainability Metrics of Perfect Fit</h4>
               <p className="text-zinc-500 text-sm font-light flex-grow">Analyzing the environmental impact reduction achieved when garment return rates are aggressively minimized via biometric sorting.</p>
            </motion.div>

            {/* Article Card 3 */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="group cursor-pointer flex flex-col h-full"
            >
               <div className="w-full h-64 overflow-hidden mb-6 bg-zinc-100">
                  <img src="https://images.unsplash.com/photo-1558769132-cb1fac089431?q=80&w=800&auto=format&fit=crop" alt="Article 3" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" />
               </div>
               <div className="text-[10px] font-bold tracking-widest uppercase text-indigo-600 mb-3">Case Study • 4 min read</div>
               <h4 className="font-serif text-xl font-bold text-zinc-900 mb-3 group-hover:text-indigo-600 transition-colors">Aether Apparel: Zero Deadstock</h4>
               <p className="text-zinc-500 text-sm font-light flex-grow">How the technical outerwear brand leveraged DOUBL profiles to pre-sell their Winter '25 collection with zero inventory waste.</p>
            </motion.div>
         </div>
      </section>

      {/* 1.2.4 Newsletter Signup CTA */}
      <section className="px-6 max-w-7xl mx-auto">
         <div className="bg-zinc-950 p-12 md:p-20 flex flex-col md:flex-row items-center justify-between shadow-2xl">
            <div className="md:w-1/2 mb-10 md:mb-0 text-white">
               <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">Stay Ahead of the Curve.</h3>
               <p className="text-zinc-400 font-light max-w-md">
                 Join our exclusive digest for weekly insights on the convergence of fashion, data, and biometric design.
               </p>
            </div>
            <div className="md:w-1/2 w-full max-w-md">
               <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="relative">
                     <input 
                       type="email" 
                       placeholder="Enter your email address" 
                       className="w-full bg-zinc-900 border border-zinc-700 text-white px-6 py-4 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                     />
                     <button 
                       type="submit"
                       className="absolute right-0 top-0 bottom-0 bg-white text-zinc-950 px-6 font-bold uppercase tracking-widest text-xs hover:bg-zinc-200 transition-colors"
                     >
                       Subscribe
                     </button>
                  </div>
                  <p className="text-[10px] text-zinc-500 font-medium">By subscribing, you agree to our Privacy Policy. Opt out anytime.</p>
               </form>
            </div>
         </div>
      </section>

    </div>
  );
};

export default Resources;
