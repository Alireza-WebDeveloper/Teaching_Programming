export const revalidate = false;
export const dynamic = 'force-dynamic';
const HomePage = () => {
  return (
    <div className="grid place-items-center min-h-[100vh]">
      <h1 className="font-bold lg:text-xl md:text-lg text-sm text-center animate-bounce">
        The desired courses have not been published yet.
      </h1>
    </div>
  );
};

export default HomePage;
