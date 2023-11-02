'use client';

import Shop from '@/app/Components/Shop';
import useGetUser from '@/app/Hooks/Auth/useGetUser';
import { useRouter } from 'next/navigation';
const Page = () => {
  // State
  const { data: user, isLoading } = useGetUser();
  const router = useRouter();
  // Return JSX
  return (
    <>
      {isLoading ? (
        ''
      ) : user ? (
        <div className="grid grid-cols-1 p-4 container mx-auto">
          <Shop user={user} />
        </div>
      ) : (
        router.push('/')
      )}
    </>
  );
};

export default Page;
