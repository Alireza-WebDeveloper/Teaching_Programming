'use client';
import * as Icons from 'react-icons/md';
import { useEffect, useState } from 'react';
import GlobalLinks from './Global';
import Auth from './Auth';
import SignLinks from './Sign';
import Logout from './Logout';
import { usePathname } from 'next/navigation';
interface SwipeDrawerProps {
  isError: any;
  user: any;
  isLoading: any;
}

const SwipeDrawer: React.FC<SwipeDrawerProps> = ({ isLoading, user }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClickOnLink = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    setIsOpen(false);
  };
  const pathName = usePathname();
  useEffect(() => {
    setIsOpen(false);
  }, [pathName]);
  return (
    <>
      <div
        className={`${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } ease-in duration-300 top-0 right-0 dark:bg-gray-900 bg-gray-200 sm:w-[35vw] xs:w-[50vw] w-[70vw] h-screen p-10 fixed flex lg:hidden`}
      >
        {/* Content */}
        <section className="flex flex-col w-full h-full">
          <div className="flex flex-row w-full justify-end">
            <Icons.MdClose
              className="cursor-pointer dark:text-red-500 text-red-800"
              size="2rem"
              onClick={handleClickOnLink}
            />
          </div>
          <ul className="flex flex-col space-y-5 items-center w-full p-3">
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
                <Auth />
                <GlobalLinks />
                <Logout />
              </>
            )}
          </ul>
        </section>
      </div>
      {/*  */}
      <button className="lg:hidden flex" onClick={() => setIsOpen(true)}>
        <Icons.MdMenu size="2rem" />
      </button>
    </>
  );
};

export default SwipeDrawer;
