import { CommentState } from '@/app/Models/Comment';
import React from 'react';
import CommentItem from '../CommentItem';

interface CommentListProps {
  comments: CommentState[];
}
const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  // Comment Items
  const commentItems = () => {
    return comments.reverse().map((comment) => {
      return <CommentItem key={comment._id} comment={comment} />;
    });
  };
  return (
    <section className="flex flex-col space-y-4 bg-white dark:bg-gray-900 rounded p-3">
      {commentItems()}
    </section>
  );
};

export default CommentList;
