import Link from 'next/link';

const SignLinks = () => {
  return (
    <>
      <Link href="/signup">
        <button className="px-5 py-2.5 rounded relative flex gap-2 items-center capitalize hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">
          <span>sign up</span>
        </button>
      </Link>
      <Link href="/signin">
        <button className="px-5 py-2.5 rounded relative capitalize hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">
          <span>sign in</span>
        </button>
      </Link>
    </>
  );
};
export default SignLinks;
