'use client';
import Logo from './Logo';
import Navigation from './Navigation';
import ShoppingCart from './Navigation/Shop';
import SwipeDrawer from './SwipeDrawer';
import ToggleTheme from './ToggleTheme';
import useGetUser from '@/app/Hooks/Auth/useGetUser';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
const Header = () => {
  // State

  const { data: user, isLoading, isError, refetch } = useGetUser();
  const queryClient = useQueryClient();

  // After Action Logout
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

  return (
    <header className="fixed top-0 w-full z-50 fadeComponent inset-x-0  backdrop-filter  dark:backdrop-brightness-50 backdrop-blur-[8px]">
      <div className="p-3 items-center flex lg:justify-around justify-between flex-wrap  bg-white dark:bg-gray-900">
        <section className="flex space-x-10 items-center">
          <Logo />
          <ToggleTheme />
          <ShoppingCart />
        </section>
        <section className="lg:flex hidden space-x-10 items-center">
          <Navigation user={user} isError={isError} isLoading={isLoading} />
        </section>
        <section className="lg:hidden flex">
          <SwipeDrawer user={user} isError={isError} isLoading={isLoading} />
        </section>
      </div>
    </header>
  );
};

export default Header;
