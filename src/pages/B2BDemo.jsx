import React, { useState, useEffect } from 'react';
import { CheckCircle2, ArrowRight, Building2, Globe, Phone, Mail, User, MessageCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const DEMO_STORAGE_KEY = 'b2bdemo_form';

const demoFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().regex(/^\+?[\d\s\-()]+$/, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(2, 'Company name must be at least 2 characters'),
  website: z.string().url('Please enter a valid URL').or(z.literal('')),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

const B2BDemo = () => {
  // Load saved form data from sessionStorage
  const loadSavedData = () => {
    try {
      const saved = sessionStorage.getItem(DEMO_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (error) {
      console.warn('Failed to load B2BDemo form data:', error);
    }
    return {
      name: '',
      phone: '',
      email: '',
      company: '',
      website: '',
      message: '',
    };
  };

  const savedData = loadSavedData();
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm({
    resolver: zodResolver(demoFormSchema),
    defaultValues: savedData,
  });

  const formData = watch();

  // Save form data to sessionStorage
  useEffect(() => {
    try {
      sessionStorage.setItem(DEMO_STORAGE_KEY, JSON.stringify(formData));
    } catch (error) {
      console.warn('Failed to save B2BDemo form data:', error);
    }
  }, [formData]);

  const onSubmit = async (data) => {
    // Simulate routing to Bryn/Jess
    setTimeout(() => {
      setSubmitted(true);
      // Clear saved data on successful submission
      try {
        sessionStorage.removeItem(DEMO_STORAGE_KEY);
      } catch (error) {
        console.warn('Failed to clear B2BDemo form data:', error);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-indigo-500/30 font-sans overflow-x-hidden">
      
      {/* 2.4.1 Hero Section */}
      <section className="pt-32 pb-20 px-6 relative border-b border-zinc-900/50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10">
          <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]" />
          <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-indigo-900/10 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-zinc-800 rounded-full text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase mb-8">
              <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse" />
              Direct Pipeline
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
              Request a Technical <span className="italic text-zinc-400">Deep-Dive.</span>
            </h1>
            <p className="text-xl text-zinc-400 font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
              Schedule a private walkthrough of our biometric integration suite. No sales fluff—just engineering reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2.4.2 High-Intent Form */}
      <section className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          {!submitted ? (
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-zinc-900 shadow-2xl border border-zinc-800 rounded-3xl overflow-hidden"
            >
              <div className="p-8 md:p-16">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" aria-label="Request a demo form">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label htmlFor="demo-name" className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Full Name</label>
                      <div className={`flex items-center gap-4 border-b pb-2 transition-colors ${errors.name ? 'border-red-500' : 'border-zinc-800 focus-within:border-indigo-500'}`}>
                        <User className="w-4 h-4 text-zinc-600" aria-hidden="true" />
                        <input 
                          id="demo-name" 
                          type="text" 
                          placeholder="Jane Doe" 
                          {...register('name')}
                          aria-invalid={errors.name ? 'true' : 'false'}
                          aria-describedby={errors.name ? 'name-error' : undefined}
                          className="w-full bg-transparent text-lg focus:outline-none" 
                        />
                      </div>
                      {errors.name && (
                        <p id="name-error" className="text-xs text-red-400 mt-1" role="alert">{errors.name.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="demo-phone" className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Phone Number</label>
                      <div className={`flex items-center gap-4 border-b pb-2 transition-colors ${errors.phone ? 'border-red-500' : 'border-zinc-800 focus-within:border-indigo-500'}`}>
                        <Phone className="w-4 h-4 text-zinc-600" aria-hidden="true" />
                        <input 
                          id="demo-phone" 
                          type="tel" 
                          placeholder="+1 (555) 000-0000" 
                          {...register('phone')}
                          aria-invalid={errors.phone ? 'true' : 'false'}
                          aria-describedby={errors.phone ? 'phone-error' : undefined}
                          className="w-full bg-transparent text-lg focus:outline-none" 
                        />
                      </div>
                      {errors.phone && (
                        <p id="phone-error" className="text-xs text-red-400 mt-1" role="alert">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label htmlFor="demo-email" className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Work Email</label>
                      <div className={`flex items-center gap-4 border-b pb-2 transition-colors ${errors.email ? 'border-red-500' : 'border-zinc-800 focus-within:border-indigo-500'}`}>
                        <Mail className="w-4 h-4 text-zinc-600" aria-hidden="true" />
                        <input 
                          id="demo-email" 
                          type="email" 
                          placeholder="jane@enterprise.com" 
                          {...register('email')}
                          aria-invalid={errors.email ? 'true' : 'false'}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                          className="w-full bg-transparent text-lg focus:outline-none" 
                        />
                      </div>
                      {errors.email && (
                        <p id="email-error" className="text-xs text-red-400 mt-1" role="alert">{errors.email.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="demo-company" className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Company Name</label>
                      <div className={`flex items-center gap-4 border-b pb-2 transition-colors ${errors.company ? 'border-red-500' : 'border-zinc-800 focus-within:border-indigo-500'}`}>
                        <Building2 className="w-4 h-4 text-zinc-600" aria-hidden="true" />
                        <input 
                          id="demo-company" 
                          type="text" 
                          placeholder="Global Retail Corp" 
                          {...register('company')}
                          aria-invalid={errors.company ? 'true' : 'false'}
                          aria-describedby={errors.company ? 'company-error' : undefined}
                          className="w-full bg-transparent text-lg focus:outline-none" 
                        />
                      </div>
                      {errors.company && (
                        <p id="company-error" className="text-xs text-red-400 mt-1" role="alert">{errors.company.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="demo-website" className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Company Website</label>
                    <div className={`flex items-center gap-4 border-b pb-2 transition-colors ${errors.website ? 'border-red-500' : 'border-zinc-800 focus-within:border-indigo-500'}`}>
                      <Globe className="w-4 h-4 text-zinc-600" aria-hidden="true" />
                      <input 
                        id="demo-website" 
                        type="url" 
                        placeholder="https://www.retailcorp.com" 
                        {...register('website')}
                        aria-invalid={errors.website ? 'true' : 'false'}
                        aria-describedby={errors.website ? 'website-error' : undefined}
                        className="w-full bg-transparent text-lg focus:outline-none" 
                      />
                    </div>
                    {errors.website && (
                      <p id="website-error" className="text-xs text-red-400 mt-1" role="alert">{errors.website.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="demo-message" className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Message / Inquiry</label>
                    <div className={`flex gap-4 border-b pb-2 transition-colors ${errors.message ? 'border-red-500' : 'border-zinc-800 focus-within:border-indigo-500'}`}>
                      <MessageCircle className="w-4 h-4 text-zinc-600 mt-2" aria-hidden="true" />
                      <textarea 
                        id="demo-message" 
                        rows="3" 
                        placeholder="Describe your integration requirements..." 
                        {...register('message')}
                        aria-invalid={errors.message ? 'true' : 'false'}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                        className="w-full bg-transparent text-lg focus:outline-none resize-none" 
                      />
                    </div>
                    {errors.message && (
                      <p id="message-error" className="text-xs text-red-400 mt-1" role="alert">{errors.message.message}</p>
                    )}
                  </div>

                  <div className="pt-8">
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="group w-full md:w-auto bg-white text-zinc-950 px-12 py-5 font-bold tracking-[0.2em] uppercase text-xs hover:bg-zinc-200 transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)] flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Request <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                    <p className="mt-6 text-[10px] text-zinc-600 uppercase tracking-widest font-medium">
                      Information secured with AES-256 standard encryption.
                    </p>
                  </div>
                </form>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-16 text-center shadow-2xl"
            >
              <div className="w-20 h-20 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-10 border border-indigo-500/50">
                <CheckCircle2 className="w-10 h-10 text-indigo-400" />
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Confirmed.</h2>
              <p className="text-xl text-zinc-400 font-light max-w-xl mx-auto leading-relaxed mb-10">
                Your request has been routed to **Bryn** and **Jess** for a technical review. 
                Expect a response for coordination within 2 hours.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600 hover:text-white transition-colors"
              >
                Reset Form
              </button>
            </motion.div>
          )}
        </div>
      </section>

    </div>
  );
};

export default B2BDemo;
