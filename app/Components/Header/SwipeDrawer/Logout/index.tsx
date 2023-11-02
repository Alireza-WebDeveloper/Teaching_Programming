'use client';
import * as Icons from 'react-icons/md';
import Link from 'next/link';
import useLogout from '@/app/Hooks/Auth/useLogout';
import { useRouter } from 'next/navigation';
const Logout = () => {
  const { mutate } = useLogout();
  const router = useRouter();
  const handlerLogOut = async () => {
    mutate();
    router.replace('/');
  };
  return (
    <>
      <li className="w-full">
        <button
          onClick={handlerLogOut}
          className="flex items-center p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <Icons.MdLogin />
          <span className="ml-3">signout</span>
        </button>
      </li>
    </>
  );
};

export default Logout;
