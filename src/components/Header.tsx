import React from 'react';
import { Search } from 'lucide-react';
import MobileNav from './MobileNav';
import Logo from './Logo';
import AppStoreLinks from './AppStoreLinks';
import type { ContentCategory } from '../types';

interface Props {
  activeCategory: ContentCategory;
  onCategoryChange: (category: ContentCategory) => void;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function Header({ activeCategory, onCategoryChange, setMobileMenuOpen }: Props) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-40">
      <div className="max-w-5xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between gap-4">
          <div className="lg:hidden">
            <MobileNav
              activeCategory={activeCategory}
              onCategoryChange={onCategoryChange}
              setMobileMenuOpen={setMobileMenuOpen}
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <Logo />
            <AppStoreLinks />
          </div>
          
          <div className="w-48 sm:w-64">
            <div className="relative">
              <Search className="absolute left-2 top-2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-gray-100 pl-8 pr-3 py-1.5 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}