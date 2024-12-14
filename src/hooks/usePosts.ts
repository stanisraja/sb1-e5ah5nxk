import { useState, useEffect } from 'react';
import type { Post, ContentCategory } from '../types';
import { getApiUrl } from '../config/api';
import { posts as mockPosts } from '../data/mockData';

export function usePosts(category: ContentCategory) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);

        // In development, use mock data if API is not available
        if (import.meta.env.DEV) {
          const filteredPosts = category === 'all' 
            ? mockPosts
            : mockPosts.filter(post => post.category === category);
          setPosts(filteredPosts);
          setLoading(false);
          return;
        }

        const apiUrl = getApiUrl();
        const endpoint = category === 'all' 
          ? `${apiUrl}/posts`
          : `${apiUrl}/posts/${category}`;
        
        const response = await fetch(endpoint);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        console.error('Error fetching posts:', err);
        // Fallback to mock data if API fails
        const filteredPosts = category === 'all' 
          ? mockPosts
          : mockPosts.filter(post => post.category === category);
        setPosts(filteredPosts);
        setError('Using offline data');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [category]);

  return { posts, loading, error };
}