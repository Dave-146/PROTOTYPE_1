import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const VaultEntry = () => {
  const [email, setEmail] = useState('');
  const [step, setStep] = useState(1); // 1: Email, 2: OTP
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const navigate = useNavigate();
  const inputRefs = useRef([]);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email) setStep(2);
  };

  const handleOtpChange = (index, value) => {
    if (value.length > 1) value = value[0];
    if (!/^[0-9]*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-advance
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  // Auto-submit OTP
  useEffect(() => {
    if (otp.every(v => v !== '') && step === 2) {
      setTimeout(() => {
        navigate('/shopper/vault');
      }, 1000);
    }
  }, [otp, step, navigate]);

  return (
    <div className="min-h-[calc(100vh-80px)] bg-zinc-950 flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Background Pulse Animation */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[800px] h-[800px] rounded-full bg-indigo-900/20 blur-[100px] -z-10"
      />

      <div className="w-full max-w-md px-6 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="mx-auto w-16 h-16 border-2 border-indigo-500/30 rounded-full flex items-center justify-center mb-6 relative">
            <motion.div 
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              className="absolute inset-0 bg-indigo-500 rounded-full blur-md"
            />
            <div className="w-2 h-2 bg-indigo-500 rounded-full" />
          </div>
          
          <h2 className="font-serif text-3xl text-white font-bold tracking-wide mb-2">
            The Digital Vault
          </h2>
          <p className="text-zinc-400 text-sm tracking-widest uppercase">
            {step === 1 ? 'Enter Coordinates' : 'Verify Identity'}
          </p>
        </motion.div>

        <div className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 p-8 rounded-2xl shadow-2xl">
          {step === 1 ? (
            <motion.form 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              onSubmit={handleEmailSubmit}
              className="flex flex-col gap-6"
            >
              <div>
                <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">
                  Email Address
                </label>
                <input 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-b-2 border-zinc-700 text-white pb-2 text-lg focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-white text-zinc-950 py-4 font-bold tracking-widest uppercase text-sm hover:bg-zinc-200 transition-colors mt-4"
              >
                Secure Measurements
              </button>
            </motion.form>
          ) : (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col items-center"
            >
              <p className="text-zinc-400 text-center text-sm mb-8">
                Enter the 6-digit transmission sent to <br/><span className="text-white font-medium">{email}</span>
              </p>
              
              <div className="flex justify-center gap-3">
                {otp.map((digit, index) => (
                  <motion.div 
                    key={index}
                    animate={digit ? { scale: [1, 1.1, 1], borderColor: '#6366f1' } : {}}
                    className="relative"
                  >
                    <input
                      ref={el => inputRefs.current[index] = el}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      className="w-12 h-14 bg-transparent border-[1.5px] border-zinc-700 rounded-lg text-center text-white text-2xl font-serif focus:outline-none focus:border-indigo-400 transition-colors"
                    />
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 text-center">
                {otp.every(v => v !== '') ? (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-indigo-400 text-sm tracking-widest uppercase flex items-center gap-2"
                  >
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-indigo-500 border-t-transparent rounded-full"
                    />
                    Decrypting...
                  </motion.div>
                ) : (
                  <button onClick={() => setStep(1)} className="text-xs text-zinc-500 uppercase tracking-widest hover:text-white transition-colors">
                    Cancel Sequence
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VaultEntry;
