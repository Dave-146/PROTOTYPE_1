import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { Check, X, ArrowLeft, Search, Loader2 } from 'lucide-react';
import LoadingSpinner from '../components/LoadingSpinner';

const personas = [
  { id: 1, name: "The Minimalist", url: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop", height: "h-96" },
  { id: 2, name: "Avant-Garde", url: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1000&auto=format&fit=crop", height: "h-64" },
  { id: 3, name: "Classic Tailoring", url: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1000&auto=format&fit=crop", height: "h-80" },
  { id: 4, name: "Streetwear Luxe", url: "https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?q=80&w=1000&auto=format&fit=crop", height: "h-64" },
  { id: 5, name: "Romantic", url: "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?q=80&w=1000&auto=format&fit=crop", height: "h-96" },
  { id: 6, name: "Utility Chic", url: "https://images.unsplash.com/photo-1485231183945-fee66f9de431?q=80&w=1000&auto=format&fit=crop", height: "h-72" },
];

const brands = ["Acne Studios", "Aether Apparel", "Everlane", "Levi's", "Lululemon", "Theory", "Zegna", "Zara"];
const sizes = ["XXS", "XS", "S", "M", "L", "XL", "XXL", "28", "30", "32", "34", "36", "38"];

const STORAGE_KEY = 'vibecheck_progress';

const VibeCheck = () => {
  // Initialize state from sessionStorage
  const loadSavedData = () => {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved) {
        const data = JSON.parse(saved);
        return {
          step: data.step || 1,
          selectedPersonas: data.selectedPersonas || [],
          brandSearch: data.brandSearch || '',
          selectedBrand: data.selectedBrand || '',
          selectedSize: data.selectedSize || '',
          name: data.name || '',
          age: data.age || '',
          gender: data.gender || '',
          email: data.email || '',
        };
      }
    } catch (error) {
      console.warn('Failed to load VibeCheck progress:', error);
    }
    return {
      step: 1,
      selectedPersonas: [],
      brandSearch: '',
      selectedBrand: '',
      selectedSize: '',
      name: '',
      age: '',
      gender: '',
      email: '',
    };
  };

  const savedData = loadSavedData();
  const [step, setStep] = useState(savedData.step);
  const navigate = useNavigate();

  // Step 1 State
  const [selectedPersonas, setSelectedPersonas] = useState(savedData.selectedPersonas);

  // Step 2 State
  const [brandSearch, setBrandSearch] = useState(savedData.brandSearch);
  const [selectedBrand, setSelectedBrand] = useState(savedData.selectedBrand);
  const [selectedSize, setSelectedSize] = useState(savedData.selectedSize);

  // Step 3 State
  const [name, setName] = useState(savedData.name);
  const [age, setAge] = useState(savedData.age);
  const [gender, setGender] = useState(savedData.gender);
  const [showValidationMessage, setShowValidationMessage] = useState(false);

  // Step 4 State
  const [email, setEmail] = useState(savedData.email);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isDecrypting, setIsDecrypting] = useState(false);
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [isProcessingStep, setIsProcessingStep] = useState(false);
  const inputRefs = useRef([]);

  // Save to sessionStorage whenever form data changes
  useEffect(() => {
    try {
      const dataToSave = {
        step,
        selectedPersonas,
        brandSearch,
        selectedBrand,
        selectedSize,
        name,
        age,
        gender,
        email,
      };
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
    } catch (error) {
      console.warn('Failed to save VibeCheck progress:', error);
    }
  }, [step, selectedPersonas, brandSearch, selectedBrand, selectedSize, name, age, gender, email]);

  // Clear saved data when onboarding completes
  useEffect(() => {
    if (isDecrypting) {
      setTimeout(() => {
        try {
          sessionStorage.removeItem(STORAGE_KEY);
        } catch (error) {
          console.warn('Failed to clear VibeCheck progress:', error);
        }
      }, 2000);
    }
  }, [isDecrypting]);

  // Step Logic
  const handleNext = () => {
    if (step === 3) {
      setIsProcessingStep(true);
      setShowValidationMessage(true);
      setTimeout(() => {
        setStep(4);
        setIsProcessingStep(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 1500);
    } else {
      setStep(prev => Math.min(prev + 1, 4));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  const togglePersona = (id) => {
    setSelectedPersonas(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  // Step 4 OTP Handlers
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSendingOtp(true);
      setTimeout(() => {
        setOtpSent(true);
        setIsSendingOtp(false);
      }, 1000);
    }
  };

  const handleOtpChange = (index, value) => {
    if (value.length > 1) value = value[0];
    if (!/^[0-9]*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  useEffect(() => {
    if (otp.every(v => v !== '') && otpSent) {
      setIsDecrypting(true);
      setTimeout(() => {
        navigate('/shopper/vault', { state: { hasCompletedOnboarding: true } });
      }, 1500);
    }
  }, [otp, otpSent, navigate]);

  // Validation
  const isStep1Valid = selectedPersonas.length > 0;
  const isStep2Valid = (selectedBrand && selectedSize) || brandSearch === 'skip'; // Mocking skip capability
  const isStep3Valid = name && age && gender;
  
  const getProgress = () => {
    if (step === 1) return 10;
    if (step === 2) return 30;
    if (step === 3) return 50;
    if (step === 4 && !otpSent) return 70;
    if (step === 4 && otpSent) return 90;
    return 0;
  };

  return (
    <div className="relative min-h-[calc(100vh-80px)] bg-zinc-50 pb-32">
      
      {/* Top Navigation */}
      <div className="absolute top-6 left-6 right-6 flex justify-between z-50 pointer-events-none">
         <div className="pointer-events-auto">
           {step > 1 && (
             <button onClick={handleBack} className="p-2 bg-white rounded-full shadow-md hover:bg-zinc-100 transition-colors flex items-center justify-center">
                <ArrowLeft className="w-5 h-5 text-zinc-600" />
             </button>
           )}
         </div>
         <div className="pointer-events-auto">
            <button onClick={() => navigate('/shopper')} className="p-2 bg-white rounded-full shadow-md hover:bg-red-50 transition-colors flex items-center justify-center group">
               <X className="w-5 h-5 text-zinc-600 group-hover:text-red-500 transition-colors" />
            </button>
         </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20 pt-24 text-center">
        <header className="mb-12">
          {step === 1 && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
               <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs mb-4">Step 1 of 4</p>
               <h1 className="font-serif text-4xl font-bold tracking-tight mb-4">Visual Identity</h1>
               <p className="text-zinc-500 font-light">Select the silhouettes that speak to your aesthetic.</p>
            </motion.div>
          )}
          {step === 2 && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
               <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs mb-4">Step 2 of 4</p>
               <h1 className="font-serif text-4xl font-bold tracking-tight mb-4">Fit History</h1>
               <p className="text-zinc-500 font-light">Calibration point. What brand and size usually fits you best?</p>
            </motion.div>
          )}
          {step === 3 && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
               <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs mb-4">Step 3 of 4</p>
               <h1 className="font-serif text-4xl font-bold tracking-tight mb-4">Demographics</h1>
               <p className="text-zinc-500 font-light">The final pieces of the biometric puzzle.</p>
            </motion.div>
          )}
          {step === 4 && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
               <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs mb-4">Step 4 of 4</p>
               <h1 className="font-serif text-4xl font-bold tracking-tight mb-4">Secure Your Profile</h1>
               <p className="text-zinc-500 font-light">Create an account to lock in your Fit-Code.</p>
            </motion.div>
          )}
        </header>

        {/* --- STEP 1: Visual Identity --- */}
        {step === 1 && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="columns-1 md:columns-2 gap-6 space-y-6 max-w-3xl mx-auto"
          >
            {personas.map((persona, index) => {
              const isSelected = selectedPersonas.includes(persona.id);
              return (
                <motion.div
                  key={persona.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className={clsx(
                    "relative w-full rounded-sm overflow-hidden cursor-pointer group break-inside-avoid shadow-md border-2 transition-all duration-300",
                    persona.height,
                    isSelected ? "border-indigo-600 shadow-indigo-200" : "border-transparent"
                  )}
                  onClick={() => togglePersona(persona.id)}
                >
                  <img src={persona.url} alt={persona.name} className={clsx("w-full h-full object-cover transition-transform duration-700", isSelected ? "scale-105" : "group-hover:scale-105")} />
                  <div className={clsx("absolute inset-0 transition-opacity duration-300", isSelected ? "bg-black/40" : "bg-black/10 group-hover:bg-black/30")} />
                  <div className="absolute inset-x-0 bottom-0 p-6 flex justify-between items-end">
                    <h3 className="font-serif text-white text-2xl drop-shadow-md">{persona.name}</h3>
                    <AnimatePresence>
                      {isSelected && (
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="bg-indigo-600 rounded-full p-2 text-white shadow-lg">
                          <Check size={20} strokeWidth={3} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}

        {/* --- STEP 2: Fit History --- */}
        {step === 2 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="max-w-md mx-auto bg-white p-8 md:p-12 shadow-xl border border-zinc-100 text-left">
             <div className="space-y-8">
                <div>
                   <label htmlFor="vibe-brand-search" className="block text-xs font-bold tracking-widest uppercase text-zinc-500 mb-3">Favorite Brand</label>
                   <div className="relative">
                      <Search className="absolute left-3 top-3.5 w-5 h-5 text-zinc-400" aria-hidden="true" />
                      <input 
                         id="vibe-brand-search"
                         type="text" 
                         placeholder="Search brands..." 
                         value={brandSearch}
                         onChange={(e) => setBrandSearch(e.target.value)}
                         aria-label="Search for favorite brand"
                         className="w-full bg-zinc-50 border border-zinc-200 py-3 pl-10 pr-4 text-zinc-900 focus:outline-none focus:border-indigo-500 transition-colors rounded-sm"
                      />
                   </div>
                   {/* Mock Dropdown matching logic */}
                   {brandSearch && !selectedBrand && (
                      <div className="absolute mt-1 w-full max-w-[calc(100%-4rem)] bg-white border border-zinc-200 shadow-lg z-20 max-h-40 overflow-y-auto">
                        {brands.filter(b => b.toLowerCase().includes(brandSearch.toLowerCase())).length > 0 ? (
                           brands.filter(b => b.toLowerCase().includes(brandSearch.toLowerCase())).map(b => (
                             <div key={b} onClick={() => { setSelectedBrand(b); setBrandSearch(b); }} className="px-4 py-3 hover:bg-zinc-50 cursor-pointer text-sm font-medium">{b}</div>
                           ))
                        ) : (
                           <div className="px-4 py-3 text-sm text-zinc-500 flex justify-between items-center">
                             Brand not found.
                             <button onClick={() => { setBrandSearch('skip'); setSelectedBrand('Custom'); }} className="text-indigo-600 font-bold hover:underline">Manual Entry</button>
                           </div>
                        )}
                      </div>
                   )}
                </div>

                <AnimatePresence>
                  {(selectedBrand || brandSearch === 'skip') && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
                       <label htmlFor="vibe-size" className="block text-xs font-bold tracking-widest uppercase text-zinc-500 mb-3">Typical Size in {selectedBrand === 'Custom' ? 'this brand' : selectedBrand}</label>
                       <select 
                          id="vibe-size"
                          value={selectedSize}
                          onChange={(e) => setSelectedSize(e.target.value)}
                          aria-label={`Select typical size in ${selectedBrand === 'Custom' ? 'this brand' : selectedBrand}`}
                          className="w-full bg-zinc-50 border border-zinc-200 py-3 px-4 text-zinc-900 focus:outline-none focus:border-indigo-500 transition-colors rounded-sm appearance-none"
                       >
                         <option value="" disabled>Select a size...</option>
                         {sizes.map(s => <option key={s} value={s}>{s}</option>)}
                       </select>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button onClick={() => { setBrandSearch('skip'); setSelectedBrand('Skip'); setSelectedSize('Skip'); }} className="w-full text-center text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-600 py-2">
                   Skip / I Don't Know
                </button>
             </div>
          </motion.div>
        )}

        {/* --- STEP 3: Demographics --- */}
        {step === 3 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="max-w-md mx-auto bg-white p-8 md:p-12 shadow-xl border border-zinc-100 text-left relative overflow-hidden">
             
             {(showValidationMessage || isProcessingStep) && (
               <motion.div 
                 initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                 className="absolute inset-0 bg-white/95 backdrop-blur-sm z-20 flex flex-col justify-center items-center text-center p-8"
               >
                  {isProcessingStep ? (
                    <LoadingSpinner size="lg" text="Processing..." />
                  ) : (
                    <>
                      <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mb-4">
                        <Check className="w-8 h-8 text-indigo-600" />
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-zinc-900 mb-2">Stalking complete.</h3>
                      <p className="text-zinc-500 font-light italic">Almost.</p>
                    </>
                  )}
               </motion.div>
             )}

             <div className="space-y-6">
                <div>
                   <label htmlFor="vibe-name" className="block text-xs font-bold tracking-widest uppercase text-zinc-500 mb-2">Full Name</label>
                   <input 
                     id="vibe-name"
                     type="text" 
                     value={name} 
                     onChange={e => setName(e.target.value)} 
                     placeholder="Jane Doe" 
                     aria-required="true"
                     className="w-full border-b-2 border-zinc-200 py-2 text-lg focus:outline-none focus:border-zinc-900 transition-colors bg-transparent" 
                   />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                     <label htmlFor="vibe-age" className="block text-xs font-bold tracking-widest uppercase text-zinc-500 mb-2">Age</label>
                     <input 
                       id="vibe-age"
                       type="number" 
                       value={age} 
                       onChange={e => setAge(e.target.value)} 
                       placeholder="28" 
                       min="1"
                       max="120"
                       aria-required="true"
                       className="w-full border-b-2 border-zinc-200 py-2 text-lg focus:outline-none focus:border-zinc-900 transition-colors bg-transparent" 
                     />
                  </div>
                  <div>
                     <label htmlFor="vibe-gender" className="block text-xs font-bold tracking-widest uppercase text-zinc-500 mb-2">Gender</label>
                     <select 
                       id="vibe-gender"
                       value={gender} 
                       onChange={e => setGender(e.target.value)} 
                       aria-required="true"
                       className="w-full border-b-2 border-zinc-200 py-2 text-lg focus:outline-none focus:border-zinc-900 transition-colors bg-transparent appearance-none"
                     >
                       <option value="" disabled>Select</option>
                       <option value="Female">Female</option>
                       <option value="Male">Male</option>
                       <option value="Non-binary">Non-binary</option>
                       <option value="Prefer not to say">Prefer not to say</option>
                     </select>
                  </div>
                </div>
             </div>
          </motion.div>
        )}

        {/* --- STEP 4: Account Creation & OTP --- */}
        {step === 4 && (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-md mx-auto bg-zinc-950 p-10 md:p-14 rounded-2xl shadow-2xl text-left border border-zinc-800">
             
             {!otpSent ? (
               <motion.form key="emailForm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={handleEmailSubmit} aria-label="Email verification form">
                 <div className="mb-8">
                   <label htmlFor="vibe-email" className="block text-xs font-bold tracking-widest uppercase text-zinc-400 mb-4">Email Address</label>
                   <input 
                      id="vibe-email"
                      type="email" 
                      value={email} 
                      onChange={e => setEmail(e.target.value)} 
                      placeholder="hello@world.com" 
                      required
                      disabled={isSendingOtp}
                      aria-required="true"
                      aria-describedby="email-description"
                      className="w-full bg-zinc-900 border border-zinc-700 text-white px-4 py-4 rounded-md focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                   />
                   <p id="email-description" className="sr-only">Enter your email address to receive a verification code</p>
                 </div>
                 <button 
                   type="submit" 
                   disabled={isSendingOtp}
                   className="w-full bg-white text-zinc-950 font-bold uppercase tracking-widest py-4 text-sm rounded-md hover:bg-zinc-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                 >
                   {isSendingOtp ? (
                     <>
                       <Loader2 className="w-4 h-4 animate-spin" />
                       Sending...
                     </>
                   ) : (
                     'Send Verification Code'
                   )}
                 </button>
               </motion.form>
             ) : (
               <motion.div key="otpForm" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col items-center pt-4">
                  <p className="text-zinc-400 text-center text-sm mb-8 leading-relaxed">
                     Enter the 6-digit transmission sent to<br/><span className="text-white font-medium">{email}</span>
                  </p>
                  
                  <div className="flex justify-center gap-2 md:gap-3 w-full mb-8" role="group" aria-label="OTP input">
                    {otp.map((digit, index) => (
                      <input
                        key={index} 
                        ref={el => inputRefs.current[index] = el}
                        type="text" 
                        inputMode="numeric" 
                        maxLength={1} 
                        value={digit}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        aria-label={`OTP digit ${index + 1} of 6`}
                        className="w-10 h-12 md:w-12 md:h-14 bg-zinc-900 border border-zinc-700 rounded-md text-center text-white text-xl font-serif focus:outline-none focus:border-indigo-400 focus:bg-zinc-800 transition-all font-bold"
                      />
                    ))}
                  </div>

                  {isDecrypting ? (
                     <div className="flex items-center gap-3 text-indigo-400 font-bold uppercase tracking-widest text-xs">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Generating Fit-Code...
                     </div>
                  ) : (
                     <button onClick={() => setOtpSent(false)} className="text-xs uppercase tracking-widest text-zinc-500 hover:text-zinc-300 transition-colors font-bold">
                        Resend Code
                     </button>
                  )}
               </motion.div>
             )}
          </motion.div>
        )}

      </div>

      {/* --- Sticky Progress Bar --- */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-zinc-200 p-6 z-40 shadow-[0_-10px_40px_rgba(0,0,0,0.02)]">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-8">
          
          <div className="flex-grow">
            <div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-zinc-900"
                initial={{ width: '0%' }}
                animate={{ width: `${getProgress()}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </div>
          </div>

          {step < 4 && (
             <AnimatePresence mode="wait">
               {((step === 1 && isStep1Valid) || (step === 2 && isStep2Valid) || (step === 3 && isStep3Valid)) && (
                 <motion.button
                   key="nextBtn"
                   initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                   onClick={handleNext}
                   className="shrink-0 bg-zinc-950 text-white px-8 py-3.5 text-xs font-bold tracking-widest uppercase hover:bg-zinc-800 transition-colors shadow-lg rounded-sm"
                 >
                   {step === 3 ? "Complete" : "Continue"}
                 </motion.button>
               )}
             </AnimatePresence>
          )}
        </div>
      </div>
      
    </div>
  );
};

export default VibeCheck;
