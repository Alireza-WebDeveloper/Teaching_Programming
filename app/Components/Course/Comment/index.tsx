import { CommentState } from '@/app/Models/Comment';
import CommentList from './CommentList';
import CreateComment from '../../Form/CreateComment';

// Type
export interface CommentProps {
  comments: CommentState[];
}
const Comment: React.FC<CommentProps> = ({ comments }) => {
  return (
    <div className="flex flex-col space-y-4  rounded">
      <CreateComment />
      {comments.length === 0 ? (
        <h1 className="capitalize p-2 bg-white rounded dark:bg-gray-800">
          There are currently no comments
        </h1>
      ) : (
        <CommentList comments={comments} />
      )}
    </div>
  );
};

export default Comment;
