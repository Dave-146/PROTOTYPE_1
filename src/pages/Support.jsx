import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, MessageSquare, BookOpen, UserCircle, ShieldCheck } from 'lucide-react';

const faqs = [
  {
    question: "How does the biometric scanning process work?",
    answer: "Our engine uses advanced computer vision to extract over 40 distinct geometric measurements from a standard short video. This data constructs a high-fidelity 3D mesh of your body, establishing your precise Fit-Code without manual measuring tapes."
  },
  {
    question: "Is my body data secure?",
    answer: "Absolute privacy is our core tenet. Your 3D mesh is instantly converted into an anonymized mathematical hash (your Fit-Code). We do not store raw imagery or associated visual data on our servers. Your body, your data."
  },
  {
    question: "Which retailers currently support the DOUBL Fit-Code?",
    answer: "We are rapidly expanding our partner network. Currently, you can use your Fit-Code at leading premium houses including Zegna, Aether Apparel, Theory, and select LVMH boutiques. View the full directory in your Profile Dashboard."
  },
  {
    question: "What if my weight or body shape changes?",
    answer: "Your Fit-Code is entirely dynamic. We recommend running a quick calibration scan every 3-6 months, or whenever you notice a significant change in how your garments fit. The update takes less than 60 seconds."
  }
];

const Support = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-zinc-50 min-h-screen pb-32">
      
      {/* 1.3.1 Hero & Global Search Bar */}
      <section className="bg-zinc-950 text-white pt-32 pb-24 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tight mb-8">
            How can we assist you?
          </h1>
          
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-zinc-400" />
            </div>
            <input 
              type="text" 
              placeholder="Search for articles, guides, or FAQs..." 
              className="w-full bg-zinc-900 border border-zinc-700 text-white pl-12 pr-6 py-4 md:text-lg focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all shadow-lg rounded-full"
            />
          </div>
          <p className="mt-6 text-sm text-zinc-400 font-light">Popular: <span className="underline cursor-pointer hover:text-white transition-colors">How to scan</span>, <span className="underline cursor-pointer hover:text-white transition-colors">Data Privacy</span>, <span className="underline cursor-pointer hover:text-white transition-colors">Retailer List</span></p>
        </motion.div>
      </section>

      {/* 1.3.2 Support Action Cards */}
      <section className="px-6 max-w-5xl mx-auto -mt-10 relative z-10 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 shadow-xl border border-zinc-100 flex flex-col items-center text-center cursor-pointer group hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors duration-300">
               <BookOpen className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="font-serif text-xl font-bold text-zinc-900 mb-2">Knowledge Base</h3>
            <p className="text-zinc-500 text-sm font-light">Read step-by-step guides on using the biometric scanner.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-8 shadow-xl border border-zinc-100 flex flex-col items-center text-center cursor-pointer group hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors duration-300">
               <UserCircle className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="font-serif text-xl font-bold text-zinc-900 mb-2">Account Issues</h3>
            <p className="text-zinc-500 text-sm font-light">Manage your profile, update email, or retrieve your Vault.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-8 shadow-xl border border-zinc-100 flex flex-col items-center text-center cursor-pointer group hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors duration-300">
               <ShieldCheck className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="font-serif text-xl font-bold text-zinc-900 mb-2">Trust & Safety</h3>
            <p className="text-zinc-500 text-sm font-light">Learn exactly how we protect your biometric data.</p>
          </motion.div>
        </div>
      </section>

      {/* 1.3.3 FAQ Accordion */}
      <section className="px-6 max-w-3xl mx-auto mb-32">
        <h2 className="font-serif text-3xl font-bold text-zinc-900 mb-10 text-center">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-zinc-200 bg-white overflow-hidden">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left px-6 py-5 flex justify-between items-center bg-white hover:bg-zinc-50 transition-colors focus:outline-none"
              >
                <span className="font-bold text-zinc-900">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openFaq === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-zinc-400" />
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
                    <div className="px-6 pb-6 pt-2 text-zinc-500 font-light leading-relaxed border-t border-zinc-100">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* 1.3.4 Contact Form */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="bg-white border border-zinc-200 shadow-xl flex flex-col md:flex-row overflow-hidden">
          
          {/* Left Context */}
          <div className="bg-zinc-950 text-white p-12 md:w-2/5 flex flex-col justify-center">
             <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center mb-8">
               <MessageSquare className="w-5 h-5 text-indigo-400" />
             </div>
             <h3 className="font-serif text-3xl font-bold mb-4">Still need help?</h3>
             <p className="text-zinc-400 font-light mb-8">
               Our concierges are available to assist you with scanning issues, retailer partnerships, or media inquiries. 
             </p>
             <div className="space-y-4 text-sm font-medium">
               <p className="text-zinc-300"><span className="text-indigo-400 uppercase tracking-widest text-[10px] font-bold block mb-1">Email Support</span> support@doubl.app</p>
               <p className="text-zinc-300"><span className="text-indigo-400 uppercase tracking-widest text-[10px] font-bold block mb-1">Response Time</span> Under 24 hours</p>
             </div>
          </div>

          {/* Right Form */}
          <div className="p-12 md:w-3/5">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                    <label className="block text-xs font-bold tracking-widest uppercase text-zinc-500 mb-2">Name</label>
                    <input type="text" placeholder="Jane Doe" className="w-full border-b-2 border-zinc-200 py-3 text-lg bg-transparent focus:outline-none focus:border-zinc-950 transition-colors" />
                 </div>
                 <div>
                    <label className="block text-xs font-bold tracking-widest uppercase text-zinc-500 mb-2">Email</label>
                    <input type="email" placeholder="jane@example.com" className="w-full border-b-2 border-zinc-200 py-3 text-lg bg-transparent focus:outline-none focus:border-zinc-950 transition-colors" />
                 </div>
               </div>
               
               <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-zinc-500 mb-2">Topic</label>
                  <select className="w-full border-b-2 border-zinc-200 py-3 text-lg bg-transparent focus:outline-none focus:border-zinc-950 transition-colors appearance-none">
                    <option>Scanning Assistance</option>
                    <option>Account & Data</option>
                    <option>Retailer Issue</option>
                    <option>General Inquiry</option>
                  </select>
               </div>

               <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-zinc-500 mb-2">Message</label>
                  <textarea rows="4" placeholder="How can we help?" className="w-full border-b-2 border-zinc-200 py-3 text-lg bg-transparent focus:outline-none focus:border-zinc-950 transition-colors resize-none"></textarea>
               </div>

               <button className="bg-zinc-950 text-white px-10 py-4 font-bold tracking-widest text-sm uppercase shadow-lg hover:bg-zinc-800 transition-colors">
                 Send Message
               </button>
            </form>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Support;
