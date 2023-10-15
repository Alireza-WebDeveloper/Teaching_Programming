'use client';
import Link from 'next/link';
import useGetUser from '@/app/Hooks/Auth/useGetUser';

const Navigation = () => {
  const { data: user, isLoading } = useGetUser();

  const shouldShowButtons = !user && !isLoading;

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
        <Link href="/about">
          <button className="px-5 py-2.5 rounded relative capitalize hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">
            <span>about</span>
          </button>
        </Link>
      )}
    </section>
  );
};

export default Navigation;
