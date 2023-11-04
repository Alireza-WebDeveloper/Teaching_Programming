import { asyncDeleteLikeComment } from '@/app/StateManagement/Service/LikeComment';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { toast } from 'react-toastify';
const useDeleteLikeComment = () => {
  // QueryClient State
  const queryClient = useQueryClient();
  // CourseId
  const { id }: { id: string } = useParams();
  // Request
  const { data, isError, isLoading, mutate } = useMutation({
    mutationFn: (commentId: string) => asyncDeleteLikeComment(commentId),
    onSuccess: (response: any) => {
      // Data Of Response
      const {
        data: { commentId, userId },
      } = response;
      // 1 ) Get Comment From Key Value
      const { comments }: any = queryClient.getQueryData(['comment', id]);
      // 2 ) Find Comment Like
      const findComment = comments.find(
        (comment: any) => comment._id === commentId
      );
      // 3 ) Update Like
      const updateLike = findComment.likes.filter((like: any) => {
        return like.user !== userId && like.user !== commentId;
      });
      findComment.likes = [...updateLike];
      // 4 ) Update Comment With Key Value
      queryClient.setQueryData(['comment', id], { comments });
    },
    onError: (error: Error) => {
      toast.error(`${error.message}`);
    },
  });

  return { data, isError, isLoading, mutate };
};

export default useDeleteLikeComment;
