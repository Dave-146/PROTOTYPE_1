import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, PlayCircle, FileText, ChevronDown, CheckCircle2, MessageSquare, Phone, Globe, Building2 } from 'lucide-react';

const b2bFaqs = [
  {
    question: "How long does a typical B2B integration take?",
    answer: "For standard Shopify or Magento enterprise builds, integration typically takes 48-72 hours using our secure middleware. Custom headless implementations can range from 1-2 weeks depending on the complexity of your frontend architecture."
  },
  {
    question: "Can we customize the silhouette selection UI?",
    answer: "Yes. Our Growth Hub provides a CSS-injection layer that allows you to skin the silhouette cards and onboarding flow to match your brand's editorial aesthetic perfectly."
  },
  {
    question: "What's the accuracy rate for enterprise-level scanning?",
    answer: "DOUBL maintains a 98.4% measurement accuracy compared to professional tailoring standards. Our engine accounts for fabric type and ease-allowances specific to your brand's block patterns."
  },
  {
    question: "Do you offer on-site training for retail staff?",
    answer: "Our Platinum Partnership includes on-site training for flagship locations. For all other partners, we provide comprehensive high-definition video training modules available right here in the Growth Hub."
  }
];

const B2BSupport = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="bg-zinc-950 min-h-screen text-white font-sans selection:bg-indigo-500/30">
      
      {/* 2.3.1 Hero & Global Search Bar */}
      <section className="pt-32 pb-24 px-6 border-b border-zinc-900/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] -z-10" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-block px-4 py-1.5 border border-zinc-800 rounded-full text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase mb-8">
            Growth Hub
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Partner Success.
          </h1>
          
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-zinc-500" />
            </div>
            <input 
              type="text" 
              placeholder="Search documentation, video guides, or API specs..." 
              className="w-full bg-zinc-900 border border-zinc-800 text-white pl-16 pr-8 py-5 text-lg focus:outline-none focus:border-indigo-500 transition-all rounded-xl shadow-2xl"
            />
          </div>
        </motion.div>
      </section>

      {/* 2.3.2 Featured Video Block */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden border border-zinc-800 aspect-video group cursor-pointer"
        >
          <img 
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2000&auto=format&fit=crop" 
            alt="Onboarding Video" 
            className="w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 mb-6"
            >
              <PlayCircle className="w-10 h-10 text-white fill-white" />
            </motion.div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center px-6">
              Essential Training: Scaling Personalized Fit
            </h2>
            <p className="text-zinc-400 mt-4 tracking-widest text-[10px] uppercase font-bold">Comprehensive Onboarding Guide • 18:45</p>
          </div>
        </motion.div>
      </section>

      {/* 2.3.3 & 2.3.4 Video & Document Grids */}
      <section className="py-24 px-6 bg-zinc-900/20 border-y border-zinc-800/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* How-To Videos */}
          <div>
            <div className="flex items-center gap-4 mb-10 border-b border-zinc-800 pb-4">
               <h3 className="font-serif text-3xl font-bold">How-To Videos</h3>
            </div>
            <div className="space-y-6">
              {[
                "Managing your Biometric Dashboard",
                "Advanced Inventory Forecasting",
                "Setting Up White-Label Hubs"
              ].map((video, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl hover:bg-zinc-900 transition-colors group cursor-pointer">
                  <div className="w-24 h-16 bg-zinc-800 rounded overflow-hidden relative">
                    <img src={`https://images.unsplash.com/photo-${1550000000000 + (i*10000)}?q=80&w=300`} alt="vid" className="w-full h-full object-cover opacity-50" />
                    <PlayCircle className="absolute inset-0 m-auto w-6 h-6 text-white opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-zinc-200 group-hover:text-indigo-400 transition-colors">{video}</h4>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Video Tutorial</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Document Guides */}
          <div>
            <div className="flex items-center gap-4 mb-10 border-b border-zinc-800 pb-4">
               <h3 className="font-serif text-3xl font-bold">Technical Guides</h3>
            </div>
            <div className="space-y-4">
              {[
                "Privacy & Compliance Whitepaper (GDPR/CCPA)",
                "Secure Middleware Integration (V2.4)",
                "Custom UX Injection Specs",
                "ROI Modeling Framework"
              ].map((doc, i) => (
                <div key={i} className="flex items-center justify-between p-5 border border-zinc-800 rounded-xl hover:border-zinc-700 hover:bg-zinc-900/50 transition-all group cursor-pointer">
                  <div className="flex items-center gap-4">
                    <FileText className="w-5 h-5 text-indigo-400" />
                    <span className="text-sm font-medium text-zinc-300">{doc}</span>
                  </div>
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">PDF</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2.3.5 FAQ Accordion */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="font-serif text-4xl font-bold text-center mb-16">Partnership FAQs</h2>
        <div className="space-y-4">
          {b2bFaqs.map((faq, index) => (
            <div key={index} className="border border-zinc-800 rounded-xl bg-zinc-900/20 overflow-hidden">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left px-8 py-6 flex justify-between items-center hover:bg-zinc-900 transition-colors focus:outline-none"
              >
                <span className="font-bold text-lg text-zinc-200">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openFaq === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-zinc-500" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 text-zinc-400 font-light leading-relaxed border-t border-zinc-800 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* 2.3.6 Contact Form */}
      <section className="py-24 px-6 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto">
          {!submitted ? (
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
              {/* Context Block */}
              <div className="md:w-1/3 bg-zinc-900 p-12 flex flex-col justify-center">
                <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-8 border border-indigo-500/20">
                  <MessageSquare className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="font-serif text-3xl font-bold mb-4 italic">Direct Support.</h3>
                <p className="text-zinc-400 font-light text-sm leading-relaxed mb-6">
                  Need a priority technical review? Our dedicated partnership engineers are available to troubleshoot integration roadblocks within 2 business hours.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-zinc-500">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                    Priority Escalation
                  </div>
                  <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-zinc-500">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                    Implementation Audit
                  </div>
                </div>
              </div>

              {/* Form Block */}
              <div className="md:w-2/3 p-12">
                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative group">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2 block group-focus-within:text-indigo-400 transition-colors">Name</label>
                      <input required type="text" placeholder="Bryn Morgan" className="w-full bg-transparent border-b border-zinc-800 py-3 text-lg focus:outline-none focus:border-indigo-500 transition-colors" />
                    </div>
                    <div className="relative group">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2 block group-focus-within:text-indigo-400 transition-colors">Phone Number</label>
                      <div className="flex items-center gap-2 border-b border-zinc-800">
                        <Phone className="w-4 h-4 text-zinc-600" />
                        <input required type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-transparent py-3 text-lg focus:outline-none transition-colors" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative group">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2 block group-focus-within:text-indigo-400 transition-colors">Email Address</label>
                      <input required type="email" placeholder="bryn@retail-house.com" className="w-full bg-transparent border-b border-zinc-800 py-3 text-lg focus:outline-none focus:border-indigo-500 transition-colors" />
                    </div>
                    <div className="relative group">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2 block group-focus-within:text-indigo-400 transition-colors">Company Name</label>
                      <div className="flex items-center gap-2 border-b border-zinc-800">
                        <Building2 className="w-4 h-4 text-zinc-600" />
                        <input required type="text" placeholder="Sartorial House" className="w-full bg-transparent py-3 text-lg focus:outline-none transition-colors" />
                      </div>
                    </div>
                  </div>

                  <div className="relative group">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2 block group-focus-within:text-indigo-400 transition-colors">Company Website</label>
                    <div className="flex items-center gap-2 border-b border-zinc-800">
                      <Globe className="w-4 h-4 text-zinc-600" />
                      <input required type="text" placeholder="www.sartorialhouse.com" className="w-full bg-transparent py-3 text-lg focus:outline-none transition-colors" />
                    </div>
                  </div>

                  <div className="relative group">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2 block group-focus-within:text-indigo-400 transition-colors">Message</label>
                    <textarea required rows="3" placeholder="Describe your technical or growth inquiry..." className="w-full bg-transparent border-b border-zinc-800 py-3 text-lg focus:outline-none focus:border-indigo-500 transition-colors resize-none"></textarea>
                  </div>

                  <button type="submit" className="w-full md:w-auto bg-white text-zinc-950 px-12 py-5 font-bold tracking-widest uppercase text-xs hover:bg-zinc-200 transition-all rounded-full shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                    Submit Request
                  </button>
                </form>
              </div>
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-20 text-center max-w-4xl mx-auto shadow-2xl"
            >
              <div className="w-20 h-20 bg-indigo-500/10 rounded-full flex items-center justify-center mx-auto mb-10 border border-indigo-500/20">
                <CheckCircle2 className="w-10 h-10 text-indigo-400" />
              </div>
              <h2 className="font-serif text-5xl font-bold mb-6">Thank You.</h2>
              <p className="text-xl text-zinc-400 font-light mb-10 leading-relaxed">
                Your request has been routed to our Lead Partnership Concierge for follow-up. 
                Expect a response within 2 business hours.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors"
              >
                Send another message
              </button>
            </motion.div>
          )}
        </div>
      </section>

    </div>
  );
};

export default B2BSupport;
