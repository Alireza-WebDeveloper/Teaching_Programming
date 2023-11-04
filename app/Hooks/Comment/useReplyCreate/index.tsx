import { asyncCreateReplyByCourseAndComment } from '@/app/StateManagement/Service/Comment';
import { useMutation } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

import { toast } from 'react-toastify';
const useCreateReplyComment = () => {
  // Course Id
  const { id: courseId }: { id: string } = useParams();
  // Request
  const { data, isError, isLoading, mutate, isSuccess } = useMutation({
    mutationFn: ({ text, commentId }: { text: string; commentId: string }) =>
      asyncCreateReplyByCourseAndComment(courseId, commentId, { text }),
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

export default useCreateReplyComment;
