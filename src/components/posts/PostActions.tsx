import React, { useState } from 'react';
import { Heart, Share2, Bookmark } from 'lucide-react';
import type { PostInteraction } from '../../types';

interface Props {
  interaction: PostInteraction;
  createdAt: string;
  onLike: () => void;
  onBookmark: () => void;
}

export default function PostActions({ interaction, createdAt, onLike, onBookmark }: Props) {
  const [isLiked, setIsLiked] = useState(interaction.isLiked);
  const [isBookmarked, setIsBookmarked] = useState(interaction.isBookmarked);
  const [likeCount, setLikeCount] = useState(interaction.likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
    onLike();
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    onBookmark();
  };

  const handleShare = async () => {
    try {
      await navigator.share({
        title: 'Check out this content!',
        text: 'I found this interesting content on JollySwipe',
        url: window.location.href,
      });
    } catch (error) {
      console.log('Error sharing:', error);
    }
  };

  return (
    <div className="px-4 py-3 flex items-center justify-between">
      <div className="flex items-center space-x-6">
        <button 
          onClick={handleLike}
          className="hover:opacity-70 transition-opacity"
        >
          <Heart 
            className={`w-7 h-7 ${isLiked ? 'fill-primary stroke-primary' : 'stroke-current'}`} 
          />
        </button>
        <button 
          onClick={handleShare}
          className="hover:opacity-70 transition-opacity"
        >
          <Share2 className="w-7 h-7" />
        </button>
        <button 
          onClick={handleBookmark}
          className="hover:opacity-70 transition-opacity"
        >
          <Bookmark 
            className={`w-7 h-7 ${isBookmarked ? 'fill-current' : ''}`} 
          />
        </button>
        <span className="font-semibold">{likeCount.toLocaleString()} likes</span>
      </div>
      
      <time className="text-sm text-gray-500">
        {new Date(createdAt).toLocaleDateString()}
      </time>
    </div>
  );
}