import { asyncCreateCommentByCourse } from '@/app/StateManagement/Service/Comment';
import { useMutation } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

import { toast } from 'react-toastify';
const useCreateComment = () => {
  // Course Id
  const { id }: { id: string } = useParams();
  // Request
  const { data, isError, isLoading, mutate, isSuccess } = useMutation({
    mutationFn: (newComment: { text: string }) =>
      asyncCreateCommentByCourse(id, newComment),

    onSuccess: (values: any) => {
      const { message } = values;
      toast.success(`${message}`);
    },

    onError: (error: Error) => {
      toast.error(`${error.message}`);
    },
  });

  return { data, isError, isLoading, mutate, isSuccess };
};

export default useCreateComment;
