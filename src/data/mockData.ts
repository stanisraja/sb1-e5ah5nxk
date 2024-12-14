import { Post } from '../types';

export const posts: Post[] = [
  // Quotes
  {
    id: '1',
    type: 'basic',
    category: 'quotes',
    title: '"The only way to do great work is to love what you do." - Steve Jobs',
    image: 'https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?w=800&h=800&fit=crop',
    createdAt: '2024-03-10T14:30:00Z',
    interaction: {
      likes: 1234,
      comments: 0,
      isLiked: false,
      isBookmarked: false
    }
  },
  
  // Movies
  {
    id: '2',
    type: 'detailed',
    category: 'movies',
    title: 'Inception (2010)',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&h=800&fit=crop',
    description: 'A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    createdAt: '2024-03-10T12:00:00Z',
    interaction: {
      likes: 2891,
      comments: 0,
      isLiked: true,
      isBookmarked: true
    }
  },
  
  // Fun Facts
  {
    id: '3',
    type: 'basic',
    category: 'funFacts',
    title: 'Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible!',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&h=800&fit=crop',
    createdAt: '2024-03-10T10:00:00Z',
    interaction: {
      likes: 543,
      comments: 0,
      isLiked: false,
      isBookmarked: false
    }
  },
  
  // Memes
  {
    id: '4',
    type: 'basic',
    category: 'memes',
    title: 'When you finally fix that bug that took 4 hours',
    image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=800&h=800&fit=crop',
    createdAt: '2024-03-09T15:00:00Z',
    interaction: {
      likes: 9876,
      comments: 0,
      isLiked: false,
      isBookmarked: false
    }
  },
  
  // Trivia
  {
    id: '5',
    type: 'trivia',
    category: 'trivia',
    question: 'Which is the largest planet in our solar system?',
    options: [
      { id: '1', text: 'Mars', isCorrect: false },
      { id: '2', text: 'Jupiter', isCorrect: true },
      { id: '3', text: 'Saturn', isCorrect: false },
      { id: '4', text: 'Neptune', isCorrect: false }
    ],
    createdAt: '2024-03-09T14:00:00Z',
    interaction: {
      likes: 432,
      comments: 0,
      isLiked: false,
      isBookmarked: false
    }
  },
  
  // Jokes
  {
    id: '6',
    type: 'detailed',
    category: 'jokes',
    title: 'Why don\'t programmers like nature?',
    image: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=800&h=800&fit=crop',
    description: 'It has too many bugs! 🐛',
    createdAt: '2024-03-09T13:00:00Z',
    interaction: {
      likes: 765,
      comments: 0,
      isLiked: false,
      isBookmarked: false
    }
  },
  
  // Short Stories
  {
    id: '7',
    type: 'detailed',
    category: 'shortStories',
    title: 'The Last Cookie',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&h=800&fit=crop',
    description: 'She stared at the last cookie in the jar, remembering how her grandmother used to bake them every Sunday. The smell of vanilla and chocolate chips would fill the entire house. Now, years later, she finally found the courage to try the recipe herself.',
    createdAt: '2024-03-09T12:00:00Z',
    interaction: {
      likes: 1543,
      comments: 0,
      isLiked: false,
      isBookmarked: false
    }
  }
];