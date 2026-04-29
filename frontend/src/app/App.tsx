import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { MobileBottomNav } from './components/MobileBottomNav';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { ServicesPage } from './components/ServicesPage';
import { ProjectsPage } from './components/ProjectsPage';
import { ProcessPage } from './components/ProcessPage';
import { QuotePage } from './components/QuotePage';
import { PageType } from './lib/types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'services':
        return <ServicesPage onNavigate={setCurrentPage} />;
      case 'projects':
        return <ProjectsPage />;
      case 'process':
        return <ProcessPage onNavigate={setCurrentPage} />;
      case 'quote':
        return <QuotePage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <main>
        {renderPage()}
      </main>

      <Footer />
      <MobileBottomNav currentPage={currentPage} onNavigate={setCurrentPage} />
    </div>
  );
}
