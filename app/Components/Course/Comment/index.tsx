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
      <h1 className="text-xl font-bold">Course comments</h1>
      <CreateComment />
      <CommentList comments={comments} />
    </div>
  );
};

export default Comment;
