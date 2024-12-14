import React, { useState } from 'react';
import type { TriviaPost as TriviaPostType } from '../../types';
import PostActions from './PostActions';

interface Props {
  post: TriviaPostType;
}

export default function TriviaPost({ post }: Props) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (optionId: string) => {
    setSelectedOption(optionId);
  };

  const handleLike = () => {
    // Handle like action
  };

  const handleBookmark = () => {
    // Handle bookmark action
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg mb-6">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">{post.question}</h2>
        
        <div className="space-y-3">
          {post.options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleOptionClick(option.id)}
              disabled={selectedOption !== null}
              className={`w-full p-4 rounded-lg border text-left transition-colors ${
                selectedOption === null
                  ? 'hover:bg-gray-50'
                  : selectedOption === option.id
                  ? option.isCorrect
                    ? 'bg-green-100 border-green-500'
                    : 'bg-red-100 border-red-500'
                  : option.isCorrect
                  ? 'bg-green-100 border-green-500'
                  : 'bg-gray-50 border-gray-200'
              }`}
            >
              {option.text}
            </button>
          ))}
        </div>
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