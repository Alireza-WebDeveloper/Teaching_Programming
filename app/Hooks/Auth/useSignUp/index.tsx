import { SignUpState } from '@/app/Models/Auth';
import { asyncSignUp } from '@/app/StateManagement/Service/Auth';
import { useMutation, useQueryClient } from '@tanstack/react-query';
const useSignUp = () => {
  const querykey = ['user'];
  const queryClient = useQueryClient();
  const { isError, isLoading, mutate } = useMutation({
    mutationKey: querykey,
    mutationFn: (user: SignUpState) => asyncSignUp(user),
    onSuccess: (values: any) => {
      const { user } = values.data.data;
      queryClient.setQueryData(querykey, user);
    },
    onError(error: any, variables, context) {
      alert(error);
    },
  });

  return { isError, isLoading, mutate };
};

export default useSignUp;
