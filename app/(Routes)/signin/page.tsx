import SignIn from '@/app/Components/Form/SignIn';

const Page = () => {
  return (
    <div className="grid place-items-center grid-cols-1 gap-10">
      <section className="relative">
        <h1 className="text-4xl">sign in</h1>
        <span className="absolute -bottom-2 w-[50%] h-1 bg-purple-800 dark:bg-purple-300 rounded"></span>
      </section>
      <p className="text-center text-lg">
        please sign in to your account to countine with app
      </p>
      <SignIn />
    </div>
  );
};

export default Page;
