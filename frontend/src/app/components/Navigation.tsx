import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { PageType } from '../lib/types';
import { LogoIcon } from './Logo';

interface NavigationProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; page: PageType }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Services', page: 'services' },
    { label: 'Projects', page: 'projects' },
    { label: 'Process', page: 'process' }
  ];

  const handleNavClick = (page: PageType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="w-full px-10 lg:px-20">
        <div className="flex items-center justify-between h-22">
          
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3  "
          >
            <LogoIcon size={55}/>

            <div className="hidden sm:flex flex-col justify-center leading-[1]">
              <span className="text-2xl lg:text-3xl font-medium tracking-wide text-gray-900">
                SHREEJI ART
              </span>
              <span className="text-base tracking-[0.135em] text-gray-600 uppercase mt-[1px] font-medium">
                PREMIUM SIGNAGE
              </span>
            </div>
          </button>

          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`text-xl lg:text-2xl font-medium tracking-wide transition-colors ${
                  currentPage === item.page
                    ? 'text-[#06b6d4]'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.label}
              </button>
            ))}

            <Button
              onClick={() => handleNavClick('quote')}
              className="px-7 py-6 text-lg font-large bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] hover:opacity-90 text-white rounded-xl"
            >
              Get a Quote
            </Button>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-8 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-lg tracking-wide transition-colors ${
                    currentPage === item.page
                      ? 'bg-[#06b6d4]/10 text-[#06b6d4] font-medium'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <Button
                onClick={() => handleNavClick('quote')}
                className="w-full py-3 text-lg font-medium bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] text-white rounded-lg"
              >
                Get a Quote
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}