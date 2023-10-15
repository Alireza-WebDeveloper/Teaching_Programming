'use client';
import useLogout from '@/app/Hooks/Auth/useLogout';
import * as Icons from 'react-icons/md';
const Index = () => {
  const { mutate } = useLogout();
  const handlerLogOut = async () => {
    mutate();
  };
  return (
    <>
      <button
        onClick={handlerLogOut}
        className="px-5 py-2.5 rounded relative flex gap-2 items-center capitalize hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
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
