import { Post } from '../../types';
import { PostRepository } from '../repositories/postRepository';
import pool from '../db/connection';

export class PostService {
  private static repository = new PostRepository(pool);

  static async getAllPosts(): Promise<Post[]> {
    return this.repository.getAllPosts();
  }

  static async getPostsByCategory(categoryId: number): Promise<Post[]> {
    return this.repository.getPostsByCategory(categoryId);
  }
}