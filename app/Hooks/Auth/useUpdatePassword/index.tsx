import { asyncUpdatePassword } from '@/app/StateManagement/Service/Auth';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
const useUpdatePassword = () => {
  const querykey = ['user'];
  const queryClient = useQueryClient();
  const { isError, isLoading, mutate } = useMutation({
    mutationKey: querykey,
    mutationFn: (data: any) => asyncUpdatePassword(data),
    onSuccess: (values) => {
      queryClient.setQueryData(querykey, null);
      const { message } = values.data;
      toast.success(`${message}`);
    },
    onError: (error: Error) => {
      toast.error(`${error.message}`);
    },
  });

  return { isError, isLoading, mutate };
};

export default useUpdatePassword;
