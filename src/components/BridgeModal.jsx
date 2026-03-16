import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Smartphone, Mail, ChevronDown, ChevronUp, Link as LinkIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BridgeModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [isNoPhoneExpanded, setIsNoPhoneExpanded] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const navigate = useNavigate();

  const handleSendLink = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSending(true);
    // Simulate sending magic link
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setTimeout(() => {
        onClose();
        setIsSent(false);
        setEmail('');
      }, 2000);
    }, 1000);
  };

  const handleQRClick = () => {
    // Device detection for app store routing
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    const isAndroid = /android/i.test(userAgent);
    
    if (isIOS) {
      window.open('https://apps.apple.com/app/doubl', '_blank');
    } else if (isAndroid) {
      window.open('https://play.google.com/store/apps/details?id=com.doubl', '_blank');
    } else {
      // Default to onboarding flow
      navigate('/shopper/onboarding');
    }
  };

  // Generate QR code data URL (simplified - in production, use a QR library)
  const qrCodeData = 'https://doubl.app/onboarding';

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200]"
            aria-hidden="true"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-lg w-full bg-white rounded-[2.5rem] shadow-2xl z-[201] flex flex-col max-h-[90vh] overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-labelledby="bridge-modal-title"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-zinc-100">
              <h2 id="bridge-modal-title" className="font-serif text-2xl font-bold tracking-tight">
                Get Your Style Guide
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-zinc-100 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Primary UI: QR Code */}
              <div className="flex flex-col items-center space-y-4">
                <div 
                  onClick={handleQRClick}
                  className="w-64 h-64 bg-zinc-50 border-2 border-zinc-200 rounded-2xl flex items-center justify-center cursor-pointer hover:border-zinc-300 transition-colors group"
                  role="button"
                  aria-label="Scan QR code to download app"
                >
                  <div className="text-center space-y-3">
                    <Smartphone className="w-16 h-16 text-zinc-400 mx-auto group-hover:text-zinc-600 transition-colors" />
                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                      QR Code
                    </p>
                    <p className="text-[10px] text-zinc-400">
                      Scan with your phone
                    </p>
                  </div>
                </div>
                <p className="text-sm text-center text-zinc-600 max-w-xs">
                  Scan to download the DOUBL app and complete your scan
                </p>
              </div>

              {/* Secondary UI: No phone section */}
              <div className="border-t border-zinc-100 pt-6">
                <button
                  onClick={() => setIsNoPhoneExpanded(!isNoPhoneExpanded)}
                  className="w-full flex items-center justify-between text-left"
                  aria-expanded={isNoPhoneExpanded}
                >
                  <span className="text-sm font-medium text-zinc-900">
                    No phone? No problem.
                  </span>
                  {isNoPhoneExpanded ? (
                    <ChevronUp className="w-5 h-5 text-zinc-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-zinc-400" />
                  )}
                </button>

                <AnimatePresence>
                  {isNoPhoneExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <form onSubmit={handleSendLink} className="mt-4 space-y-4">
                        <div>
                          <label htmlFor="bridge-email" className="sr-only">
                            Email Address
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
                            <input
                              id="bridge-email"
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="name@example.com"
                              required
                              disabled={isSending || isSent}
                              className="w-full pl-10 pr-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:border-zinc-400 focus:ring-2 focus:ring-zinc-200 disabled:opacity-50"
                              aria-label="Enter your email address"
                            />
                          </div>
                        </div>
                        <button
                          type="submit"
                          disabled={isSending || isSent || !email}
                          className="w-full bg-zinc-900 text-white py-3 rounded-xl font-medium hover:bg-zinc-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                          {isSending ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              Sending...
                            </>
                          ) : isSent ? (
                            <>
                              <LinkIcon className="w-4 h-4" />
                              Link Sent!
                            </>
                          ) : (
                            <>
                              <LinkIcon className="w-4 h-4" />
                              Send My Link
                            </>
                          )}
                        </button>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Tertiary UI: Express Lane */}
              <div className="border-t border-zinc-100 pt-6">
                <button
                  onClick={() => {
                    onClose();
                    navigate('/shopper/vault');
                  }}
                  className="w-full text-sm text-zinc-600 hover:text-zinc-900 transition-colors text-center"
                >
                  Returning user? <span className="font-semibold underline">Enter The Inner Sanctum</span>
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BridgeModal;
