import React from 'react';
import type { User } from '../../types';

interface Props {
  user: User;
  createdAt: string;
}

export default function PostHeader({ user, createdAt }: Props) {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center">
        <img
          src={user.avatar}
          alt={user.username}
          className="w-8 h-8 rounded-full"
        />
        <span className="ml-3 font-semibold">{user.username}</span>
      </div>
      <time className="text-sm text-gray-500">
        {new Date(createdAt).toLocaleDateString()}
      </time>
    </div>
  );
}