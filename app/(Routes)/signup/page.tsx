'use client';
import SignUp from '@/app/Components/Form/SignUp';
import useGetUser from '@/app/Hooks/Auth/useGetUser';
import { redirect } from 'next/navigation';
const Page = () => {
  const { data: user, isLoading } = useGetUser();
  return (
    <div className="grid place-items-center grid-cols-1 gap-10">
      {isLoading ? (
        ''
      ) : !user ? (
        <>
          <section className="relative">
            <h1 className="text-4xl">sign up</h1>
            <span className="absolute -bottom-2 w-[50%] h-1 bg-purple-800 dark:bg-purple-300 rounded"></span>
          </section>
          <p className="text-center text-lg">
            please sign up to your account to countine with app
          </p>
          <SignUp />
        </>
      ) : (
        redirect('/')
      )}
    </div>
  );
};

export default Page;
