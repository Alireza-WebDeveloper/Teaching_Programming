'use client';
import useGetUser from '@/app/Hooks/Auth/useGetUser';
import Link from 'next/link';
import * as Icons from 'react-icons/md';
const ShoppingCart = () => {
  const { data, isError, isLoading } = useGetUser();
  return (
    <Link href={'/auth/shop'}>
      <section className="relative">
        <Icons.MdShoppingCart size="2rem" />
        <span className="absolute w-5 h-5 flex justify-center items-center -top-2 -right-2 rounded-full bg-purple-800 text-white dark:bg-purple-400 font-semibold dark:text-black  p-1 text-sm">
          {isLoading ? '' : data ? `${data.savedCourse.length}` : ''}
        </span>
      </section>
    </Link>
  );
};

export default ShoppingCart;
