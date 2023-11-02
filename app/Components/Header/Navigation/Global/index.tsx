import Link from 'next/link';
import * as Icons from 'react-icons/bs';
import * as Icons2 from 'react-icons/si';

const GlobalLinks = () => {
  return (
    <>
      <Link href="/">
        <button className="px-5 py-2.5 flex gap-2 rounded-lg items-center bg-gray-50 dark:bg-gray-950 text-lg   relative capitalize hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">
          <span>home</span>
          <span>
            <Icons2.SiHomeadvisor />
          </span>
        </button>
      </Link>
      <Link href="/about">
        <button className="px-5 py-2.5 flex gap-2 rounded-lg items-center bg-gray-50 dark:bg-gray-950 text-lg   relative capitalize hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">
          <span>about</span>
          <span>
            <Icons.BsInfoCircle />
          </span>
        </button>
      </Link>
      <Link href="/courses">
        <button className="px-5 py-2.5 flex gap-2 rounded-lg items-center bg-gray-50 dark:bg-gray-950 text-lg   relative capitalize hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">
          <span>courses</span>
          <span>
            <Icons2.SiPolymerproject />
          </span>
        </button>
      </Link>
    </>
  );
};

export default GlobalLinks;
