import { asyncLogout } from '@/app/StateManagement/Service/Auth';
import { useMutation, useQueryClient } from '@tanstack/react-query';
const useLogout = () => {
  const querykey = ['user'];
  const queryClient = useQueryClient();
  const { isError, isLoading, mutate } = useMutation({
    mutationKey: querykey,
    mutationFn: () => asyncLogout(),
    onSuccess: () => {
      queryClient.setQueryData(querykey, null);
    },
    onError: (error: Error) => {
      console.log(`Error!`);
    },
  });

  return { isError, isLoading, mutate };
};

export default useLogout;
