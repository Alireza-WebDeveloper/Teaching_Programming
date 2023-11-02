'use client';
import { CommentState } from '@/app/Models/Comment';
import * as Icons from 'react-icons/md';
import CommentReply from './CommentReply';
import CreateCommentReply from '@/app/Components/Form/CreateCommentReply';
import CourseManager from '@/app/Helpers/CourseManager';
import useGetUser from '@/app/Hooks/Auth/useGetUser';
const newCourseManager = new CourseManager();
interface CommentItemProps {
  comment: CommentState;
}
const CommentItem: React.FC<CommentItemProps> = ({ comment }) => {
  // State Props
  const { data: userAuth, isLoading } = useGetUser();
  const { user, createAt, text } = comment;
  // Reply Comments
  const CommentReplies = () => {
    return comment.replies.map((reply) => {
      return <CommentReply key={reply._id} reply={reply} />;
    });
  };

  return (
    <section className="flex flex-col space-y-3 bg-gray-50 dark:bg-gray-800 rounded p-2 ">
      <section className="flex flex-row gap-3 items-center">
        <span>
          <Icons.MdOutlinePerson size="2rem" />
        </span>
        <span
          className={`text-lg font-semibold ${
            userAuth?.name === user.name
              ? 'text-purple-800 dark:text-purple-500'
              : ''
          }`}
        >
          {isLoading
            ? ''
            : userAuth && userAuth.name === user.name
            ? 'your comment'
            : user.name}
        </span>
        <span className="text-sm text-gray-400">
          {newCourseManager.convertDate(createAt)}
        </span>
      </section>
      <article className="text-lg pl-1 text-gray-800  dark:text-white">
        {text}
      </article>
      <article className="md:w-[90%] w-[98%] ml-[1%] md:ml-[5%] m-auto space-y-7  p-3 rounded">
        {/* Form New Comment */}
        {isLoading ? (
          ''
        ) : userAuth?.name === user.name ? (
          ''
        ) : (
          <CreateCommentReply commentId={comment._id} />
        )}
        {/* Render Comments Reply */}
        {CommentReplies()}
      </article>
    </section>
  );
};

export default CommentItem;
