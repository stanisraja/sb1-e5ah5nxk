import React from 'react';
import type { BasicPost as BasicPostType } from '../../types';
import PostActions from './PostActions';

interface Props {
  post: BasicPostType;
}

export default function BasicPost({ post }: Props) {
  const handleLike = () => {
    // Handle like action
  };

  const handleBookmark = () => {
    // Handle bookmark action
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg mb-6">
      <h2 className="px-4 py-3 text-xl font-semibold">{post.title}</h2>
      
      <div className="aspect-square relative">
        <img 
          src={post.image} 
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <PostActions 
        interaction={post.interaction}
        createdAt={post.createdAt}
        onLike={handleLike}
        onBookmark={handleBookmark}
      />
    </div>
  );
}