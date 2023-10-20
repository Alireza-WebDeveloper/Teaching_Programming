'use client';
import Sidebar from '@/app/Components/Dashboard/SideBar';
import useGetUser from '@/app/Hooks/Auth/useGetUser';
import { useRouter } from 'next/navigation';
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { data: user, isLoading } = useGetUser();
  const router = useRouter();
  return (
    <>
      {isLoading ? (
        ''
      ) : user ? (
        <div className="grid grid-cols-12 h-screen">
          <Sidebar />
          <section className="col-span-10 p-4">{children}</section>
        </div>
      ) : (
        router.push('/')
      )}
    </>
  );
};

export default DashboardLayout;
