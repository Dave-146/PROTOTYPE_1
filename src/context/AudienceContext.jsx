import React, { createContext, useState, useContext, useEffect } from 'react';

const AudienceContext = createContext();

const STORAGE_KEY = 'doubl_audience_preference';

export const AudienceProvider = ({ children }) => {
  // Initialize state from localStorage or URL pathname
  const [isB2B, setIsB2B] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved !== null) {
        return saved === 'true';
      }
    } catch (error) {
      console.warn('Failed to read audience preference from localStorage:', error);
    }
    // Fallback to URL pathname
    return window.location.pathname.startsWith('/brands');
  });

  // Persist to localStorage when state changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, String(isB2B));
    } catch (error) {
      console.warn('Failed to save audience preference to localStorage:', error);
    }
  }, [isB2B]);

  // Keep state in sync if navigating
  useEffect(() => {
    const handleLocationChange = () => {
      const urlBased = window.location.pathname.startsWith('/brands');
      // Only update if URL-based state differs from current state
      if (urlBased !== isB2B) {
        setIsB2B(urlBased);
      }
    };
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, [isB2B]);

  const toggleAudience = () => {
    setIsB2B((prev) => !prev);
  };

  return (
    <AudienceContext.Provider value={{ isB2B, toggleAudience }}>
      {children}
    </AudienceContext.Provider>
  );
};

export const useAudience = () => useContext(AudienceContext);
