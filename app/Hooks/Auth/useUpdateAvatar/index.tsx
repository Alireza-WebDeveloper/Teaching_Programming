import { asyncUpdateAvatar } from '@/app/StateManagement/Service/Auth';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
const useUpdateAvatar = () => {
  const querykey = ['user'];
  const queryClient = useQueryClient();
  const { isError, isLoading, mutate } = useMutation({
    mutationKey: querykey,
    mutationFn: (data: any) => asyncUpdateAvatar(data),
    onSuccess: (values: any) => {
      const {
        data: { user },
      } = values;
      queryClient.setQueryData(querykey, user);
      const { message } = values;
      toast.success(`${message}`);
    },
    onError: (error: Error) => {
      toast.error(`${error.message}`);
    },
  });

  return { isError, isLoading, mutate };
};

export default useUpdateAvatar;
