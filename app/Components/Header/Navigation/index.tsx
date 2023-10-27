'use client';
import useGetUser from '@/app/Hooks/Auth/useGetUser';
import { useQueryClient } from '@tanstack/react-query';
import GlobalLinks from './Global';
import SignLinks from './Sign';
import Logout from './Logout';
import Auth from './Auth';
import { useEffect, useState } from 'react';
const Navigation = () => {
  // States Check Auth
  const { data: user, isLoading, isError, refetch } = useGetUser();
  const queryClient = useQueryClient();
  // Error = Set Null User Data
  if (isError) {
    queryClient.setQueryData(['user'], null);
  }
  // Auto Refetch UseGetUser When Change Tab
  useEffect(() => {
    const onFocus = () => {
      refetch();
    };
    window.addEventListener('focus', onFocus);
    return () => {
      window.removeEventListener('focus', onFocus);
    };
  }, [refetch]);
  // Render
  return (
    <section className="flex flex-wrap relative gap-7 items-center">
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
