import React from 'react';
import { X, Home, Quote, Film, Lightbulb, Image, HelpCircle, Smile, BookOpen } from 'lucide-react';
import type { ContentCategory } from '../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  activeCategory: ContentCategory;
  onCategoryChange: (category: ContentCategory) => void;
}

const menuItems = [
  { icon: <Home className="w-6 h-6" />, label: 'Home', category: 'all' as ContentCategory },
  { icon: <Quote className="w-6 h-6" />, label: 'Quotes', category: 'quotes' as ContentCategory },
  { icon: <Film className="w-6 h-6" />, label: 'Movies', category: 'movies' as ContentCategory },
  { icon: <Lightbulb className="w-6 h-6" />, label: 'Fun Facts', category: 'funFacts' as ContentCategory },
  { icon: <Image className="w-6 h-6" />, label: 'Memes', category: 'memes' as ContentCategory },
  { icon: <HelpCircle className="w-6 h-6" />, label: 'Trivia', category: 'trivia' as ContentCategory },
  { icon: <Smile className="w-6 h-6" />, label: 'Jokes', category: 'jokes' as ContentCategory },
  { icon: <BookOpen className="w-6 h-6" />, label: 'Short Stories', category: 'shortStories' as ContentCategory }
];

export default function MobileMenu({ isOpen, onClose, activeCategory, onCategoryChange }: Props) {
  if (!isOpen) return null;

  const handleCategoryClick = (category: ContentCategory) => {
    onCategoryChange(category);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
      <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-xl">
        <div className="p-4">
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg float-right"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="clear-both" />
          <nav className="space-y-2 mt-4">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleCategoryClick(item.category)}
                className={`w-full flex items-center space-x-4 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors ${
                  activeCategory === item.category ? 'font-semibold text-purple-600 bg-purple-50' : ''
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}