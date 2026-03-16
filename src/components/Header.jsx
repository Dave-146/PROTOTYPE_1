import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useAudience } from '../context/AudienceContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import BridgeModal from './BridgeModal';

const Header = () => {
  const { isB2B, toggleAudience } = useAudience();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBridgeModalOpen, setIsBridgeModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle scroll visibility for landing page hero section
  useEffect(() => {
    const isLandingPage = location.pathname === '/shopper' || location.pathname === '/';
    
    if (!isLandingPage) {
      // Always show header on non-landing pages
      setIsHeaderVisible(true);
      return;
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      // Show header when scrolled past hero section (viewport height)
      setIsHeaderVisible(scrollY > viewportHeight * 0.8);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleToggle = () => {
    toggleAudience();
    if (!isB2B) {
      navigate('/brands');
    } else {
      navigate('/shopper');
    }
  };

  const menuItems = [
    { label: 'Home', path: isB2B ? '/brands' : '/shopper' },
    { label: 'About', path: '/about' },
    { label: 'Resources', path: '/resources' },
    { label: 'Support', path: '/support' },
  ];

  const isLandingPage = location.pathname === '/shopper' || location.pathname === '/';
  const shouldShowHeader = !isLandingPage || isHeaderVisible;

  return (
    <motion.header 
      initial={false}
      animate={{ 
        y: shouldShowHeader ? 0 : -100,
        opacity: shouldShowHeader ? 1 : 0
      }}
      transition={{ 
        duration: 0.4, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      className="fixed top-6 w-full z-50 flex justify-center px-4 md:px-8 pointer-events-none" 
      role="banner"
      style={{ pointerEvents: shouldShowHeader ? 'auto' : 'none' }}
    >
      <div className="relative w-full max-w-5xl pointer-events-auto">
        
        {/* Main Pill */}
        <nav className={`flex items-center justify-between text-white px-6 md:px-8 py-3.5 rounded-full shadow-lg relative z-10 transition-colors duration-500 ${isB2B ? 'bg-zinc-900' : 'bg-[#c85b40]'}`} aria-label="Main navigation">
          
          {/* Logo */}
          <Link 
            to={isB2B ? '/brands' : '/shopper'} 
            className="font-serif text-2xl md:text-3xl font-bold tracking-tight select-none cursor-pointer"
            aria-label="DOUBL Home"
          >
            DOUBL
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden p-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <Menu className="w-6 h-6" aria-hidden="true" />
          </button>

          {/* Nav & CTA (Desktop Only) */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-8 text-[15px] font-medium tracking-wide font-sans" aria-label="Desktop navigation">
              <Link to="/about" className="hover:opacity-80 transition-opacity" aria-label="About us">About</Link>
              <Link to="/resources" className="hover:opacity-80 transition-opacity" aria-label="Resources">Resources</Link>
              <Link to="/support" className="hover:opacity-80 transition-opacity" aria-label="Support">Support</Link>
            </nav>

            {/* Primary CTA */}
            {!isB2B ? (
               <motion.button 
                 whileHover={{ scale: 1.02 }}
                 whileTap={{ scale: 0.98 }}
                 onClick={() => navigate('/shopper/onboarding')}
                 className="bg-[#f8f5ee] text-[#c85b40] px-6 py-2 rounded-full text-sm font-medium tracking-wide shadow-sm hover:shadow transition-shadow"
                 aria-label="Get your style guide"
               >
                 Get My Style Guide
               </motion.button>
            ) : (
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/brands/see-it-in-action')}
                className="bg-[#f8f5ee] text-[#c85b40] px-6 py-2 rounded-full text-sm font-medium tracking-wide shadow-sm hover:shadow transition-shadow"
                aria-label="See it in action"
              >
                See It In Action
              </motion.button>
            )}
          </div>
        </nav>

        {/* Tab Toggle Underhang (Desktop Only) */}
        {!isMenuOpen && (
          <div className="hidden md:flex absolute top-[80%] left-6 md:left-14 bg-[#f8f5ee] px-2 pt-6 pb-2 rounded-b-[1.25rem] shadow-md -z-10 items-center shadow-black/10 transition-all duration-300" role="tablist" aria-label="Audience selector">
            <button
              className="flex items-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg"
              onClick={handleToggle}
              aria-label={`Switch to ${isB2B ? 'Shoppers' : 'Brands'} view`}
              role="tab"
              aria-selected={!isB2B}
            >
              <div className={`px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase transition-all duration-300 ${!isB2B ? 'bg-zinc-950 text-white' : 'text-zinc-400'}`}>
                Shoppers
              </div>
              <div className={`px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase transition-all duration-300 ${isB2B ? 'bg-zinc-950 text-white' : 'text-zinc-400'}`}>
                Brands
              </div>
            </button>
          </div>
        )}

        {/* Mobile Dropdown Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className={`fixed inset-4 z-[100] rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col transition-colors duration-500 ${isB2B ? 'bg-zinc-900 border border-zinc-800' : 'bg-[#c85b40]'}`}
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              {/* Header inside Menu */}
              <div className="flex items-center justify-between px-8 py-6">
                <span className="font-serif text-3xl font-bold tracking-tight text-white select-none">DOUBL</span>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors text-white"
                  aria-label="Close navigation menu"
                >
                  <X className="w-6 h-6" aria-hidden="true" />
                </button>
              </div>

              {/* B2C/B2B Switcher */}
              <div className="px-8 mt-4" role="tablist" aria-label="Audience selector">
                <div className="bg-white/10 backdrop-blur-md p-1.5 rounded-full flex items-center border border-white/5">
                  <button 
                    onClick={() => { if (isB2B) handleToggle(); }}
                    className={`flex-1 py-3 rounded-full text-[11px] font-bold tracking-widest uppercase transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 ${!isB2B ? 'bg-zinc-950 text-white shadow-xl' : 'text-zinc-300 hover:text-white'}`}
                    role="tab"
                    aria-selected={!isB2B}
                    aria-label="Shoppers view"
                  >
                    Shoppers
                  </button>
                  <button 
                    onClick={() => { if (!isB2B) handleToggle(); }}
                    className={`flex-1 py-3 rounded-full text-[11px] font-bold tracking-widest uppercase transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 ${isB2B ? 'bg-zinc-950 text-white shadow-xl' : 'text-zinc-300 hover:text-white'}`}
                    role="tab"
                    aria-selected={isB2B}
                    aria-label="Brands view"
                  >
                    Brands
                  </button>
                </div>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col px-8 mt-12 gap-0 overflow-y-auto flex-grow" aria-label="Mobile navigation">
                {menuItems.map((item, idx) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="group border-b border-white/10 last:border-0 py-8 flex flex-col focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg"
                    aria-label={`Navigate to ${item.label}`}
                  >
                    <motion.span 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + (idx * 0.05) }}
                      className="text-white text-3xl font-light font-sans tracking-tight group-hover:pl-2 transition-all duration-300"
                    >
                      {item.label}
                    </motion.span>
                  </Link>
                ))}
              </nav>

              {/* Mobile CTA */}
              <div className="p-8 mt-auto">
                {!isB2B ? (
                  <button 
                    onClick={() => { setIsMenuOpen(false); navigate('/shopper/onboarding'); }}
                    className="w-full bg-[#f8f5ee] text-[#c85b40] py-6 rounded-[2rem] text-lg font-bold tracking-tight shadow-xl active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-white/50"
                    aria-label="Get your style guide"
                  >
                    Get My Style Guide
                  </button>
                ) : (
                  <button 
                    onClick={() => { setIsMenuOpen(false); navigate('/brands/see-it-in-action'); }}
                    className="w-full bg-[#f8f5ee] text-zinc-900 py-6 rounded-[2rem] text-lg font-bold tracking-tight shadow-xl active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-white/50"
                    aria-label="See it in action"
                  >
                    See It In Action
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bridge Modal */}
        <BridgeModal isOpen={isBridgeModalOpen} onClose={() => setIsBridgeModalOpen(false)} />

      </div>
    </motion.header>
  );
};

export default Header;
