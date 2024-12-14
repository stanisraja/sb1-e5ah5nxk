import React from 'react';
import type { Post as PostType } from '../types';
import BasicPost from './posts/BasicPost';
import DetailedPost from './posts/DetailedPost';
import TriviaPost from './posts/TriviaPost';

interface Props {
  post: PostType;
}

export default function Post({ post }: Props) {
  switch (post.type) {
    case 'basic':
      return <BasicPost post={post} />;
    case 'detailed':
      return <DetailedPost post={post} />;
    case 'trivia':
      return <TriviaPost post={post} />;
    default:
      return null;
  }
}