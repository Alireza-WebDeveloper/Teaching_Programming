'use client';
import useGetUser from '@/app/Hooks/Auth/useGetUser';
import { redirect } from 'next/navigation';
const Page = () => {
  const { data: user, isLoading } = useGetUser();
  return (
    <div className="grid place-items-center grid-cols-1 gap-10">
      {isLoading ? '' : !user ? <>Can Be Reset Password</> : redirect('/')}
    </div>
  );
};

export default Page;
