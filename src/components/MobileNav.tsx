import React from 'react';
import { Menu } from 'lucide-react';
import type { ContentCategory } from '../types';

interface Props {
  activeCategory: ContentCategory;
  onCategoryChange: (category: ContentCategory) => void;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function MobileNav({ activeCategory, onCategoryChange, setMobileMenuOpen }: Props) {
  return (
    <div className="lg:hidden">
      <button
        onClick={() => setMobileMenuOpen(true)}
        className="p-2 hover:bg-gray-100 rounded-lg"
      >
        <Menu className="w-6 h-6" />
      </button>
    </div>
  );
}