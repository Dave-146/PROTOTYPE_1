import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, TrendingUp, Cpu, Users, Building2, Phone, Mail, Globe, MessageSquare, ArrowRight } from 'lucide-react';

const InvestorRelations = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-indigo-100">
      
      {/* 3.3.1 Hero Section: High-Level Vision */}
      <section className="pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <div className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
            Investor Relations
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            The Future of Fit is <span className="text-zinc-500 italic">Data-Driven.</span>
          </h1>
          <p className="text-xl text-zinc-500 font-light leading-relaxed mb-0">
            We’re disrupting the $200B apparel return problem with AI-powered biometric sizing. Scaling the infrastructure of digital tailor-made retail.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-1/2 relative"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-zinc-100 aspect-square">
             <img 
               src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop" 
               alt="Doubl Analytics Interface" 
               className="w-full h-full object-cover"
             />
          </div>
          <div className="absolute -bottom-10 -left-10 bg-white p-8 shadow-xl border border-zinc-50 hidden md:block rounded-2xl">
             <div className="flex items-center gap-4 mb-2">
                <TrendingUp className="text-indigo-600 w-5 h-5" />
                <span className="text-2xl font-bold">42%</span>
             </div>
             <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Avg. Return Reduction</p>
          </div>
        </motion.div>
      </section>

      {/* 3.3.2 The "Quick Pitch" (3 Pillars) */}
      <section className="py-32 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-6">
              <div className="w-12 h-12 bg-zinc-950 text-white rounded-full flex items-center justify-center font-serif italic text-xl">1</div>
              <h3 className="font-serif text-2xl font-bold">The Problem</h3>
              <p className="text-zinc-500 leading-relaxed font-light">
                Sizing is fundamentally broken. High returns drain retail margins, while customer confidence remains at an all-time low due to inconsistent brand blocks.
              </p>
            </div>
            <div className="space-y-6">
              <div className="w-12 h-12 bg-zinc-950 text-white rounded-full flex items-center justify-center font-serif italic text-xl">2</div>
              <h3 className="font-serif text-2xl font-bold">The Solution</h3>
              <p className="text-zinc-500 leading-relaxed font-light">
                Doubl's computer-vision 3D scan generates a persistent "Fit Code"—a cryptographic biometric hash that matches users to patterns with 98.4% accuracy.
              </p>
            </div>
            <div className="space-y-6">
              <div className="w-12 h-12 bg-zinc-950 text-white rounded-full flex items-center justify-center font-serif italic text-xl">3</div>
              <h3 className="font-serif text-2xl font-bold">The Traction</h3>
              <p className="text-zinc-500 leading-relaxed font-light">
                Series A funding secured. Enterprise beta with 5 major luxury houses completed. **App Launching Q1 2026.**
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3.3.3 Leadership & Governance */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="font-serif text-4xl font-bold mb-4">Leadership & Governance</h2>
            <p className="text-zinc-500 font-light">Domain expertise across e-commerce, computer vision, and high-fashion.</p>
          </div>
          <Link to="/about" className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-indigo-600 hover:text-indigo-700 transition-colors">
            View Full About Page <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex gap-8 items-start p-8 bg-zinc-50 rounded-2xl border border-zinc-100">
             <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 grayscale">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300" alt="Founder" className="w-full h-full object-cover" />
             </div>
             <div>
                <h4 className="font-serif text-xl font-bold mb-2">Bryn Morgan</h4>
                <p className="text-zinc-500 text-sm leading-relaxed font-light italic">
                  Former Head of Product at a tier-1 luxury fashion house. Expert in supply chain logistics and digital transformation.
                </p>
             </div>
          </div>
          <div className="flex gap-8 items-start p-8 bg-zinc-50 rounded-2xl border border-zinc-100">
             <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 grayscale">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300" alt="Founder" className="w-full h-full object-cover" />
             </div>
             <div>
                <h4 className="font-serif text-xl font-bold mb-2">Jess Thorne</h4>
                <p className="text-zinc-500 text-sm leading-relaxed font-light italic">
                  PhD in Computer Vision. Pioneered zero-knowledge proof applications for biometric processing in high-security environments.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* 3.3.4 Investor Contact Form */}
      <section className="py-32 px-6 bg-zinc-950 text-white">
        <div className="max-w-5xl mx-auto">
          {!submitted ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div>
                <h2 className="font-serif text-4xl font-bold mb-6">Investor Registry.</h2>
                <p className="text-zinc-400 font-light leading-relaxed mb-10">
                  Qualified institutional and accredited investors are invited to join our secure portal for access to the full data-room and technical roadmap.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-zinc-300">
                    <CheckCircle2 className="w-5 h-5 text-indigo-400" />
                    <span>Quarterly Performance Metrics</span>
                  </div>
                  <div className="flex items-center gap-4 text-zinc-300">
                    <CheckCircle2 className="w-5 h-5 text-indigo-400" />
                    <span>Proprietary IP Roadmap</span>
                  </div>
                  <div className="flex items-center gap-4 text-zinc-300">
                    <CheckCircle2 className="w-5 h-5 text-indigo-400" />
                    <span>Secure Data-Room Access</span>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Name</label>
                    <input required type="text" placeholder="Full Name" className="w-full bg-transparent border-b border-zinc-800 py-3 focus:outline-none focus:border-indigo-500 transition-colors" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Phone Number</label>
                    <input required type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-transparent border-b border-zinc-800 py-3 focus:outline-none focus:border-indigo-500 transition-colors" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Email Address</label>
                  <input required type="email" placeholder="investor@firm.com" className="w-full bg-transparent border-b border-zinc-800 py-3 focus:outline-none focus:border-indigo-500 transition-colors" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Company Name</label>
                    <input required type="text" placeholder="Firm Name" className="w-full bg-transparent border-b border-zinc-800 py-3 focus:outline-none focus:border-indigo-500 transition-colors" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Company Website</label>
                    <input required type="text" placeholder="www.firm.com" className="w-full bg-transparent border-b border-zinc-800 py-3 focus:outline-none focus:border-indigo-500 transition-colors" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Message</label>
                  <textarea rows="3" placeholder="Inquiry details..." className="w-full bg-transparent border-b border-zinc-800 py-3 focus:outline-none focus:border-indigo-500 transition-colors resize-none" />
                </div>

                <button type="submit" className="w-full bg-white text-zinc-950 font-bold uppercase tracking-widest py-5 rounded-full text-xs hover:bg-zinc-200 transition-colors mt-4">
                  Request Access
                </button>
              </form>
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-20 text-center max-w-2xl mx-auto"
            >
              <div className="w-20 h-20 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-10">
                <CheckCircle2 className="w-10 h-10 text-indigo-400" />
              </div>
              <h2 className="font-serif text-5xl font-bold mb-6">Inquiry Received.</h2>
              <p className="text-zinc-400 font-light text-xl leading-relaxed mb-10">
                A member of the executive team (Bryn or Jess) will review your credentials and provide secure data-room access within 4 business hours.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 hover:text-white transition-colors"
              >
                Send Another Inquiry
              </button>
            </motion.div>
          )}
        </div>
      </section>

    </div>
  );
};

export default InvestorRelations;
