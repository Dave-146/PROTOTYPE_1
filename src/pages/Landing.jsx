import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Plus, X } from 'lucide-react';

const Landing = () => {
  const navigate = useNavigate();
  const [activeHotspot, setActiveHotspot] = useState(null);

  const hotspots = [
    {
      id: 'chest',
      label: 'Shoulder Width',
      description: 'Precise shoulder measurement ensures proper garment drape and armhole fit.',
      position: { top: '25%', left: '45%' },
    },
    {
      id: 'waist',
      label: 'Waist & Belt',
      description: 'Accurate waist measurement determines how garments sit and cinch at your natural waistline.',
      position: { top: '45%', left: '48%' },
    },
    {
      id: 'hip',
      label: 'Hip Measurement',
      description: 'Hip width measurement ensures proper fit through the torso and prevents fabric pulling.',
      position: { top: '55%', left: '52%' },
    },
    {
      id: 'ankle',
      label: 'Inseam & Length',
      description: 'Precise inseam and leg length measurements ensure perfect hem placement and proportions.',
      position: { top: '85%', left: '50%' },
    },
  ];

  return (
    <div className="relative w-full bg-[#FBFDF9] flex flex-col items-center overflow-x-hidden overflow-y-visible">
      
      {/* 1. Hero (Editorial Fashion Forward) */}
      <section className="relative w-full min-h-screen bg-[#FBFDF9] flex items-start shrink-0 overflow-visible pb-32">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 w-full py-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24 items-start relative">
          </div>
          
          {/* Left: Massive Headline */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="flex flex-col pt-8 lg:pt-12 relative z-10"
            style={{
              justifyContent: 'center',
              alignItems: 'flex-start',
              paddingTop: '120px',
              paddingBottom: '120px',
              height: '100%'
            }}
          >
            <div className="text-left">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-black font-bold tracking-tight leading-[0.85]"
                style={{ 
                  fontFamily: '"Playfair Display", serif',
                  fontSize: '140px',
                  fontWeight: 100,
                  lineHeight: '120px',
                  marginBottom: '0px',
                  maxWidth: '450px'
                }}
              >
                THE END OF SIZING.
              </motion.h1>
            </div>
            
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/shopper/onboarding')}
              className="mt-16 bg-[#1A1B41] text-white px-12 py-5 rounded-full text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#25265a] transition-colors self-start border border-black/10 relative z-10"
            >
              Get My Style Guide
            </motion.button>
          </motion.div>
        </div>

        {/* Right: Infinite Scroll Masonry Grid - Full Viewport Height - Positioned absolutely to top of screen */}
        <div className="absolute top-0 right-6 md:right-12 h-screen w-[calc(50%-3rem)] md:w-[calc(50%-6rem)] overflow-visible lg:block hidden z-0" style={{ boxSizing: 'content-box', fontFamily: '"Playfair Display"' }}>
                {/* Left Column - Scrolls Up */}
                <div className="absolute left-0 top-0 w-[48%] h-full overflow-hidden">
                  <div className="animate-scroll-up space-y-4">
                    {/* Duplicate images for seamless loop */}
                    {[...Array(3)].map((_, loop) => (
                      <React.Fragment key={loop}>
                        <div className="relative aspect-[3/4] overflow-hidden">
                          <img 
                            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop" 
                            alt="Editorial fashion"
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="relative aspect-[4/5] overflow-hidden">
                          <img 
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop" 
                            alt="Editorial fashion"
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="relative aspect-[3/4] overflow-hidden">
                          <img 
                            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop" 
                            alt="Editorial fashion"
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <img 
                            src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1000&auto=format&fit=crop" 
                            alt="Editorial fashion"
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Right Column - Scrolls Down */}
                <div className="absolute right-0 top-0 w-[48%] h-full overflow-hidden">
                  <div className="animate-scroll-down space-y-4">
                    {/* Duplicate images for seamless loop */}
                    {[...Array(3)].map((_, loop) => (
                      <React.Fragment key={loop}>
                        <div className="relative aspect-[4/5] overflow-hidden">
                          <img 
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
                            alt="Editorial fashion"
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="relative aspect-[3/4] overflow-hidden">
                          <img 
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop" 
                            alt="Editorial fashion"
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <img 
                            src="https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?q=80&w=1000&auto=format&fit=crop" 
                            alt="Editorial fashion"
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="relative aspect-[3/4] overflow-hidden">
                          <img 
                            src="https://images.unsplash.com/photo-1485231183945-fee66f9de431?q=80&w=1000&auto=format&fit=crop" 
                            alt="Editorial fashion"
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
        </div>
      </section>

      {/* Diagonal 3D Measuring Tape with Brand Logos - Section Break */}
      <section className="relative w-full bg-[#FBFDF9] py-12 overflow-visible" style={{ zIndex: 30 }}>
        <div className="relative w-full" style={{ height: '120px' }}>
          <motion.div 
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute w-[120%] h-24 bg-white border-t-2 border-b-2 border-black/20 shadow-2xl"
            style={{ 
              transform: 'rotate(-2deg)',
              transformOrigin: 'left center',
              left: '-10%',
              top: '50%',
              marginTop: '-48px',
              background: 'linear-gradient(to bottom, #ffffff 0%, #f8f8f8 50%, #ffffff 100%)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8), inset 0 -1px 0 rgba(0,0,0,0.1)',
            }}
          >
            {/* Realistic Ruler Tick Marks */}
            <div className="absolute inset-0 flex items-center">
              {Array.from({ length: 50 }).map((_, i) => (
                <div 
                  key={i}
                  className="absolute h-full"
                  style={{ left: `${i * 2}%` }}
                >
                  <div className="absolute top-0 left-0 w-[1px] h-3 bg-black/40" />
                  {i % 5 === 0 && (
                    <>
                      <div className="absolute top-0 left-0 w-[1px] h-6 bg-black/60" />
                      <span className="absolute top-7 left-0 text-[8px] font-mono text-black/50 whitespace-nowrap" style={{ transform: 'translateX(-50%)' }}>
                        {i * 2}
                      </span>
                    </>
                  )}
                </div>
              ))}
            </div>
            
            {/* Brand Logos Scrolling */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden" style={{ width: '100%', left: '-14px' }}>
              <div className="flex items-center gap-24 animate-scroll-ruler">
                {[...Array(20)].map((_, i) => (
                  <div key={i} className="flex items-center gap-8 whitespace-nowrap">
                    <span className="text-[10px] font-bold tracking-[0.15em] text-[#1A1B41] uppercase">ACNE STUDIOS</span>
                    <span className="text-[10px] font-bold tracking-[0.15em] text-[#1A1B41] uppercase">LEVI'S</span>
                    <span className="text-[10px] font-bold tracking-[0.15em] text-[#1A1B41] uppercase">THEORY</span>
                    <span className="text-[10px] font-bold tracking-[0.15em] text-[#1A1B41] uppercase">ZEGNA</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Full-Bleed Editorial Product Showcase - Why DOUBL Works */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        {/* Full-bleed background image */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/images/product-showcase-woman-cream-jumpsuit.jpg" 
            alt="Woman in cream jumpsuit in minimalist white studio - joyful movement pose"
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback to a matching Unsplash image if local image not found
              e.target.src = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2000&auto=format&fit=crop';
            }}
          />
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-transparent to-transparent" />
        </div>

        {/* Text Content - Upper Left */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-32 pb-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            {/* Section Label */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-[#c85b40] rounded-full" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-500">
                The Anatomy of Fit
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-[0.9]">
              <span className="text-zinc-950">Why DOUBL</span>
              <span className="text-[#8B7355] italic font-normal"> Works</span>
            </h2>

            {/* Body Paragraph */}
            <p className="text-sm md:text-base text-zinc-600 font-light leading-relaxed max-w-xl">
              We offer flexible subscription-based design plans, giving you unlimited access to premium creative services.
            </p>
          </motion.div>
        </div>

        {/* Interactive Hotspot Markers */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          {hotspots.map((hotspot) => (
            <div
              key={hotspot.id}
              className="absolute pointer-events-auto"
              style={hotspot.position}
            >
              {/* Hotspot Button */}
              <motion.button
                onClick={() => setActiveHotspot(activeHotspot === hotspot.id ? null : hotspot.id)}
                className="relative w-12 h-12 bg-black rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Learn about ${hotspot.label}`}
              >
                <Plus className="w-6 h-6 text-white" />
                {/* Pulse animation ring */}
                <motion.div
                  className="absolute inset-0 border-2 border-black rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </motion.button>

              {/* Hotspot Info Tooltip */}
              <AnimatePresence>
                {activeHotspot === hotspot.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-16 left-1/2 -translate-x-1/2 w-64 bg-white rounded-lg shadow-2xl p-4 z-30"
                    style={{ pointerEvents: 'auto' }}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-sm text-zinc-900">{hotspot.label}</h3>
                      <button
                        onClick={() => setActiveHotspot(null)}
                        className="p-1 hover:bg-zinc-100 rounded transition-colors"
                        aria-label="Close"
                      >
                        <X className="w-4 h-4 text-zinc-600" />
                      </button>
                    </div>
                    <p className="text-xs text-zinc-600 font-light leading-relaxed">
                      {hotspot.description}
                    </p>
                    {/* Arrow pointing up */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-l border-t border-zinc-200" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Close overlay when clicking outside */}
        {activeHotspot && (
          <div
            className="absolute inset-0 z-10"
            onClick={() => setActiveHotspot(null)}
            style={{ pointerEvents: 'auto' }}
            aria-hidden="true"
          />
        )}
      </section>

      {/* 3. Product Showcase */}
      <section className="w-full py-32 bg-white text-zinc-950">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative aspect-[4/5] bg-zinc-100 overflow-hidden">
             <img 
               src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop" 
               alt="High fashion showcase"
               className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
             />
             <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex justify-between items-end">
                   <div>
                     <p className="text-white/70 text-xs tracking-widest uppercase font-bold mb-1">Look 01</p>
                     <p className="text-white font-serif text-2xl">The Architectural Coat</p>
                   </div>
                   <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold font-sans">
                     Match: 98%
                   </div>
                </div>
             </div>
          </div>
          <div className="order-1 md:order-2 flex flex-col justify-center">
            <h2 className="font-serif text-5xl md:text-6xl font-bold tracking-tight mb-8">
              Garments crafted for your geometry.
            </h2>
            <p className="text-xl text-zinc-600 font-light mb-10">
              Stop settling for 'Medium'. Our biometric engine translates your exact proportions into a universal standard, unlocking garments that drape, hug, and breathe exactly as the designer intended.
            </p>
            <button 
              onClick={() => navigate('/shopper/onboarding')}
              className="self-start border-b-2 border-zinc-950 pb-1 text-sm font-bold uppercase tracking-widest hover:text-zinc-500 hover:border-zinc-500 transition-colors"
            >
              Explore The Archive →
            </button>
          </div>
        </div>
      </section>

      {/* 4. 3-Step Process */}
      <section className="w-full py-32 bg-zinc-50 relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight mb-20 text-zinc-900">
            The Consultation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
             <div className="hidden md:block absolute top-[25%] left-[15%] right-[15%] h-[1px] bg-zinc-300 -z-10" />
             
             <div className="flex flex-col items-center">
               <div className="w-16 h-16 bg-white border border-zinc-200 shadow-sm flex items-center justify-center rounded-full mb-6 font-serif text-xl font-bold text-zinc-900">01</div>
               <h3 className="font-serif text-2xl font-bold mb-4 text-zinc-900">The Vibe Check</h3>
               <p className="text-zinc-600 text-sm">Select silhouettes that resonate with your personal aesthetic to build your visual profile.</p>
             </div>
             <div className="flex flex-col items-center">
               <div className="w-16 h-16 bg-white border border-zinc-200 shadow-sm flex items-center justify-center rounded-full mb-6 font-serif text-xl font-bold text-zinc-900">02</div>
               <h3 className="font-serif text-2xl font-bold mb-4 text-zinc-900">The Scan</h3>
               <p className="text-zinc-600 text-sm">Complete a brief demographic and brand history profile to calibrate the biometric engine.</p>
             </div>
             <div className="flex flex-col items-center">
               <div className="w-16 h-16 bg-zinc-950 border border-zinc-950 shadow-md flex items-center justify-center rounded-full mb-6 font-serif text-xl font-bold text-white">03</div>
               <h3 className="font-serif text-2xl font-bold mb-4 text-zinc-900">The Vault</h3>
               <p className="text-zinc-600 text-sm">Receive your universal Fit-Code. Store it in your Apple Wallet to unlock perfect sizing globally.</p>
             </div>
          </div>
        </div>
      </section>

      {/* 5. Testimonials */}
      <section className="w-full bg-zinc-950 py-32 text-center text-white border-b border-zinc-800">
         <div className="max-w-4xl mx-auto px-6">
            <div className="font-serif text-6xl text-indigo-500 mb-8 opacity-50">"</div>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight font-light tracking-wide mb-12">
              Finally, buying vintage denim online isn't a gamble. DOUBL knew my rise preference before I even clicked 'Add to Cart'. It's like having a bespoke tailor in my browser.
            </h2>
            <div className="flex flex-col items-center gap-2">
               <p className="text-sm font-bold tracking-widest uppercase">Elena R.</p>
               <p className="text-xs text-zinc-500 font-sans tracking-widest uppercase">Style Minimalist</p>
            </div>
         </div>
      </section>

      {/* 6. Security Block */}
      <section className="w-full bg-zinc-900 py-24 text-white">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-center text-center md:text-left">
          <div className="md:w-1/3 flex justify-center md:justify-start">
             <div className="w-32 h-32 border-4 border-indigo-500/30 rounded-full flex items-center justify-center relative">
                <div className="w-24 h-24 border-2 border-indigo-500/50 rounded-full absolute" />
                <svg className="w-8 h-8 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
             </div>
          </div>
          <div className="md:w-2/3">
            <h2 className="font-serif text-4xl font-bold mb-4">Your Body. Your Data.</h2>
            <p className="text-zinc-400 text-lg font-light mb-6">
              We employ military-grade, zero-knowledge encryption. Our retail partners see your match accuracy—they never see your measurements. Your biometric vault is exclusively yours.
            </p>
            <a href="#" className="text-xs text-indigo-400 font-bold uppercase tracking-widest hover:text-white transition-colors">Read our Privacy Manifesto →</a>
          </div>
        </div>
      </section>

      {/* 7. Pre-footer CTA */}
      <section className="w-full bg-zinc-950 py-32 relative overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-serif text-5xl font-bold text-white mb-8">Claim your perfect fit.</h2>
          <button 
             onClick={() => navigate('/shopper/onboarding')}
             className="bg-[#c85b40] text-white px-12 py-5 rounded-full text-sm font-bold tracking-widest uppercase hover:bg-[#a84c35] transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-300"
          >
             Get My Style Guide
          </button>
        </div>
      </section>

    </div>
  );
};

export default Landing;
