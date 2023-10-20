'use client';
import UpdatePassword from '@/app/Components/Form/UpdatePassword';
const Page = () => {
  return (
    <div className="grid place-items-center grid-cols-1 gap-10">
      <section className="relative">
        <h1 className="text-3xl font-semibold">Password update access</h1>
        <span className="absolute -bottom-2.5 w-[50%] h-1 bg-purple-800 dark:bg-purple-300 rounded"></span>
      </section>
      <UpdatePassword />
    </div>
  );
};

export default Page;
