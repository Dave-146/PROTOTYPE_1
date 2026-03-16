import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <div className="bg-white min-h-screen pb-32">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2000&auto=format&fit=crop" 
          alt="Fashion Studio" 
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 text-center text-white px-6 w-full max-w-4xl pt-20"
        >
          <p className="text-sm font-bold tracking-widest uppercase mb-6 text-zinc-300">About Us</p>
          <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            Stop Guessing.<br/>Start Wearing.
          </h1>
        </motion.div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl font-bold mb-8 text-zinc-900">The Future of Fit</h2>
          <p className="font-sans text-xl md:text-2xl text-zinc-500 font-light leading-relaxed">
            DOUBL was founded on a simple premise: the standard sizing system is fundamentally broken. We believe your body isn't a medium, a large, or a number. It's a masterpiece. Our mission is to eliminate the anxiety of the fitting room by translating your unique geometry into a universal language of fit.
          </p>
        </motion.div>
      </section>

      {/* Team Bios */}
      <section className="py-24 px-6 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-zinc-900 mb-4">Meet the Founders</h2>
            <p className="text-zinc-500 uppercase tracking-widest text-sm font-bold">The minds behind the code</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Founder 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="w-64 h-80 overflow-hidden mb-6 bg-zinc-200">
                <img 
                   src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop" 
                   alt="Jane Doe"
                   className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-2 text-zinc-900">Jane Doe</h3>
              <p className="text-xs uppercase tracking-widest text-zinc-400 font-bold mb-4">Co-Founder & CEO</p>
              <p className="text-zinc-500 font-light text-sm max-w-sm">
                With a decade of experience in luxury fashion retail, Jane witnessed firsthand the frustration of sizing inconsistencies. She leads DOUBL's vision to personalize the modern wardrobe.
              </p>
            </motion.div>

            {/* Founder 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="w-64 h-80 overflow-hidden mb-6 bg-zinc-200">
                <img 
                   src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop" 
                   alt="John Smith"
                   className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-2 text-zinc-900">John Smith</h3>
              <p className="text-xs uppercase tracking-widest text-zinc-400 font-bold mb-4">Co-Founder & CTO</p>
              <p className="text-zinc-500 font-light text-sm max-w-sm">
                An engineer obsessed with complex data models, John architected the biometric algorithms that power the DOUBL Fit-Code, bridging the gap between geometry and apparel.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
