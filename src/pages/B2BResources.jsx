import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, BookOpen, FileText, PlayCircle } from 'lucide-react';

const B2BResources = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-zinc-950 min-h-screen text-white font-sans overflow-x-hidden">
      
      {/* 2.2.1 Hero Section */}
      <section className="relative w-full py-32 flex flex-col items-center justify-center px-6 overflow-hidden border-b border-zinc-900/50">
        <div className="absolute top-[-20%] right-[-10%] w-[40%] h-[40%] bg-indigo-900/20 rounded-full blur-[120px] -z-10" />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-zinc-800 rounded-full text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase mb-8">
             <BookOpen className="w-3 h-3 text-indigo-400" />
             Enterprise Insights
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 text-white">
            The Knowledge Hub.
          </h1>
          
          <p className="text-xl text-zinc-400 font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
            Case studies, technical documentation, and strategic insights on implementing biometric architecture at scale.
          </p>
        </motion.div>
      </section>

      {/* 2.2.2 Featured Resource/Case Study */}
      <section className="w-full py-16 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl overflow-hidden border border-zinc-800/50 group h-[500px] md:h-[600px] cursor-pointer shadow-2xl"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
             <img 
               src="https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2000&auto=format&fit=crop" 
               alt="Featured Case Study" 
               className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 opacity-40 grayscale"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
          </div>

          {/* Content Overlays */}
          <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full md:w-3/4 z-10">
             <div className="flex items-center gap-3 mb-6">
                <span className="bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest">Featured Case Study</span>
                <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                   <PlayCircle className="w-3 h-3" /> 12 Min Watch
                </span>
             </div>
             
             <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white font-bold mb-6 leading-[1.1]">
               The Future of Tactile Retail: Designing for Data, Not Demographics.
             </h2>
             
             <p className="text-zinc-400 font-light mb-10 max-w-xl text-base md:text-lg leading-relaxed">
               How top-tier brands are leveraging our biometric distribution models to radically restructure their supply chains, achieving near-zero deadstock on seasonal lines.
             </p>

             <button className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-[0.2em] group-hover:text-indigo-400 transition-colors">
               Access The Report <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
             </button>
          </div>
        </motion.div>
      </section>

      {/* 2.2.3 Article/Resource Grid */}
      <section className="w-full py-24 px-6 bg-zinc-900/20 border-y border-zinc-800/50">
        <div className="max-w-7xl mx-auto">
           <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-zinc-800 pb-6">
              <div>
                 <h3 className="font-serif text-4xl text-white font-bold mb-2">Technical & Strategic Guides</h3>
                 <p className="text-zinc-500 font-light">Implementation specs and ROI calculations.</p>
              </div>
              <button className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors mt-6 md:mt-0">
                 Explore Directory <ArrowRight className="w-3 h-3 inline ml-1" />
              </button>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Card 1 */}
              <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-zinc-600 transition-colors group cursor-pointer flex flex-col h-full"
              >
                 <div className="w-10 h-10 bg-zinc-800 rounded flex items-center justify-center mb-6 group-hover:bg-indigo-900/30 transition-colors">
                    <FileText className="w-4 h-4 text-indigo-400" />
                 </div>
                 <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-3">API Documentation</div>
                 <h4 className="font-serif text-xl font-bold text-white mb-3 flex-grow">Shopify & Demandware Integration Guide</h4>
                 <p className="text-zinc-400 font-light text-sm line-clamp-3 mb-6">A step-by-step technical manual on implementing the DOUBL secure middleware into existing E-commerce infrastructures without hijacking checkout flows.</p>
                 <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest flex items-center group-hover:text-indigo-400 transition-colors">Read Docs <ArrowRight className="w-3 h-3 ml-2" /></div>
              </motion.div>

              {/* Card 2 */}
              <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.1 }}
                 className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-zinc-600 transition-colors group cursor-pointer flex flex-col h-full"
              >
                 <div className="w-10 h-10 bg-zinc-800 rounded flex items-center justify-center mb-6 group-hover:bg-indigo-900/30 transition-colors">
                    <FileText className="w-4 h-4 text-indigo-400" />
                 </div>
                 <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-3">Financial Modeling</div>
                 <h4 className="font-serif text-xl font-bold text-white mb-3 flex-grow">Calculating Cost-Per-Return (CPR) Mitigation</h4>
                 <p className="text-zinc-400 font-light text-sm line-clamp-3 mb-6">A comprehensive framework for analyzing hidden reverse logistics costs and projecting exact margin improvements post-DOUBL integration.</p>
                 <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest flex items-center group-hover:text-indigo-400 transition-colors">Download PDF <ArrowRight className="w-3 h-3 ml-2" /></div>
              </motion.div>

              {/* Card 3 */}
              <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 }}
                 className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-zinc-600 transition-colors group cursor-pointer flex flex-col h-full md:col-span-2 lg:col-span-1"
              >
                 <div className="w-10 h-10 bg-zinc-800 rounded flex items-center justify-center mb-6 group-hover:bg-indigo-900/30 transition-colors">
                    <PlayCircle className="w-4 h-4 text-indigo-400" />
                 </div>
                 <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-3">Webinar Recording</div>
                 <h4 className="font-serif text-xl font-bold text-white mb-3 flex-grow">Defeating Bracket Buying & Fraud</h4>
                 <p className="text-zinc-400 font-light text-sm line-clamp-3 mb-6">A panel discussion featuring our CTO detailing how biometric verification eliminates multi-size carting behaviors and reduces wardrobing fraud.</p>
                 <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest flex items-center group-hover:text-indigo-400 transition-colors">Watch Video <ArrowRight className="w-3 h-3 ml-2" /></div>
              </motion.div>

           </div>
        </div>
      </section>

      {/* 2.2.4 CTA Banner (Request a Demo) */}
      <section className="w-full py-24 px-6 bg-zinc-950">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 p-12 md:p-20 text-center rounded-2xl shadow-2xl relative overflow-hidden">
           
           {/* Abstract Geometric Element */}
           <div className="absolute top-0 right-0 w-[500px] h-[500px] border border-zinc-800/30 rounded-full translate-x-1/3 -translate-y-1/3 opacity-20" />
           <div className="absolute top-0 right-0 w-[300px] h-[300px] border border-zinc-700/30 rounded-full translate-x-1/4 -translate-y-1/4 opacity-20" />

           <div className="relative z-10">
              <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-white">Stop Mapping. Start Measuring.</h2>
              <p className="text-zinc-400 font-light text-lg md:text-xl max-w-2xl mx-auto mb-10">
                 Ready to implement the new standard in sizing infrastructure? See exactly how DOUBL integrates with your existing tech stack.
              </p>
              <button 
                onClick={() => navigate('/brands/demo')}
                className="bg-white text-zinc-950 px-10 py-5 font-bold tracking-widest uppercase text-xs hover:bg-zinc-200 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(255,255,255,0.3)]"
              >
                Request a Live Demo
              </button>
           </div>
        </div>
      </section>

    </div>
  );
};

export default B2BResources;
