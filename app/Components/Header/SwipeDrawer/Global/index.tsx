import * as Icons from 'react-icons/bs';
import * as Icons2 from 'react-icons/si';
import Link from 'next/link';
const GlobalLinks = () => {
  return (
    <>
      <li className="w-full">
        <Link
          href="/auth/signin"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <Icons2.SiPolymerproject />
          <span className="ml-3">course</span>
        </Link>
      </li>
      <li className="w-full">
        <Link
          href="/auth/signup"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <Icons.BsInfoCircle />
          <span className="ml-3">about</span>
        </Link>
      </li>
    </>
  );
};

export default GlobalLinks;
