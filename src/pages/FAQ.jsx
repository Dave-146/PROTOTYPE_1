import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FAQ = () => {
  const [searchParams] = useSearchParams();
  const cleanMode = searchParams.get('clean') === 'true';
  const [openFaq, setOpenFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const toggleFaq = (categoryIndex, faqIndex) => {
    const key = `${categoryIndex}-${faqIndex}`;
    setOpenFaq(openFaq === key ? null : key);
  };

  const categories = [
    {
      id: 'biometrics',
      title: 'Biometrics',
      icon: '🔬',
      faqs: [
        {
          question: 'How does the biometric scanning process work?',
          answer: 'Our engine uses advanced computer vision to extract over 40 distinct geometric measurements from a standard short video. This data constructs a high-fidelity 3D mesh of your body, establishing your precise Fit-Code without manual measuring tapes. The entire process takes less than 60 seconds and requires no special equipment—just your smartphone camera.'
        },
        {
          question: 'What if my weight or body shape changes?',
          answer: 'Your Fit-Code is entirely dynamic. We recommend running a quick calibration scan every 3-6 months, or whenever you notice a significant change in how your garments fit. The update takes less than 60 seconds and can be done directly from the DOUBL mobile app.'
        },
        {
          question: 'How accurate is the biometric scan?',
          answer: 'Our biometric engine achieves 98.5% accuracy compared to professional tailor measurements. The system uses machine learning algorithms trained on millions of body measurements to ensure precision across diverse body types and shapes.'
        },
        {
          question: 'Do I need special clothing for the scan?',
          answer: 'For best results, wear form-fitting clothing (like leggings and a fitted top) in a contrasting color to your background. The scan works best in good lighting with a plain background. The app will guide you through the optimal setup.'
        }
      ]
    },
    {
      id: 'privacy',
      title: 'Privacy',
      icon: '🔒',
      faqs: [
        {
          question: 'Is my body data secure?',
          answer: 'Absolute privacy is our core tenet. Your 3D mesh is instantly converted into an anonymized mathematical hash (your Fit-Code). We do not store raw imagery or associated visual data on our servers. Your biometric data is encrypted with AES-256 encryption and stored in zero-knowledge architecture. Your body, your data.'
        },
        {
          question: 'Who can see my measurements?',
          answer: 'Only you can see your raw measurements. Retail partners receive only your Fit-Code match accuracy percentage—they never see your actual measurements or body data. This ensures complete privacy while enabling perfect fit recommendations.'
        },
        {
          question: 'Can I delete my biometric data?',
          answer: 'Yes, you have complete control. You can delete your biometric data at any time from your account settings. This will permanently remove all stored measurements and your Fit-Code. Note that this action cannot be undone.'
        },
        {
          question: 'How is my data protected under GDPR/AODA?',
          answer: 'DOUBL is fully compliant with GDPR, AODA, and other international privacy regulations. We employ military-grade encryption, zero-knowledge architecture, and regular third-party security audits. Your data is never sold or shared with third parties for marketing purposes.'
        }
      ]
    },
    {
      id: 'app-tech',
      title: 'App & Technology',
      icon: '📱',
      faqs: [
        {
          question: 'Which devices support the DOUBL app?',
          answer: 'The DOUBL app is available for iOS (iPhone 12 and later) and Android (devices with Android 10+). The app requires a device with a front-facing camera capable of recording video at 1080p resolution.'
        },
        {
          question: 'How do I add my Fit-Code to Apple Wallet or Google Pay?',
          answer: 'After completing your scan, navigate to "The Inner Sanctum" in the app or web portal. You\'ll see options to "Add to Apple Wallet" or "Add to Google Pay." Tap the button and follow the prompts. Your Fit-Code will be stored securely in your digital wallet for easy access at partner retailers.'
        },
        {
          question: 'Can I use my Fit-Code without the app?',
          answer: 'Yes! Your Fit-Code is accessible through "The Inner Sanctum" web portal. Simply visit doubl.app/vault and verify your identity with your email and OTP. You can view your Fit-Code, match accuracy, and retailer directory from any device.'
        },
        {
          question: 'What if the app crashes during a scan?',
          answer: 'If the app crashes during a scan, simply restart the scanning process. Your progress is automatically saved, so you won\'t lose any completed steps. If issues persist, contact support@doubl.app for assistance.'
        }
      ]
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      icon: '📦',
      faqs: [
        {
          question: 'How do I use my Fit-Code when shopping?',
          answer: 'When shopping at DOUBL partner retailers, look for the "DOUBL Fit-Code" option at checkout. Enter your Fit-Code (or scan the QR code from your digital wallet), and the retailer\'s system will automatically recommend your perfect size based on the specific garment\'s measurements.'
        },
        {
          question: 'What if a garment doesn\'t fit despite using my Fit-Code?',
          answer: 'DOUBL partner retailers offer a "Zero-Guessing Guarantee." If a garment doesn\'t fit as expected when using your Fit-Code, contact the retailer\'s customer service. Most partners offer free returns and exchanges for Fit-Code purchases. You can also update your scan if your body has changed.'
        },
        {
          question: 'Which retailers currently support the DOUBL Fit-Code?',
          answer: 'We are rapidly expanding our partner network. Currently, you can use your Fit-Code at leading premium houses including ACNE STUDIOS, LEVI\'S, THEORY, ZEGNA, and select LVMH boutiques. View the full directory in your Profile Dashboard or visit doubl.app/directory.'
        },
        {
          question: 'Can I use my Fit-Code for international shopping?',
          answer: 'Yes! Your Fit-Code is a universal standard that works across all DOUBL partner retailers globally. Whether you\'re shopping in New York, London, or Tokyo, your Fit-Code translates seamlessly to local sizing systems.'
        }
      ]
    }
  ];

  // Filter FAQs based on search and category
  const filteredCategories = categories.map(category => {
    if (selectedCategory !== 'all' && selectedCategory !== category.id) {
      return null;
    }
    
    const filteredFaqs = category.faqs.filter(faq => {
      if (!searchQuery) return true;
      const query = searchQuery.toLowerCase();
      return faq.question.toLowerCase().includes(query) || 
             faq.answer.toLowerCase().includes(query);
    });
    
    if (filteredFaqs.length === 0) return null;
    
    return { ...category, faqs: filteredFaqs };
  }).filter(Boolean);

  const content = (
    <div className="min-h-screen bg-zinc-50">
      {/* Hero Section */}
      <section className="bg-zinc-950 text-white pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-zinc-400 font-light mb-8">
              Find answers to common questions about DOUBL, biometric scanning, privacy, and more.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-zinc-400" />
              </div>
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search FAQs..." 
                className="w-full bg-zinc-900 border border-zinc-700 text-white pl-12 pr-6 py-4 md:text-lg focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all shadow-lg rounded-full"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === 'all' 
                    ? 'bg-white text-zinc-950' 
                    : 'bg-zinc-900 text-zinc-400 hover:text-white'
                }`}
              >
                All
              </button>
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${
                    selectedCategory === category.id 
                      ? 'bg-white text-zinc-950' 
                      : 'bg-zinc-900 text-zinc-400 hover:text-white'
                  }`}
                >
                  <span>{category.icon}</span>
                  {category.title}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Accordions by Category */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        {filteredCategories.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-zinc-500 text-lg">No FAQs found matching your search.</p>
          </div>
        ) : (
          filteredCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="mb-12"
            >
              <h2 className="font-serif text-3xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <span>{category.icon}</span>
                {category.title}
              </h2>
              
              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const key = `${categoryIndex}-${faqIndex}`;
                  return (
                    <div key={faqIndex} className="border border-zinc-200 bg-white overflow-hidden rounded-lg">
                      <button
                        onClick={() => toggleFaq(categoryIndex, faqIndex)}
                        className="w-full text-left px-6 py-5 flex justify-between items-center bg-white hover:bg-zinc-50 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg"
                        aria-expanded={openFaq === key}
                      >
                        <span className="font-bold text-zinc-900 pr-4">{faq.question}</span>
                        <motion.div
                          animate={{ rotate: openFaq === key ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex-shrink-0"
                        >
                          <ChevronDown className="w-5 h-5 text-zinc-400" />
                        </motion.div>
                      </button>
                      
                      <AnimatePresence>
                        {openFaq === key && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="px-6 pb-6 pt-2 text-zinc-600 font-light leading-relaxed border-t border-zinc-100">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))
        )}
      </section>
    </div>
  );

  if (cleanMode) {
    return content;
  }

  return (
    <>
      <Header />
      {content}
      <Footer />
    </>
  );
};

export default FAQ;
