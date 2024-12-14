import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MobileMenu from './components/MobileMenu';
import PostList from './components/PostList';
import type { ContentCategory } from './types';
import { usePosts } from './hooks/usePosts';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<ContentCategory>('all');
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { posts, loading, error } = usePosts(activeCategory);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (error) {
    return <div className="min-h-screen flex items-center justify-center text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <div className="pt-16 flex">
        <Sidebar 
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        <main className="ml-0 lg:ml-64 flex-1 px-4 py-6">
          <div className="max-w-[500px] mx-auto">
            <PostList posts={posts} />
          </div>
        </main>
      </div>
      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
    </div>
  );
}