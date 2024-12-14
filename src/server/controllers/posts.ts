import { Request, Response, NextFunction } from 'express';
import { PostService } from '../services/postService';

export const getPosts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const posts = await PostService.getAllPosts();
    res.json(posts);
  } catch (error) {
    next(error);
  }
};

export const getPostsByCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { category } = req.params;
    const categoryMap: { [key: string]: number } = {
      movies: 30,
      memes: 60,
      jokes: 80,
      funFacts: 110,
      quotes: 130,
      trivia: 150,
      shortStories: 170
    };

    const categoryId = categoryMap[category];
    if (!categoryId) {
      return res.status(400).json({ error: 'Invalid category' });
    }

    const posts = await PostService.getPostsByCategory(categoryId);
    res.json(posts);
  } catch (error) {
    next(error);
  }
};