import * as Icons from 'react-icons/md';
import Link from 'next/link';
const SignLinks = () => {
  return (
    <>
      <li className="w-full">
        <Link
          href="/auth/signin"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <Icons.MdLogin />
          <span className="ml-3">signin</span>
        </Link>
      </li>
      <li className="w-full">
        <Link
          href="/auth/signup"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <Icons.MdPersonAdd />
          <span className="ml-3">signup</span>
        </Link>
      </li>
    </>
  );
};

export default SignLinks;
