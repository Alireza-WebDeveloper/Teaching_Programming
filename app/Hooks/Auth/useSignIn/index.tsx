import { SignInState } from '@/app/Models/Auth';
import { asyncSignIn } from '@/app/StateManagement/Service/Auth';
import { useMutation, useQueryClient } from '@tanstack/react-query';
const useSignIn = () => {
  const querykey = ['user'];
  const queryClient = useQueryClient();
  const { data, isError, isLoading, mutate } = useMutation({
    mutationKey: querykey,
    mutationFn: (user: SignInState) => asyncSignIn(user),
    onSuccess: (values: any) => {
      const { user } = values.data.data;
      queryClient.setQueryData(querykey, user);
    },
    onError: (error: Error) => {
      console.log(`Email Or Password Wrong`);
    },
  });

  return { data, isError, isLoading, mutate };
};

export default useSignIn;
