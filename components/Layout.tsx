import React, { useState } from 'react';
import { NavItem } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activePath: string;
  onNavigate: (path: string) => void;
}

const navItems: NavItem[] = [
  { label: 'accueil', path: '/' },
  { label: 'livres', path: '/books' },
  { label: 'articles', path: '/essays' },
  { label: 'synthèses', path: '/press' },
  { label: 'les cahiers du brésil', path: '/letters' },
];

export const Layout: React.FC<LayoutProps> = ({ children, activePath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden flex justify-between items-center p-6 border-b border-gray-100 sticky top-0 bg-white/90 backdrop-blur-sm z-50">
        <span className="font-serif italic text-xl">Critikids</span>
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[73px] bg-white z-40 p-6 space-y-4">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => {
                onNavigate(item.path);
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left text-2xl font-light py-2 ${
                activePath === item.path ? 'text-black font-normal' : 'text-gray-400'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      {/* Sidebar (Desktop) */}
      <aside className="hidden md:flex flex-col w-64 p-12 h-screen sticky top-0 border-r border-gray-100">
        <div className="mb-12">
          <h1 className="font-serif italic text-2xl mb-2">Critikids</h1>
          <p className="text-xs text-gray-400 uppercase tracking-widest">Personal Archive</p>
        </div>
        
        <nav className="flex-1 space-y-6">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => onNavigate(item.path)}
              className={`block text-left text-sm tracking-wide transition-colors duration-300 hover:text-black ${
                activePath === item.path 
                  ? 'text-black font-medium border-l-2 border-black pl-3 -ml-3.5' 
                  : 'text-gray-500'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="text-xs text-gray-300 mt-auto">
          &copy; {new Date().getFullYear()}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-16 lg:p-24 max-w-4xl mx-auto w-full">
        {children}
      </main>
    </div>
  );
};