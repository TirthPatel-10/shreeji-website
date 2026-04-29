import { Home, Briefcase, FolderOpen, GitBranch, FileText } from 'lucide-react';
import { PageType } from '../lib/types';

interface MobileBottomNavProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

export function MobileBottomNav({ currentPage, onNavigate }: MobileBottomNavProps) {
  const navItems: { icon: any; label: string; page: PageType }[] = [
    { icon: Home, label: 'Home', page: 'home' },
    { icon: Briefcase, label: 'Services', page: 'services' },
    { icon: FolderOpen, label: 'Projects', page: 'projects' },
    { icon: GitBranch, label: 'Process', page: 'process' },
    { icon: FileText, label: 'Quote', page: 'quote' }
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 safe-area-inset-bottom">
      <div className="grid grid-cols-5 h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.page;
          
          return (
            <button
              key={item.page}
              onClick={() => onNavigate(item.page)}
              className={`flex flex-col items-center justify-center space-y-1 transition-colors ${
                isActive ? 'text-[#06b6d4]' : 'text-gray-600'
              }`}
            >
              <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-xs">{item.label}</span>
              {isActive && (
                <div className="absolute bottom-0 w-12 h-0.5 bg-gradient-to-r from-[#06b6d4] to-[#3b82f6]" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
