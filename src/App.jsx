import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AudienceProvider, useAudience } from './context/AudienceContext';
import './index.css';

import Header from './components/Header';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import ScrollToTop from './components/ScrollToTop';

import Landing from './pages/Landing';
import VibeCheck from './pages/VibeCheck';
import DigitalVault from './pages/DigitalVault';
import BrandsHome from './pages/BrandsHome';
import B2BSolutions from './pages/B2BSolutions';
import B2BDemo from './pages/B2BDemo';
import SeeItInAction from './pages/SeeItInAction';
import AboutUs from './pages/AboutUs';
import B2BAboutUs from './pages/B2BAboutUs';
import Resources from './pages/Resources';
import B2BResources from './pages/B2BResources';
import Support from './pages/Support';
import B2BSupport from './pages/B2BSupport';
import InvestorRelations from './pages/InvestorRelations';
import RetailerDirectory from './pages/RetailerDirectory';
import ProfileManagement from './pages/ProfileManagement';
import MyLookbook from './pages/MyLookbook';
import FAQ from './pages/FAQ';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:rounded focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="flex-grow bg-white" role="main">
        {children}
      </main>
      <Footer />
    </div>
  );
};

const AppContent = () => {
  const { isB2B } = useAudience();

  return (
    <Router>
      <ScrollToTop />
      <ErrorBoundary>
        <Layout>
          <ErrorBoundary>
            <Routes>
              <Route path="/shopper" element={<Landing />} />
              <Route path="/about" element={isB2B ? <B2BAboutUs /> : <AboutUs />} />
              <Route path="/resources" element={isB2B ? <B2BResources /> : <Resources />} />
              <Route path="/support" element={isB2B ? <B2BSupport /> : <Support />} />
              <Route path="/shopper/onboarding" element={<VibeCheck />} />
              <Route path="/shopper/vault" element={<DigitalVault />} />
              <Route path="/shopper/profile" element={<ProfileManagement />} />
              <Route path="/lookbook" element={<MyLookbook />} />
              <Route path="/brands" element={<BrandsHome />} />
              <Route path="/brands/solutions" element={<B2BSolutions />} />
              <Route path="/brands/demo" element={<B2BDemo />} />
              <Route path="/brands/see-it-in-action" element={<SeeItInAction />} />
              <Route path="/investors" element={<InvestorRelations />} />
              <Route path="/directory" element={<RetailerDirectory />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/" element={<Navigate to="/shopper" replace />} />
            </Routes>
          </ErrorBoundary>
        </Layout>
      </ErrorBoundary>
    </Router>
  );
};

function App() {
  return (
    <AudienceProvider>
      <AppContent />
    </AudienceProvider>
  );
}

export default App;
