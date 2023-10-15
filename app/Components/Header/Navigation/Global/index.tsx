import Link from 'next/link';
const GlobalLinks = () => {
  return (
    <>
      <Link href="/about">
        <button className="px-5 py-2.5 rounded relative capitalize hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">
          <span>about</span>
        </button>
      </Link>
    </>
  );
};

export default GlobalLinks;
