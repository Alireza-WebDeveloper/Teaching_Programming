'use client';
import { CommentState } from '@/app/Models/Comment';
import * as Icons from 'react-icons/md';
import CommentReply from './CommentReply';
import CreateCommentReply from '@/app/Components/Form/CreateCommentReply';
import CourseManager from '@/app/Helpers/CourseManager';
import useGetUser from '@/app/Hooks/Auth/useGetUser';
import useSaveLikeComment from '@/app/Hooks/Comment/useSaveLikeComment';
import useDeleteLikeComment from '@/app/Hooks/Comment/useDeleteLikeComment';
const newCourseManager = new CourseManager();
interface CommentItemProps {
  comment: CommentState;
}
const CommentItem: React.FC<CommentItemProps> = ({ comment }) => {
  // State Props
  const { data: userAuth, isLoading }: any = useGetUser();
  const { user, createAt, text, likes }: any = comment;
  const { mutate: mutateSaveLike } = useSaveLikeComment();
  const { mutate: mutateDeleteLike } = useDeleteLikeComment();
  // Reply Comments
  const CommentReplies = () => {
    return comment.replies.reverse().map((reply) => {
      return <CommentReply key={reply._id} reply={reply} />;
    });
  };
  // Check Like
  const checkLike = likes.some((like: any) => like.user === userAuth?.id);
  // Save Like Comment
  const handlerSaveLikeComment = async () => {
    mutateSaveLike(comment._id);
  };
  // Delete Like Comment
  const handlerDeleteLikeComment = async () => {
    mutateDeleteLike(comment._id);
  };
  return (
    <section className="flex flex-col space-y-3 bg-gray-50 dark:bg-gray-800 rounded p-2 ">
      <div className="flex justify-between items-center flex-wrap">
        <section className="flex flex-row gap-3 items-center">
          <span>
            <Icons.MdOutlinePerson size="2rem" />
          </span>
          <span
            className={`md:text-lg text-sm font-semibold ${
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
        <section className="flex items-center gap-2">
          <span className="text-lg font-semibold">{likes.length}</span>
          {isLoading ? (
            ''
          ) : checkLike ? (
            <Icons.MdFavorite
              onClick={handlerDeleteLikeComment}
              size="2rem"
              className="cursor-pointer"
            />
          ) : (
            <Icons.MdFavoriteBorder
              onClick={handlerSaveLikeComment}
              size="2rem"
              className="cursor-pointer"
            />
          )}
        </section>
      </div>
      <article className="text-lg pl-1 text-gray-800  dark:text-white">
        {text}
      </article>
      <article className="md:w-[90%] w-[98%] ml-[1%] md:ml-[5%] m-auto space-y-7  p-3 rounded">
        {/* Form New Comment */}
        {isLoading ? (
          ''
        ) : userAuth?.id === user._id ? (
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
