import { asyncUpdateAvatar } from '@/app/StateManagement/Service/Auth';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
const useUpdateAvatar = () => {
  const querykey = ['user'];
  const queryClient = useQueryClient();
  const { isError, isLoading, mutate } = useMutation({
    mutationKey: querykey,
    mutationFn: (data: { avatar: string }) => asyncUpdateAvatar(data),
    onSuccess: (values: any) => {
      console.log(values);
      //   queryClient.setQueryData(querykey, null);
      //   const { message } = values.data;
      //   toast.success(`${message}`);
    },
    onError: (error: Error) => {
      toast.error(`${error.message}`);
    },
  });

  return { isError, isLoading, mutate };
};

export default useUpdateAvatar;
