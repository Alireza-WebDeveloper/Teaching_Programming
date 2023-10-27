import { asyncGetUserVerificationToken } from '@/app/StateManagement/Service/Auth';
import { useQuery } from '@tanstack/react-query';

const useGetUser = () => {
  const queryKey = ['user'];
  const { data, isLoading, isError, status, refetch } = useQuery(
    queryKey,
    asyncGetUserVerificationToken,
    {
      retry: false,
      staleTime: 60000,
      refetchOnMount: true,
      refetchOnReconnect: true,
      refetchOnWindowFocus: true,
    }
  );
  return { data, isLoading, isError, status, refetch };
};

export default useGetUser;
