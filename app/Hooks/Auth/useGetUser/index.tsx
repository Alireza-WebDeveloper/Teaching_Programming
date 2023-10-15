import { asyncGetUserVerificationToken } from '@/app/StateManagement/Service/Auth';
import { useQuery } from '@tanstack/react-query';

const useGetUser = () => {
  const queryKey = ['user'];
  const { data, isLoading, isError, status } = useQuery(
    queryKey,
    asyncGetUserVerificationToken,
    {
      retry: 0,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    }
  );
  return { data, isLoading, isError, status };
};

export default useGetUser;
