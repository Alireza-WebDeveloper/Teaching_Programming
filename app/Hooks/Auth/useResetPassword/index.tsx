import { asyncResetPassword } from '@/app/StateManagement/Service/Auth';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
const useResetPassword = () => {
  const querykey = ['user'];
  const router = useRouter();
  const queryClient = useQueryClient();
  const { isError, isLoading, mutate } = useMutation({
    mutationKey: querykey,
    mutationFn: (data: any) => asyncResetPassword(data),
    onSuccess: (values: any) => {
      queryClient.setQueryData(querykey, null);
      const { message } = values.data;
      toast.success(`${message}`);
      router.push('/auth/signin');
    },
    onError: (error: Error) => {
      toast.error(`${error.message}`);
    },
  });

  return { isError, isLoading, mutate };
};

export default useResetPassword;
