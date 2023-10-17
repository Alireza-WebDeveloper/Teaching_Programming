import Link from 'next/link';
import * as Icons from 'react-icons/md';
const SignLinks = () => {
  return (
    <>
      <Link href="/auth/signup">
        <button className="px-5 py-2.5 text-lg rounded-lg relative bg-gray-50 dark:bg-gray-950 flex gap-2 items-center capitalize hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">
          <span>sign up</span>
          <span>
            <Icons.MdPersonAdd />
          </span>
        </button>
      </Link>
      <Link href="/auth/signin">
        <button className="px-5 py-2.5 text-lg flex rounded-lg items-center gap-2 bg-gray-50   relative dark:bg-gray-950 capitalize hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">
          <span>sign in</span>
          <span>
            <Icons.MdLogin />
          </span>
        </button>
      </Link>
    </>
  );
};
export default SignLinks;
