import React from 'react';
import { useAudience } from '../context/AudienceContext';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { isB2B } = useAudience();

  return (
    <footer className={`py-12 border-t transition-colors duration-500 ${isB2B ? 'bg-zinc-950 text-zinc-400 border-zinc-800' : 'bg-white text-zinc-500 border-zinc-100'}`} role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className={`font-serif text-2xl font-bold tracking-tight mb-4 ${isB2B ? 'text-white' : 'text-zinc-900'}`}>DOUBL</div>
          <p className="text-sm">
            {isB2B 
              ? 'Biometric precision for premium garment retailers.' 
              : 'Your body isn\'t a medium. It\'s a masterpiece.'
            }
          </p>
        </div>
        
        <nav className="flex flex-col gap-3" aria-label="Company navigation">
          <h4 className={`text-sm font-semibold tracking-widest uppercase ${isB2B ? 'text-zinc-300' : 'text-zinc-900'}`}>Company</h4>
          <Link to="/about" className="text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded">About</Link>
           <Link to="/resources" className="text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded">Resources</Link>
          <Link to="/shopper/profile" className="text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded">Profile Management</Link>
          <Link to="/investors" className="text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded">Investor Relations</Link>
          <Link to="/directory" className="text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded">Retailer Directory</Link>
        </nav>

        <nav className="flex flex-col gap-3" aria-label="Support navigation">
          <h4 className={`text-sm font-semibold tracking-widest uppercase ${isB2B ? 'text-zinc-300' : 'text-zinc-900'}`}>Support</h4>
          <Link to="/support" className="text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded">Support Hub</Link>
          <Link to="/faq" className="text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded">FAQ</Link>
          {!isB2B && <Link to="/shopper/vault" className="text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded">The Inner Sanctum</Link>}
          <Link to="/support" className="text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded">Contact</Link>
        </nav>

        <nav className="flex flex-col gap-3" aria-label="Legal navigation">
          <h4 className={`text-sm font-semibold tracking-widest uppercase ${isB2B ? 'text-zinc-300' : 'text-zinc-900'}`}>Legal</h4>
          <a href="#" className="text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded">Privacy Policy</a>
          <a href="#" className="text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded">Terms of Service</a>
        </nav>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-zinc-200/20 text-xs text-center">
        © {new Date().getFullYear()} DOUBL. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
