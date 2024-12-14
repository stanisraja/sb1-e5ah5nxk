import { Pool, RowDataPacket } from 'mysql2/promise';
import { Post, PostType } from '../../types';

export class PostRepository {
  constructor(private pool: Pool) {}

  async getAllPosts(): Promise<Post[]> {
    const [rows] = await this.pool.query<RowDataPacket[]>(
      'SELECT * FROM topics WHERE status = "active" ORDER BY created_at DESC'
    );
    return this.transformPosts(rows);
  }

  async getPostsByCategory(categoryId: number): Promise<Post[]> {
    const [rows] = await this.pool.query<RowDataPacket[]>(
      'SELECT * FROM topics WHERE category_id = ? AND status = "active" ORDER BY created_at DESC',
      [categoryId]
    );
    return this.transformPosts(rows);
  }

  private transformPosts(rows: RowDataPacket[]): Post[] {
    const categoryMap: Record<number, string> = {
      30: 'movies',
      60: 'memes',
      80: 'jokes',
      110: 'funFacts',
      130: 'quotes',
      150: 'trivia',
      170: 'shortStories'
    };

    return rows.map(row => ({
      id: row.id.toString(),
      type: this.getPostType(row.topic_type),
      category: categoryMap[row.category_id] || 'all',
      title: row.title,
      image: row.file || row.file_link,
      description: row.description,
      createdAt: row.created_at,
      ...(row.topic_type === 'poll' && {
        question: row.title,
        options: [
          { id: '1', text: row.option_1, isCorrect: row.currect_ans === '1' },
          { id: '2', text: row.option_2, isCorrect: row.currect_ans === '2' },
          { id: '3', text: row.option_3, isCorrect: row.currect_ans === '3' },
          { id: '4', text: row.option_4, isCorrect: row.currect_ans === '4' }
        ].filter(option => option.text)
      }),
      interaction: {
        likes: 0,
        comments: 0,
        isLiked: false,
        isBookmarked: false
      }
    }));
  }

  private getPostType(topicType: string): PostType {
    const typeMap: Record<string, PostType> = {
      'image': 'basic',
      'image_text': 'detailed',
      'poll': 'trivia'
    };
    return typeMap[topicType] || 'basic';
  }
}