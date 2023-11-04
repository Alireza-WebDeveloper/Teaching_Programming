import { asyncSaveLikeComment } from '@/app/StateManagement/Service/LikeComment';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { useParams } from 'next/navigation';
const useSaveLikeComment = () => {
  const queryClient = useQueryClient();
  const { id }: { id: string } = useParams();
  const { data, isError, isLoading, mutate } = useMutation({
    mutationFn: (commentId: string) => asyncSaveLikeComment(commentId),
    onSuccess: (response: any) => {
      // Data Of Response
      const {
        data: { commentId, userId },
      } = response;
      // 1 ) Get Comment From Key Value
      const { comments }: any = queryClient.getQueryData(['comment', id]);
      // 2 ) Find Comment Like
      const findComment = comments.find((comment: any) => {
        return comment._id === commentId;
      });
      // 3 ) Update Like
      findComment.likes.push({ user: userId, comment: commentId });
      // 4 ) Update Comment With Key Value
      queryClient.setQueryData(['comment', id], { comments });
    },
    onError: (error: Error) => {
      toast.error(`${error.message}`);
    },
  });

  return { data, isError, isLoading, mutate };
};

export default useSaveLikeComment;
