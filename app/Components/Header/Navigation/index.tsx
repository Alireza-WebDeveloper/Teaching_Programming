'use client';
import Link from 'next/link';
import useGetUser from '@/app/Hooks/Auth/useGetUser';
import { useQueryClient } from '@tanstack/react-query';
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
          <Link href="/about">
            <button className="px-5 py-2.5 rounded relative capitalize hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">
              <span>about</span>
            </button>
          </Link>
          <Link href="/signup">
            <button className="px-5 py-2.5 rounded relative flex gap-2 items-center capitalize hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">
              <span>sign up</span>
            </button>
          </Link>
          <Link href="/signin">
            <button className="px-5 py-2.5 rounded relative capitalize hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">
              <span>sign in</span>
            </button>
          </Link>
        </>
      ) : (
        <>
          {' '}
          <Link href="/about">
            <button className="px-5 py-2.5 rounded relative capitalize hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">
              <span>about</span>
            </button>
          </Link>
        </>
      )}
    </section>
  );
};

export default Navigation;
