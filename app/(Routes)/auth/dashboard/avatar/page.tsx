import Avatar from '@/app/Components/Dashboard/Avatar';
import UpdateAvatar from '@/app/Components/Form/UpdateAvatar';

const Page = () => {
  return (
    <div className="flex flex-row gap-3 space-y-2 items-center">
      <section className="w-1/5 justify-center flex">
        <Avatar />
      </section>
      <section className=" w-4/5">
        <UpdateAvatar />
      </section>
    </div>
  );
};

export default Page;
