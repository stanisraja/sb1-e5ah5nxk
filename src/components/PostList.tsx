import React from 'react';
import Post from './Post';
import type { Post as PostType } from '../types';

interface Props {
  posts: PostType[];
}

export default function PostList({ posts }: Props) {
  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}