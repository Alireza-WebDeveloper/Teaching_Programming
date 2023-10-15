'use client';
import Link from 'next/link';
import useGetUser from '@/app/Hooks/Auth/useGetUser';
import { useQueryClient } from '@tanstack/react-query';
import GlobalLinks from './Global';
import PrivateLinks from './Private';
const Navigation = () => {
  // States Check Auth
  const { data: user, isLoading, isError } = useGetUser();
  const queryClient = useQueryClient();
  const shouldShowButtons = !user && !isLoading;
  // Error = Set Null User Data
  if (isError) {
    queryClient.setQueryData(['user'], null);
  }
  // Render
  return (
    <section className="flex flex-wrap relative">
      {shouldShowButtons ? (
        <>
          <GlobalLinks />
          <PrivateLinks />
        </>
      ) : (
        <>
          <GlobalLinks />
        </>
      )}
    </section>
  );
};

export default Navigation;
