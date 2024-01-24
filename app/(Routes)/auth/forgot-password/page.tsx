'use client';
import ForgotPassword from '@/app/Components/Form/ForgotPassword';
import useGetUser from '@/app/Hooks/Auth/useGetUser';
import Loading from '@/app/loading';
import { redirect } from 'next/navigation';

const Page = () => {
  // State
  const { data: user, isLoading } = useGetUser();
  // Return JSX
  return (
    <div className="grid place-items-center grid-cols-1 gap-10">
      {isLoading ? (
        <Loading />
      ) : !user ? (
        <>
          <section className="relative">
            <h1 className="text-4xl font-semibold">forgot password</h1>
            <span className="absolute -bottom-2.5 w-[50%] h-1 bg-purple-800 dark:bg-purple-300 rounded"></span>
          </section>
          <p className="text-center text-lg">
            To recover the password, please enter your email
          </p>
          <ForgotPassword />
        </>
      ) : (
        redirect('/')
      )}
    </div>
  );
};

export default Page;
