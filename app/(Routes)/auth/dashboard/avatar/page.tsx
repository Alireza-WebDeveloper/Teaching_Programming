import Avatar from '@/app/Components/Dashboard/Avatar';
import UpdateAvatar from '@/app/Components/Form/UpdateAvatar';

const Page = () => {
  return (
    <div className="flex flex-row gap-3 space-y-2 items-center">
      <section className="w-1/3 justify-center flex">
        <Avatar />
      </section>
      <section className=" w-2/3">
        <UpdateAvatar />
      </section>
    </div>
  );
};

export default Page;
