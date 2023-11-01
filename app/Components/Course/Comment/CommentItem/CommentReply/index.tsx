import { ReplyComment } from '@/app/Models/Comment';
import * as Icons from 'react-icons/md';
import React from 'react';
import CourseManager from '@/app/Helpers/CourseManager';
const newCourseManager = new CourseManager();
// Type
interface CommentReplyProps {
  reply: ReplyComment;
}
const CommentReply: React.FC<CommentReplyProps> = ({ reply }) => {
  // State Props
  const { user, createAt, text } = reply;
  return (
    <section className="flex flex-col space-y-3 bg-gray-100 dark:bg-gray-700 rounded p-5">
      <section className="flex flex-row gap-3 items-center">
        <span>
          <Icons.MdOutlinePerson size="2rem" />
        </span>
        <span className="text-lg font-semibold"> {user.name}</span>
        <span className="text-sm text-gray-400">
          {newCourseManager.convertDate(createAt)}
        </span>
      </section>
      <article className="text-lg text-gray-800 dark:text-white">
        {text}
      </article>
    </section>
  );
};

export default CommentReply;
