import React, { useState, useEffect } from 'react';
import { CheckCircle2, ArrowRight, Building2, Mail, User, Calendar, Package, Code, Loader2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';

const SEE_IT_IN_ACTION_STORAGE_KEY = 'see_it_in_action_form';

const seeItInActionSchema = z.object({
  companyName: z.string().min(2, 'Company name must be at least 2 characters'),
  contactName: z.string().min(2, 'Contact name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  orderVolume: z.string().min(1, 'Please select an estimated order volume'),
  integrationNeeds: z.string().min(10, 'Please describe your integration needs'),
  preferredDemoDate: z.string().min(1, 'Please select a preferred demo date'),
});

const SeeItInAction = () => {
  const navigate = useNavigate();
  
  // Load saved form data from sessionStorage
  const loadSavedData = () => {
    try {
      const saved = sessionStorage.getItem(SEE_IT_IN_ACTION_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (error) {
      console.warn('Failed to load See It In Action form data:', error);
    }
    return {
      companyName: '',
      contactName: '',
      email: '',
      orderVolume: '',
      integrationNeeds: '',
      preferredDemoDate: '',
    };
  };

  const savedData = loadSavedData();
  const [submitted, setSubmitted] = useState(false);
  const [accountManager, setAccountManager] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm({
    resolver: zodResolver(seeItInActionSchema),
    defaultValues: savedData,
  });

  const formData = watch();

  // Save form data to sessionStorage
  useEffect(() => {
    try {
      sessionStorage.setItem(SEE_IT_IN_ACTION_STORAGE_KEY, JSON.stringify(formData));
    } catch (error) {
      console.warn('Failed to save See It In Action form data:', error);
    }
  }, [formData]);

  const onSubmit = async (data) => {
    // Simulate submission
    setTimeout(() => {
      // Assign account manager (simulated)
      const managers = ['Bryn', 'Jess'];
      setAccountManager(managers[Math.floor(Math.random() * managers.length)]);
      setSubmitted(true);
      // Clear saved data on successful submission
      try {
        sessionStorage.removeItem(SEE_IT_IN_ACTION_STORAGE_KEY);
      } catch (error) {
        console.warn('Failed to clear See It In Action form data:', error);
      }
    }, 1000);
  };

  const handleDismiss = () => {
    navigate('/brands');
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-indigo-500/30 font-sans overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative border-b border-zinc-900/50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10">
          <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]" />
          <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-indigo-900/10 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
              See It In <span className="italic text-zinc-400">Action.</span>
            </h1>
            <p className="text-xl text-zinc-400 font-light tracking-wide max-w-2xl mx-auto leading-relaxed mb-12">
              Experience how DOUBL transforms fit accuracy for premium retailers. Schedule your personalized demo.
            </p>
            
            {/* Partner Logo Strip */}
            <div className="flex items-center justify-center gap-12 md:gap-16 flex-wrap opacity-40">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-500">ACNE STUDIOS</span>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-500">LEVI'S</span>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-500">THEORY</span>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-500">ZEGNA</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* High-Intent Form */}
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
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" aria-label="See It In Action form">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label htmlFor="company-name" className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Company Name</label>
                      <div className={`flex items-center gap-4 border-b pb-2 transition-colors ${errors.companyName ? 'border-red-500' : 'border-zinc-800 focus-within:border-indigo-500'}`}>
                        <Building2 className="w-4 h-4 text-zinc-600" aria-hidden="true" />
                        <input 
                          id="company-name" 
                          type="text" 
                          placeholder="Global Retail Corp" 
                          {...register('companyName')}
                          aria-invalid={errors.companyName ? 'true' : 'false'}
                          aria-describedby={errors.companyName ? 'company-name-error' : undefined}
                          className="w-full bg-transparent text-lg focus:outline-none" 
                        />
                      </div>
                      {errors.companyName && (
                        <p id="company-name-error" className="text-xs text-red-400 mt-1" role="alert">{errors.companyName.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="contact-name" className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Contact Name</label>
                      <div className={`flex items-center gap-4 border-b pb-2 transition-colors ${errors.contactName ? 'border-red-500' : 'border-zinc-800 focus-within:border-indigo-500'}`}>
                        <User className="w-4 h-4 text-zinc-600" aria-hidden="true" />
                        <input 
                          id="contact-name" 
                          type="text" 
                          placeholder="Jane Doe" 
                          {...register('contactName')}
                          aria-invalid={errors.contactName ? 'true' : 'false'}
                          aria-describedby={errors.contactName ? 'contact-name-error' : undefined}
                          className="w-full bg-transparent text-lg focus:outline-none" 
                        />
                      </div>
                      {errors.contactName && (
                        <p id="contact-name-error" className="text-xs text-red-400 mt-1" role="alert">{errors.contactName.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Email</label>
                    <div className={`flex items-center gap-4 border-b pb-2 transition-colors ${errors.email ? 'border-red-500' : 'border-zinc-800 focus-within:border-indigo-500'}`}>
                      <Mail className="w-4 h-4 text-zinc-600" aria-hidden="true" />
                      <input 
                        id="email" 
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
                    <label htmlFor="order-volume" className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Estimated Order Volume</label>
                    <div className={`flex items-center gap-4 border-b pb-2 transition-colors ${errors.orderVolume ? 'border-red-500' : 'border-zinc-800 focus-within:border-indigo-500'}`}>
                      <Package className="w-4 h-4 text-zinc-600" aria-hidden="true" />
                      <select 
                        id="order-volume" 
                        {...register('orderVolume')}
                        aria-invalid={errors.orderVolume ? 'true' : 'false'}
                        aria-describedby={errors.orderVolume ? 'order-volume-error' : undefined}
                        className="w-full bg-transparent text-lg focus:outline-none"
                      >
                        <option value="">Select volume range</option>
                        <option value="0-1k">0 - 1,000 orders/month</option>
                        <option value="1k-10k">1,000 - 10,000 orders/month</option>
                        <option value="10k-50k">10,000 - 50,000 orders/month</option>
                        <option value="50k+">50,000+ orders/month</option>
                      </select>
                    </div>
                    {errors.orderVolume && (
                      <p id="order-volume-error" className="text-xs text-red-400 mt-1" role="alert">{errors.orderVolume.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="integration-needs" className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Integration Needs</label>
                    <div className={`flex gap-4 border-b pb-2 transition-colors ${errors.integrationNeeds ? 'border-red-500' : 'border-zinc-800 focus-within:border-indigo-500'}`}>
                      <Code className="w-4 h-4 text-zinc-600 mt-2" aria-hidden="true" />
                      <textarea 
                        id="integration-needs" 
                        rows="3" 
                        placeholder="Describe your integration requirements, current tech stack, and specific needs..." 
                        {...register('integrationNeeds')}
                        aria-invalid={errors.integrationNeeds ? 'true' : 'false'}
                        aria-describedby={errors.integrationNeeds ? 'integration-needs-error' : undefined}
                        className="w-full bg-transparent text-lg focus:outline-none resize-none" 
                      />
                    </div>
                    {errors.integrationNeeds && (
                      <p id="integration-needs-error" className="text-xs text-red-400 mt-1" role="alert">{errors.integrationNeeds.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="preferred-demo-date" className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Preferred Demo Date</label>
                    <div className={`flex items-center gap-4 border-b pb-2 transition-colors ${errors.preferredDemoDate ? 'border-red-500' : 'border-zinc-800 focus-within:border-indigo-500'}`}>
                      <Calendar className="w-4 h-4 text-zinc-600" aria-hidden="true" />
                      <input 
                        id="preferred-demo-date" 
                        type="date" 
                        min={new Date().toISOString().split('T')[0]}
                        {...register('preferredDemoDate')}
                        aria-invalid={errors.preferredDemoDate ? 'true' : 'false'}
                        aria-describedby={errors.preferredDemoDate ? 'preferred-demo-date-error' : undefined}
                        className="w-full bg-transparent text-lg focus:outline-none" 
                      />
                    </div>
                    {errors.preferredDemoDate && (
                      <p id="preferred-demo-date-error" className="text-xs text-red-400 mt-1" role="alert">{errors.preferredDemoDate.message}</p>
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
                          Schedule Demo <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-16 text-center shadow-2xl relative"
            >
              <button
                onClick={handleDismiss}
                className="absolute top-6 right-6 p-2 hover:bg-zinc-800 rounded-full transition-colors"
                aria-label="Close confirmation"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="w-20 h-20 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-10 border border-indigo-500/50">
                <CheckCircle2 className="w-10 h-10 text-indigo-400" />
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Demo Scheduled.</h2>
              <p className="text-xl text-zinc-400 font-light max-w-xl mx-auto leading-relaxed mb-8">
                Your request has been confirmed. {accountManager && (
                  <span className="text-white font-semibold">{accountManager}</span>
                )} will be your dedicated account manager and will reach out within 2 hours to coordinate.
              </p>
              
              {/* Calendar Invite Prompt */}
              <div className="bg-zinc-800/50 border border-zinc-700 rounded-2xl p-6 mb-8 max-w-md mx-auto">
                <Calendar className="w-8 h-8 text-indigo-400 mx-auto mb-4" />
                <p className="text-sm text-zinc-300 mb-4">
                  A calendar invite will be sent to your email shortly.
                </p>
                <button className="text-xs font-bold uppercase tracking-widest text-indigo-400 hover:text-indigo-300 transition-colors">
                  Add to Calendar
                </button>
              </div>

              <button 
                onClick={handleDismiss}
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600 hover:text-white transition-colors"
              >
                Return to Homepage
              </button>
            </motion.div>
          )}
        </div>
      </section>

    </div>
  );
};

export default SeeItInAction;
