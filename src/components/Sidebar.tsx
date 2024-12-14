import React from 'react';
import { Home, Quote, Film, Lightbulb, Image, HelpCircle, Smile, BookOpen } from 'lucide-react';
import type { ContentCategory } from '../types';

interface MenuItem {
  icon: React.ReactNode;
  label: string;
  category: ContentCategory;
}

const menuItems: MenuItem[] = [
  { icon: <Home className="w-6 h-6" />, label: 'Home', category: 'all' },
  { icon: <Quote className="w-6 h-6" />, label: 'Quotes', category: 'quotes' },
  { icon: <Film className="w-6 h-6" />, label: 'Movies', category: 'movies' },
  { icon: <Lightbulb className="w-6 h-6" />, label: 'Fun Facts', category: 'funFacts' },
  { icon: <Image className="w-6 h-6" />, label: 'Memes', category: 'memes' },
  { icon: <HelpCircle className="w-6 h-6" />, label: 'Trivia', category: 'trivia' },
  { icon: <Smile className="w-6 h-6" />, label: 'Jokes', category: 'jokes' },
  { icon: <BookOpen className="w-6 h-6" />, label: 'Short Stories', category: 'shortStories' }
];

interface Props {
  activeCategory: ContentCategory;
  onCategoryChange: (category: ContentCategory) => void;
}

export default function Sidebar({ activeCategory, onCategoryChange }: Props) {
  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 border-r border-gray-200 bg-white p-4 lg:block hidden">
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.label}
            onClick={() => onCategoryChange(item.category)}
            className={`w-full flex items-center space-x-4 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors ${
              activeCategory === item.category ? 'font-semibold text-primary bg-orange-50' : ''
            }`}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}