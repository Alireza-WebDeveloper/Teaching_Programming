'use client';
import { asyncGetCommentByCourseId } from '@/app/StateManagement/Service/Comment';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
const useGetComment = () => {
  // Course Id
  const { id }: { id: string } = useParams();
  //  Query Key
  const queryKey = ['comment', id];
  const { data, isLoading, isError, status, refetch } = useQuery(
    queryKey,
    () => asyncGetCommentByCourseId(id),
    {
      staleTime: 10000,
    }
  );
  return { data, isLoading, isError, status, refetch };
};

export default useGetComment;
