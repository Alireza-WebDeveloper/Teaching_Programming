import { SignInState } from '@/app/Models/Auth';
import { asyncSignIn } from '@/app/StateManagement/Service/Auth';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
const useSignIn = () => {
  const querykey = ['user'];
  const queryClient = useQueryClient();
  const { data, isError, isLoading, mutate } = useMutation({
    mutationKey: querykey,
    mutationFn: (user: SignInState) => asyncSignIn(user),
    onSuccess: (values: any) => {
      const { user } = values.data.data;
      const { message } = values.data;
      queryClient.setQueryData(querykey, user);
      toast.success(`${message}`);
    },
    onError: (error: Error) => {
      toast.error(`${error.message}`);
    },
  });

  return { data, isError, isLoading, mutate };
};

export default useSignIn;
