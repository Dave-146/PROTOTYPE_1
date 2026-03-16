import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Database, TrendingDown, ShieldCheck, ChevronRight, ChevronLeft, Loader2 } from 'lucide-react';

const BRANDS_DEMO_STORAGE_KEY = 'brandshome_demo_form';

const testimonials = [
  {
    quote: "Integrating DOUBL's Fit-Code API reduced our quarterly return rate by 42%. It's not just a feature; it's a fundamental shift in our operational efficiency.",
    author: "Sarah Jenkins",
    role: "VP of E-commerce, Aether Apparel"
  },
  {
    quote: "The biometric data insights allowed us to completely restructure our sizing blocks for the AW24 collection. We are finally designing for our actual customer geometry.",
    author: "Marcus Thorne",
    role: "Head of Design, Minimalist Archive"
  },
  {
    quote: "Implementation took less than a week. The ROI was apparent in the first month. Customers love the 'Zero-Guessing' guarantee.",
    author: "Elena Rodriguez",
    role: "Director of Operations, Century Denim"
  }
];

const BrandsHome = () => {
  const navigate = useNavigate();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isSubmittingDemo, setIsSubmittingDemo] = useState(false);
  
  // Load saved form data from sessionStorage
  const loadSavedData = () => {
    try {
      const saved = sessionStorage.getItem(BRANDS_DEMO_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (error) {
      console.warn('Failed to load BrandsHome demo form data:', error);
    }
    return {
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      revenue: '',
    };
  };

  const [demoFormData, setDemoFormData] = useState(loadSavedData);

  // Save form data to sessionStorage
  useEffect(() => {
    try {
      sessionStorage.setItem(BRANDS_DEMO_STORAGE_KEY, JSON.stringify(demoFormData));
    } catch (error) {
      console.warn('Failed to save BrandsHome demo form data:', error);
    }
  }, [demoFormData]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-zinc-950 min-h-screen text-white font-sans overflow-x-hidden">
      
      {/* 2.0.1 Hero Section */}
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center px-6 pt-24 pb-12 overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-indigo-900 rounded-full blur-[150px] -z-10 opacity-30" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-zinc-800 rounded-full blur-[100px] -z-10 opacity-40" />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl z-10"
        >
          <div className="inline-block px-4 py-1.5 border border-zinc-700/50 rounded-full text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase mb-8 backdrop-blur-sm bg-zinc-900/30">
            DOUBL FOR ENTERPRISE
          </div>
          
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 leading-[0.9]">
            Precision That <br/><span className="text-zinc-500 italic font-light">Performs.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-400 font-light tracking-wide mb-12 max-w-3xl mx-auto leading-relaxed">
            Eliminate sizing guesswork. Reduce return rates by up to 40% and unlock unprecedented body-data insights with our biometric integration suite.
          </p>

          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
             <button 
               onClick={() => document.getElementById('demo-contact').scrollIntoView({ behavior: 'smooth' })}
               className="bg-white text-zinc-950 px-10 py-4 font-bold tracking-widest uppercase text-xs hover:bg-zinc-200 shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] transition-all"
             >
               Request Integration Demo
             </button>
             <button 
               onClick={() => navigate('/brands/solutions')}
               className="bg-zinc-900 border border-zinc-700 text-white px-10 py-4 font-bold tracking-widest uppercase text-xs hover:bg-zinc-800 transition-all group flex items-center justify-center gap-2"
             >
               Explore Solutions <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
             </button>
          </motion.div>
        </motion.div>
      </section>

      {/* 2.0.4 Partner Logos (Placed right under hero for authoritative hook) */}
      <section className="w-full bg-zinc-900 py-16 border-y border-zinc-800/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-zinc-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-10">Powering Next-Gen Retail For</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale">
             <div className="text-2xl font-serif font-black tracking-tighter text-white">AETHER</div>
             <div className="text-2xl font-sans font-medium tracking-widest text-white">THEORY</div>
             <div className="text-xl font-serif italic font-bold tracking-wider text-white">Acne Studios</div>
             <div className="text-2xl font-sans font-black tracking-tighter text-white">ZARA</div>
             <div className="text-xl font-serif font-bold tracking-wide text-white">REFORMATION</div>
          </div>
        </div>
      </section>

      {/* 2.0.2 Partner Solutions */}
      <section className="w-full py-32 bg-zinc-950 px-6 relative">
         <div className="max-w-7xl mx-auto">
            <div className="mb-20">
               <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">The Integration Suite</h2>
               <p className="text-zinc-500 text-lg font-light max-w-2xl">A unified API architecture designed to seamlessly bolt into your existing checkout flow, requiring zero heavy lifting from your engineering team.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="bg-zinc-900/50 border border-zinc-800 p-10 hover:border-zinc-600 transition-colors group">
                  <div className="w-14 h-14 bg-zinc-800 rounded-sm flex items-center justify-center mb-8 group-hover:bg-indigo-900/50 transition-colors border border-zinc-700">
                     <TrendingDown className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-4">Zero-Guessing Returns</h3>
                  <p className="text-zinc-400 font-light leading-relaxed text-sm">Eliminate bracket buying. Customers bypass standard size selection, relying strictly on our geometric match algorithm to purchase the exact size verified by their Fit-Code.</p>
               </div>
               
               <div className="bg-zinc-900/50 border border-zinc-800 p-10 hover:border-zinc-600 transition-colors group">
                  <div className="w-14 h-14 bg-zinc-800 rounded-sm flex items-center justify-center mb-8 group-hover:bg-indigo-900/50 transition-colors border border-zinc-700">
                     <Database className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-4">Volumetric Analytics</h3>
                  <p className="text-zinc-400 font-light leading-relaxed text-sm">Access anonymized aggregate data on the exact physical geometry of your customer base. Stop designing for hypothetical models; start tailoring to your actual audience.</p>
               </div>

               <div className="bg-zinc-900/50 border border-zinc-800 p-10 hover:border-zinc-600 transition-colors group">
                  <div className="w-14 h-14 bg-zinc-800 rounded-sm flex items-center justify-center mb-8 group-hover:bg-indigo-900/50 transition-colors border border-zinc-700">
                     <ShieldCheck className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-4">Secure Middleware</h3>
                  <p className="text-zinc-400 font-light leading-relaxed text-sm">DOUBL acts as a cryptographic buffer. You receive the precise size match and the confidence score—you never handle, store, or accept liability for raw biometric data.</p>
               </div>
            </div>
         </div>
      </section>

      {/* 2.0.3 ROI Metrics (Dashboard UI) */}
      <section className="w-full py-32 bg-zinc-900 px-6 border-y border-zinc-800/50">
         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="lg:w-1/2">
               <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Quantifiable Results</h2>
               <p className="text-zinc-400 text-lg font-light mb-10 leading-relaxed">
                  Our partners don't just improve customer satisfaction; they reclaim massive portions of their bottom line previously lost to reverse logistics, restocking fees, and markdown liabilities from returns.
               </p>
               <div className="space-y-6">
                  <div className="flex items-center gap-6 border-l-2 border-indigo-500 pl-6">
                     <div className="text-4xl font-serif font-light text-white">-38%</div>
                     <div className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Average Reduction in<br/>Return Volume</div>
                  </div>
                  <div className="flex items-center gap-6 border-l-2 border-zinc-700 pl-6">
                     <div className="text-4xl font-serif font-light text-white">+14%</div>
                     <div className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Increase in<br/>Conversion Rate</div>
                  </div>
                  <div className="flex items-center gap-6 border-l-2 border-zinc-700 pl-6">
                     <div className="text-4xl font-serif font-light text-white">4.2x</div>
                     <div className="text-xs uppercase tracking-widest text-zinc-500 font-bold">First-year<br/>Return on Investment</div>
                  </div>
               </div>
            </div>

            <div className="lg:w-1/2 w-full">
               <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
                 className="w-full border border-zinc-800 bg-zinc-950 rounded-lg p-6 relative shadow-2xl"
               >
                 {/* Mock Window Header */}
                 <div className="flex gap-2 mb-8 pb-4 border-b border-zinc-800">
                   <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                   <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                   <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                   <div className="ml-4 text-[10px] text-zinc-500 font-mono">DOUBL_ANALYTICS_CONSOLE</div>
                 </div>

                 <h4 className="text-zinc-500 font-bold uppercase tracking-[0.2em] text-[10px] mb-6">Live Biometric Distribution Heatmap</h4>
                 <div className="flex items-end justify-between h-48 gap-1">
                   {[...Array(40)].map((_, i) => (
                     <motion.div 
                       key={i}
                       animate={{ height: [`${Math.random() * 40 + 10}%`, `${Math.random() * 80 + 20}%`, `${Math.random() * 40 + 10}%`] }}
                       transition={{ duration: Math.random() * 3 + 2, repeat: Infinity, ease: "easeInOut" }}
                       className="w-full bg-indigo-500/20 rounded-t-sm"
                       style={{ backgroundColor: `rgba(99, 102, 241, ${Math.random() * 0.4 + 0.1})` }}
                     />
                   ))}
                 </div>
                 <div className="mt-4 flex justify-between text-[10px] tracking-widest text-zinc-600 font-bold uppercase border-t border-zinc-800 pt-4">
                    <span>Chest Breadth</span>
                    <span>Waist-to-Hip Ratio</span>
                    <span>Inseam Matrix</span>
                 </div>
               </motion.div>
            </div>

         </div>
      </section>

      {/* 2.0.5 Testimonial Slider (Our Partners Voices) */}
      <section className="w-full py-32 bg-zinc-950 px-6 relative overflow-hidden">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-zinc-900 rounded-full blur-[100px] -z-10 opacity-50 pointer-events-none" />
         
         <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="font-serif text-3xl font-bold mb-16 text-zinc-700">"Our Partner Voices"</h2>
            
            <div className="relative min-h-[250px] flex items-center justify-center">
               <AnimatePresence mode="wait">
                  <motion.div
                     key={currentTestimonial}
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     exit={{ opacity: 0, x: -20 }}
                     transition={{ duration: 0.5 }}
                     className="absolute w-full"
                  >
                     <p className="font-serif text-2xl md:text-4xl text-white font-light leading-snug mb-8 px-12">
                        {testimonials[currentTestimonial].quote}
                     </p>
                     <div className="flex flex-col items-center">
                        <span className="text-xs font-bold uppercase tracking-widest text-white mb-1">
                           {testimonials[currentTestimonial].author}
                        </span>
                        <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
                           {testimonials[currentTestimonial].role}
                        </span>
                     </div>
                  </motion.div>
               </AnimatePresence>
            </div>

            <div className="flex justify-center gap-6 mt-16">
               <button onClick={prevTestimonial} className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-zinc-800 hover:text-white text-zinc-400 transition-colors">
                  <ChevronLeft className="w-5 h-5" />
               </button>
               <button onClick={nextTestimonial} className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-zinc-800 hover:text-white text-zinc-400 transition-colors">
                  <ChevronRight className="w-5 h-5" />
               </button>
            </div>
         </div>
      </section>

      {/* 2.0.6 Contact Form (Request A Demo) */}
      <section id="demo-contact" className="w-full py-32 bg-zinc-900 px-6 border-t border-zinc-800">
         <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
               <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Request A Demo Today</h2>
               <p className="text-zinc-400 font-light">See exactly how DOUBL integrates with your existing tech stack and immediately impacts your bottom line.</p>
            </div>

            <form className="bg-zinc-950 p-8 md:p-12 border border-zinc-800 shadow-2xl space-y-8" onSubmit={(e) => { 
              e.preventDefault(); 
              setIsSubmittingDemo(true);
              setTimeout(() => {
                alert("Demo request submitted (Mock)");
                setIsSubmittingDemo(false);
                // Clear saved data on successful submission
                try {
                  sessionStorage.removeItem(BRANDS_DEMO_STORAGE_KEY);
                } catch (error) {
                  console.warn('Failed to clear BrandsHome demo form data:', error);
                }
              }, 1000);
            }} aria-label="Request a demo form">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                     <label htmlFor="brands-firstname" className="block text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-500 mb-3">First Name</label>
                     <input 
                       id="brands-firstname" 
                       type="text" 
                       value={demoFormData.firstName}
                       onChange={(e) => setDemoFormData(prev => ({ ...prev, firstName: e.target.value }))}
                       aria-required="true" 
                       className="w-full bg-transparent border-b border-zinc-700 py-2 text-white placeholder-zinc-700 focus:outline-none focus:border-indigo-500 transition-colors" 
                       placeholder="Jane" 
                       required 
                     />
                  </div>
                  <div>
                     <label htmlFor="brands-lastname" className="block text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-500 mb-3">Last Name</label>
                     <input 
                       id="brands-lastname" 
                       type="text" 
                       value={demoFormData.lastName}
                       onChange={(e) => setDemoFormData(prev => ({ ...prev, lastName: e.target.value }))}
                       aria-required="true" 
                       className="w-full bg-transparent border-b border-zinc-700 py-2 text-white placeholder-zinc-700 focus:outline-none focus:border-indigo-500 transition-colors" 
                       placeholder="Doe" 
                       required 
                     />
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                     <label htmlFor="brands-email" className="block text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-500 mb-3">Work Email</label>
                     <input 
                       id="brands-email" 
                       type="email" 
                       value={demoFormData.email}
                       onChange={(e) => setDemoFormData(prev => ({ ...prev, email: e.target.value }))}
                       aria-required="true" 
                       className="w-full bg-transparent border-b border-zinc-700 py-2 text-white placeholder-zinc-700 focus:outline-none focus:border-indigo-500 transition-colors" 
                       placeholder="jane@company.com" 
                       required 
                     />
                  </div>
                  <div>
                     <label htmlFor="brands-company" className="block text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-500 mb-3">Company Name</label>
                     <input 
                       id="brands-company" 
                       type="text" 
                       value={demoFormData.company}
                       onChange={(e) => setDemoFormData(prev => ({ ...prev, company: e.target.value }))}
                       aria-required="true" 
                       className="w-full bg-transparent border-b border-zinc-700 py-2 text-white placeholder-zinc-700 focus:outline-none focus:border-indigo-500 transition-colors" 
                       placeholder="Company Inc." 
                       required 
                     />
                  </div>
               </div>

               <div>
                  <label htmlFor="brands-revenue" className="block text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-500 mb-3">Annual E-commerce Revenue</label>
                  <select 
                    id="brands-revenue" 
                    value={demoFormData.revenue}
                    onChange={(e) => setDemoFormData(prev => ({ ...prev, revenue: e.target.value }))}
                    aria-label="Annual e-commerce revenue" 
                    className="w-full bg-zinc-900 border border-zinc-700 py-3 px-4 text-white focus:outline-none focus:border-indigo-500 transition-colors text-sm appearance-none"
                  >
                     <option value="" disabled>Select an option</option>
                     <option value="tier1">$1M - $10M</option>
                     <option value="tier2">$10M - $50M</option>
                     <option value="tier3">$50M - $250M</option>
                     <option value="tier4">$250M+</option>
                  </select>
               </div>

               <div className="pt-4 border-t border-zinc-800">
                  <button 
                    type="submit" 
                    disabled={isSubmittingDemo}
                    className="w-full bg-white text-zinc-950 py-4 text-sm font-bold tracking-widest uppercase hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmittingDemo ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      'Submit Request'
                    )}
                  </button>
               </div>
               <p className="text-center text-xs text-zinc-600 font-light mt-4">
                  By submitting this form, you agree to our B2B Terms of Service and Privacy Policy.
               </p>
            </form>
         </div>
      </section>

    </div>
  );
};

export default BrandsHome;
