export interface User {
  id: string;
  username: string;
  name: string;
  avatar: string;
}

export interface PostInteraction {
  likes: number;
  comments: number;
  isLiked: boolean;
  isBookmarked: boolean;
}

export type PostType = 'basic' | 'detailed' | 'trivia';
export type ContentCategory = 'quotes' | 'movies' | 'funFacts' | 'memes' | 'trivia' | 'jokes' | 'shortStories' | 'all';

interface BasePost {
  id: string;
  type: PostType;
  category: ContentCategory;
  createdAt: string;
  interaction: PostInteraction;
}

export interface BasicPost extends BasePost {
  type: 'basic';
  title: string;
  image: string;
}

export interface DetailedPost extends BasePost {
  type: 'detailed';
  title: string;
  image: string;
  description: string;
}

export interface TriviaOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface TriviaPost extends BasePost {
  type: 'trivia';
  question: string;
  options: TriviaOption[];
}

export type Post = BasicPost | DetailedPost | TriviaPost;