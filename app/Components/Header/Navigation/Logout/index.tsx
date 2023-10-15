'use client';
import useLogout from '@/app/Hooks/Auth/useLogout';
import { useRouter } from 'next/navigation';
import * as Icons from 'react-icons/md';
const Index = () => {
  const { mutate } = useLogout();
  const router = useRouter();
  const handlerLogOut = async () => {
    mutate();
    router.replace('/');
  };
  return (
    <>
      <button
        onClick={handlerLogOut}
        className="px-5 py-2.5 text-lg  bg-gray-50 rounded-lg relative flex gap-2 dark:bg-gray-950 items-center capitalize hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
      >
        <span>log out</span>
        <span>
          <Icons.MdLogout />
        </span>
      </button>
    </>
  );
};

export default Index;
