import Link from 'next/link';
import * as Icons from 'react-icons/bs';
const GlobalLinks = () => {
  return (
    <>
      <Link href="/about">
        <button className="px-5 py-2.5 flex gap-2 rounded-lg items-center bg-gray-50 dark:bg-gray-950 text-lg   relative capitalize hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">
          <span>about</span>
          <span>
            <Icons.BsInfoCircle />
          </span>
        </button>
      </Link>
    </>
  );
};

export default GlobalLinks;
