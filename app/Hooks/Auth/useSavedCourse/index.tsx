import { asyncSavedCourse } from '@/app/StateManagement/Service/Auth';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
const useSavedCourse = () => {
  const querykey = ['user'];
  const queryClient = useQueryClient();
  const { isError, isLoading, mutate } = useMutation({
    mutationKey: querykey,
    mutationFn: (data: any) => asyncSavedCourse(data),
    onSuccess: (values: any) => {
      const userUpdate = values.data.user;
      queryClient.setQueryData(querykey, userUpdate);
      const { message } = values;
      toast.success(`${message}`);
    },
    onError: (error: Error) => {
      console.log(error);
      toast.error(`${error.message}`);
    },
  });

  return { isError, isLoading, mutate };
};

export default useSavedCourse;
