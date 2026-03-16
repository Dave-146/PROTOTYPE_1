import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import { Lock, ShieldCheck, CheckCircle2, Copy, Smartphone, ArrowRight, RefreshCw, Grid, MapPin, User, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import LoadingSpinner from '../components/LoadingSpinner';

const VAULT_STORAGE_KEY = 'digitalvault_progress';

const emailSchema = z.object({
  email: z.string().email('Please enter a valid email address').min(1, 'Email is required'),
});

const DigitalVault = () => {
  // Load saved state from sessionStorage
  const loadSavedState = () => {
    try {
      const saved = sessionStorage.getItem(VAULT_STORAGE_KEY);
      if (saved) {
        const data = JSON.parse(saved);
        return {
          view: data.view || 'auth',
          email: data.email || '',
          otp: data.otp || ['', '', '', '', '', ''],
        };
      }
    } catch (error) {
      console.warn('Failed to load DigitalVault progress:', error);
    }
    return {
      view: 'auth',
      email: '',
      otp: ['', '', '', '', '', ''],
    };
  };

  const savedState = loadSavedState();
  const [view, setView] = useState(savedState.view);
  const [email, setEmail] = useState(savedState.email);
  const [otp, setOtp] = useState(savedState.otp);
  const [error, setError] = useState('');
  const [isValidatingEmail, setIsValidatingEmail] = useState(false);
  const [isValidatingOtp, setIsValidatingOtp] = useState(false);
  const [profileComplete, setProfileComplete] = useState(false);
  const navigate = useNavigate();

  // Save to sessionStorage when state changes
  useEffect(() => {
    try {
      const dataToSave = {
        view,
        email,
        otp,
      };
      sessionStorage.setItem(VAULT_STORAGE_KEY, JSON.stringify(dataToSave));
    } catch (error) {
      console.warn('Failed to save DigitalVault progress:', error);
    }
  }, [view, email, otp]);

  const knownEmails = ['dave@example.com', 'bryn@doubl.app', 'jess@doubl.app'];

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: savedState.email,
    },
  });

  const watchedEmail = watch('email');

  // Sync form value with state
  useEffect(() => {
    setValue('email', email);
  }, [email, setValue]);

  useEffect(() => {
    setEmail(watchedEmail);
  }, [watchedEmail]);

  const handleEmailSubmit = async (data) => {
    setIsValidatingEmail(true);
    setTimeout(() => {
      if (knownEmails.includes(data.email.toLowerCase())) {
        setError('');
        setView('otp');
      } else {
        setError("This email isn't in our circle yet.");
      }
      setIsValidatingEmail(false);
    }, 800);
  };

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  useEffect(() => {
    if (otp.every(digit => digit !== '')) {
      setIsValidatingOtp(true);
      // Simulate validation
      setTimeout(() => {
        setView('vault');
        setIsValidatingOtp(false);
        // Check if profile is complete (simulated - in production, check against backend)
        const isComplete = sessionStorage.getItem('doubl_profile_complete') === 'true';
        setProfileComplete(isComplete);
      }, 800);
    }
  }, [otp]);

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-indigo-500/30 overflow-hidden relative">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[300px] h-[300px] bg-zinc-800/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-xl mx-auto px-6 pt-32 pb-20 relative z-10 min-h-screen flex flex-col justify-center">
        
        <AnimatePresence mode="wait">
          {/* 3.1.1 & 3.1.2: Authentication Flow */}
          {view === 'auth' && (
            <motion.div 
              key="auth"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-indigo-500/10 rounded-3xl flex items-center justify-center mx-auto mb-10 border border-indigo-500/20 shadow-[0_0_50px_rgba(99,102,241,0.1)]">
                <Lock className="w-8 h-8 text-indigo-400" />
              </div>
              <h1 className="font-serif text-5xl font-bold mb-4 tracking-tight">Your Body Data, <span className="italic text-zinc-400">Secured.</span></h1>
              <p className="text-zinc-500 text-lg font-light mb-12">Enter your registered email to decrypt your Fit-Identity.</p>

              <form onSubmit={handleSubmit(handleEmailSubmit)} className="space-y-6" aria-label="Email verification form">
                <div className="relative">
                  <label htmlFor="vault-email" className="sr-only">Email Address</label>
                  <input 
                    id="vault-email"
                    type="email" 
                    placeholder="name@example.com"
                    {...register('email')}
                    disabled={isValidatingEmail || isSubmitting}
                    aria-required="true"
                    aria-label="Enter your registered email address"
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={`w-full bg-zinc-900 border rounded-2xl px-6 py-5 text-lg focus:outline-none focus:border-indigo-500 transition-all text-center disabled:opacity-50 disabled:cursor-not-allowed ${
                      errors.email ? 'border-red-500' : 'border-zinc-800'
                    }`}
                  />
                  {errors.email && (
                    <motion.p 
                      id="email-error"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-xs font-bold uppercase tracking-widest text-red-400 mt-2 text-center"
                      role="alert"
                    >
                      {errors.email.message}
                    </motion.p>
                  )}
                  {error && !errors.email && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-xs font-bold uppercase tracking-widest text-[#c85b40] mt-4 flex items-center justify-center gap-2"
                      role="alert"
                    >
                      {error} <Link to="/shopper/onboarding" className="underline text-white">Start Profile</Link>
                    </motion.p>
                  )}
                </div>
                <button 
                  type="submit"
                  disabled={isValidatingEmail || isSubmitting}
                  className="w-full bg-white text-zinc-950 font-bold uppercase tracking-[0.2em] py-5 rounded-2xl text-xs hover:bg-zinc-200 transition-all shadow-[0_0_40px_rgba(255,255,255,0.05)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isValidatingEmail || isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Validating...
                    </>
                  ) : (
                    'Retrieve Fit-Code'
                  )}
                </button>
              </form>
            </motion.div>
          )}

          {view === 'otp' && (
            <motion.div 
              key="otp"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-zinc-900 rounded-3xl flex items-center justify-center mx-auto mb-10 border border-zinc-800">
                <ShieldCheck className="w-8 h-8 text-indigo-400 animate-pulse" />
              </div>
              <h1 className="font-serif text-4xl font-bold mb-4">Identity Verification.</h1>
              <p className="text-zinc-500 text-sm font-light mb-12">We sent a 6-digit decryption key to <span className="text-white font-medium">{email}</span>.</p>

              {isValidatingOtp ? (
                <LoadingSpinner size="lg" text="Verifying OTP..." />
              ) : (
                <div className="flex justify-center gap-3" role="group" aria-label="OTP verification code">
                  {otp.map((digit, i) => (
                    <input 
                      key={i}
                      id={`otp-${i}`}
                      type="text"
                      maxLength="1"
                      value={digit}
                      onChange={(e) => handleOtpChange(i, e.target.value)}
                      disabled={isValidatingOtp}
                      aria-label={`OTP digit ${i + 1} of 6`}
                      className="w-12 h-16 md:w-16 md:h-20 bg-zinc-900 border border-zinc-800 rounded-xl text-2xl font-bold text-center focus:outline-none focus:border-indigo-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  ))}
                </div>
              )}
              <button 
                onClick={() => setView('auth')}
                className="mt-12 text-[10px] font-bold uppercase tracking-widest text-zinc-600 hover:text-white transition-colors"
              >
                Incorrect Email? Go Back
              </button>
            </motion.div>
          )}

          {/* 3.1.3 Vault Interior: Your Fit Identity */}
          {view === 'vault' && (
            <motion.div 
              key="vault"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8 pb-32"
            >
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-1 border border-indigo-500/30 rounded-full text-[10px] font-bold uppercase tracking-widest text-indigo-400 mb-6 backdrop-blur-sm bg-indigo-500/5">
                  <CheckCircle2 className="w-3 h-3" /> Secure Vault Open
                </div>
                <h1 className="font-serif text-5xl font-bold tracking-tight">Your Fit Identity.</h1>
              </div>

              {/* Section A: The Fit Card */}
              <motion.div 
                whileHover={{ scale: 1.02, rotateY: 2 }}
                className="relative bg-gradient-to-br from-indigo-600 to-indigo-900 rounded-[2.5rem] p-12 overflow-hidden shadow-[0_30px_100px_rgba(99,102,241,0.4)] group cursor-pointer"
              >
                {/* Holographic Texture */}
                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 1px, white 1px, white 2px)', backgroundSize: '10px 10px' }} />
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-[80px] -mr-32 -mt-32" />
                
                <div className="relative z-10 flex justify-between items-start mb-16">
                  <div className="font-serif text-3xl font-black italic tracking-tighter">DOUBL</div>
                  <Smartphone className="w-6 h-6 opacity-60" />
                </div>

                <div className="relative z-10 flex flex-col justify-end">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-60 mb-2">Unique Fit-Code</p>
                  <div className="flex items-center justify-between">
                    <h2 className="text-4xl md:text-5xl font-mono font-bold tracking-widest">DB-990-22</h2>
                    <Copy onClick={() => alert('Code Copied')} className="w-5 h-5 opacity-40 hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-end">
                    <div>
                      <p className="text-[8px] font-bold uppercase tracking-widest opacity-60 mb-1">Last Scanned</p>
                      <p className="text-xs font-bold tracking-widest">MARCH 11, 2026</p>
                    </div>
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center p-1">
                      <div className="w-full h-full bg-zinc-950 rounded flex flex-wrap gap-0.5 p-0.5">
                        {[...Array(16)].map((_, i) => <div key={i} className="w-[20%] h-[20%] bg-white opacity-80" />)}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Section B: Portability Suite */}
              <div className="grid grid-cols-2 gap-4">
                <button className="bg-white text-zinc-950 p-5 rounded-2xl flex flex-col items-center gap-3 hover:bg-zinc-100 transition-all group">
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">Apple Wallet</span>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                    <span className="font-bold text-sm">Add to Card</span>
                  </div>
                </button>
                <button className="bg-zinc-900 border border-zinc-800 text-white p-5 rounded-2xl flex flex-col items-center gap-3 hover:border-zinc-600 transition-all">
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">Google Pay</span>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="font-bold text-sm">Integration</span>
                  </div>
                </button>
              </div>

              {/* Section C: The Network (Ecosystem Links) */}
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 space-y-6">
                <div className="flex items-center justify-between">
                   <div className="flex gap-4 items-center">
                     <div className="w-10 h-10 bg-indigo-500/10 rounded-xl flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-indigo-400" />
                     </div>
                     <div>
                       <h4 className="font-bold text-sm">Retailer Directory</h4>
                       <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-0.5">Where to use your code today</p>
                     </div>
                   </div>
                   <Link to="/directory" className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center hover:bg-zinc-800 transition-colors">
                      <ArrowRight className="w-4 h-4" />
                   </Link>
                </div>

                <div className="border-t border-zinc-800 pt-6 flex items-center justify-between">
                   <div className="flex gap-4 items-center">
                     <div className="w-10 h-10 bg-zinc-800 rounded-xl flex items-center justify-center">
                        <RefreshCw className="w-5 h-5 text-zinc-500" />
                     </div>
                     <div>
                       <h4 className="font-bold text-sm">Body changed?</h4>
                       <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-0.5">Start a new 3D scan</p>
                     </div>
                   </div>
                   <button onClick={() => setView('auth')} className="px-5 py-2.5 bg-zinc-800 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-zinc-700 transition-colors">
                      Update Scan
                   </button>
                </div>

                <div className="border-t border-zinc-800 pt-6 space-y-3">
                   {profileComplete ? (
                     <Link to="/lookbook" className="w-full flex items-center justify-center gap-2 py-4 bg-indigo-600 rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-indigo-500 transition-all">
                        Open My Lookbook <ArrowRight className="w-4 h-4" />
                     </Link>
                   ) : (
                     <Link to="/shopper/profile" className="w-full flex items-center justify-center gap-2 py-4 bg-indigo-600 rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-indigo-500 transition-all">
                        View Full Profile <User className="w-4 h-4" />
                     </Link>
                   )}
                </div>
              </div>

              <div className="pt-8 text-center">
                 <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-800 mb-4">Encryption Standard</p>
                 <div className="flex justify-center gap-8 opacity-20 grayscale">
                    <Grid className="w-6 h-6" />
                    <Grid className="w-6 h-6" />
                    <Grid className="w-6 h-6" />
                 </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
};

export default DigitalVault;
