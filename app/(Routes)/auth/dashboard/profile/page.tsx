'use client';
import useGetUser from '@/app/Hooks/Auth/useGetUser';
const Page = () => {
  const { data } = useGetUser();

  return (
    <div className="flex flex-col justify-center items-center p-5 space-y-4">
      <h1 className="text-2xl font-bold">user information</h1>
      <section className="flex gap-4">
        <p className="p-2 bg-gray-200 dark:bg-gray-900 text-xl rounded">
          <span className="text-gray-600 dark:text-gray-200">email</span> :‌{' '}
          {data?.email}
        </p>
        <p className="p-2 bg-gray-200 dark:bg-gray-900 text-xl rounded">
          <span className=" text-gray-600 dark:text-gray-200">fullname</span> :‌{' '}
          {data?.name}
        </p>
      </section>
    </div>
  );
};

export default Page;
