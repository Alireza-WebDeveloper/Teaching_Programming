import { SignUpState } from '@/app/Models/Auth';
import { asyncSignUp } from '@/app/StateManagement/Service/Auth';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
const useSignUp = () => {
  const querykey = ['user'];
  const queryClient = useQueryClient();
  const { isError, isLoading, mutate } = useMutation({
    mutationKey: querykey,
    mutationFn: (user: SignUpState) => asyncSignUp(user),
    onSuccess: (values: any) => {
      const { user } = values.data.data;
      const { message } = values.data;
      queryClient.setQueryData(querykey, user);
      toast.success(`${message}`);
    },
    onError(error: Error) {
      toast.error(`${error.message}`);
    },
  });

  return { isError, isLoading, mutate };
};

export default useSignUp;
