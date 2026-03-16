import React from 'react';
import { motion } from 'framer-motion';

const B2BAboutUs = () => {
  return (
    <div className="bg-zinc-950 min-h-screen text-white pb-32">
      {/* 2.1.1 Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden bg-zinc-950 border-b border-zinc-800">
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-zinc-950" />
        <img 
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop" 
          alt="Enterprise Logistics" 
          className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale"
        />
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 text-center px-6 w-full max-w-4xl pt-20"
        >
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase mb-6 text-zinc-500">About DOUBL</p>
          <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            Precision Commerce.
          </h1>
        </motion.div>
      </section>

      {/* 2.1.2 Mission Statement (The Future) */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center border-b border-zinc-900/50">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl font-bold mb-8 text-white">The Future of Retail Architecture</h2>
          <p className="font-sans text-xl md:text-2xl text-zinc-400 font-light leading-relaxed">
            DOUBL was engineered to solve e-commerce's most expensive problem: the liability of returns. We don't just optimize sizing charts; we replace them entirely with a definitive biometric infrastructure. Our mission is to transform fit from a guessing game into a measurable, risk-free data standard for the world's leading brands.
          </p>
        </motion.div>
      </section>

      {/* 2.1.3 Team Bios (Meet the founders of DOUBL) */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-white mb-4">Architects of the Paradigm Shift</h2>
            <p className="text-zinc-500 uppercase tracking-[0.2em] text-[10px] font-bold">Meet the Leadership Team</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            {/* Founder 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-64 h-80 overflow-hidden mb-8 border border-zinc-800 bg-zinc-900 shadow-2xl">
                <img 
                   src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop" 
                   alt="Jane Doe"
                   className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-2 text-white">Jane Doe</h3>
              <p className="text-[10px] uppercase tracking-[0.2em] text-indigo-400 font-bold mb-4">Chief Executive Officer</p>
              <p className="text-zinc-400 font-light text-sm max-w-sm leading-relaxed">
                Driving the strategic vision for enterprise adoption. Jane previously scaled supply chain analytics at a global luxury conglomerate, recognizing the catastrophic margin impact of sizing inaccuracies.
              </p>
            </motion.div>

            {/* Founder 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-64 h-80 overflow-hidden mb-8 border border-zinc-800 bg-zinc-900 shadow-2xl">
                <img 
                   src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop" 
                   alt="John Smith"
                   className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-2 text-white">John Smith</h3>
              <p className="text-[10px] uppercase tracking-[0.2em] text-indigo-400 font-bold mb-4">Chief Technology Officer</p>
              <p className="text-zinc-400 font-light text-sm max-w-sm leading-relaxed">
                Spearheading the core biometric algorithm development and API security structure. John brings a decade of experience designing scalable data architecture for fintech and biometric security firms.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default B2BAboutUs;
