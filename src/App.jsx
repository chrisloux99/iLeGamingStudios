import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SpatialLabPage from './pages/SpatialLabPage';
import EntertainmentPage from './pages/EntertainmentPage';
import GameStudioPage from './pages/GameStudioPage';
import GamingSchoolPage from './pages/GamingSchoolPage';
import ContactPage from './pages/ContactPage';

function App() {
  const getPageFromHash = () => {
    const hash = window.location.hash.replace('#', '');
    if (['home', 'spatial', 'entertainment', 'games', 'school', 'contact'].includes(hash)) {
      return hash;
    }
    return 'home';
  };

  const [activePage, setActivePage] = useState(getPageFromHash);

  useEffect(() => {
    const handleHashChange = () => {
      setActivePage(getPageFromHash());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page) => {
    window.location.hash = page;
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (activePage) {
      case 'spatial':
        return <SpatialLabPage onNavigate={navigateTo} />;
      case 'entertainment':
        return <EntertainmentPage onNavigate={navigateTo} />;
      case 'games':
        return <GameStudioPage onNavigate={navigateTo} />;
      case 'school':
        return <GamingSchoolPage onNavigate={navigateTo} />;
      case 'contact':
        return <ContactPage onNavigate={navigateTo} />;
      case 'home':
      default:
        return <HomePage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="app-root">
      <Navbar activePage={activePage} onNavigate={navigateTo} />
      <main>
        {renderCurrentPage()}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
}

export default App;
