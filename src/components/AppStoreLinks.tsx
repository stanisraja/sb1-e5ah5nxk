import React from 'react';
import { Apple, PlayCircle } from 'lucide-react';

export default function AppStoreLinks() {
  return (
    <div className="flex items-center space-x-3">
      <a
        href="https://apps.apple.com/ca/app/jollyswipe-latest-trends/id6463115268"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-1 text-sm text-gray-600 hover:text-primary transition-colors"
      >
        <Apple className="w-5 h-5" />
        <span>iOS</span>
      </a>
      <a
        href="https://play.google.com/store/apps/details?id=com.app.jollyswipe"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-1 text-sm text-gray-600 hover:text-primary transition-colors"
      >
        <PlayCircle className="w-5 h-5" />
        <span>Android</span>
      </a>
    </div>
  );
}