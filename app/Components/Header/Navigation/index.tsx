'use client';
import Link from 'next/link';
import useGetUser from '@/app/Hooks/Auth/useGetUser';
import { useQueryClient } from '@tanstack/react-query';
import GlobalLinks from './Global';
import SignLinks from './Sign';
import Logout from './Logout';
import Auth from './Auth';
const Navigation = () => {
  // States Check Auth
  const { data: user, isLoading, isError } = useGetUser();
  const queryClient = useQueryClient();
  // Error = Set Null User Data
  if (isError) {
    queryClient.setQueryData(['user'], null);
  }
  // Render
  return (
    <section className="flex flex-wrap relative">
      {!user && !isLoading ? (
        <>
          <GlobalLinks />
          <SignLinks />
        </>
      ) : !user ? (
        <>
          <GlobalLinks />
        </>
      ) : (
        <>
          <GlobalLinks />
          <Logout />
          <Auth />
        </>
      )}
    </section>
  );
};

export default Navigation;
