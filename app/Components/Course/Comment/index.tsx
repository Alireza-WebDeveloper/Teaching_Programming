'use client';
import CommentList from './CommentList';
import CreateComment from '../../Form/CreateComment';
import useGetComment from '@/app/Hooks/Comment/useGetComment';

// Type

const Comment = () => {
  const { data } = useGetComment();
  return (
    <div className="flex flex-col space-y-4  rounded">
      <CreateComment />
      {data?.comments && data.comments.length === 0 ? (
        <h1 className="capitalize p-2 bg-white rounded dark:bg-gray-800">
          There are currently no comments
        </h1>
      ) : (
        <>{data?.comments && <CommentList comments={data?.comments} />}</>
      )}
    </div>
  );
};

export default Comment;
