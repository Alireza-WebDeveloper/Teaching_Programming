import { asyncGetUserVerificationToken } from '@/app/StateManagement/Service/Auth';
import { useQuery } from '@tanstack/react-query';

const useGetUser = () => {
  const queryKey = ['user'];
  const { data, isLoading, isError } = useQuery(
    queryKey,
    asyncGetUserVerificationToken
  );
  return { data, isLoading, isError };
};

export default useGetUser;
