'use client';
import Link from 'next/link';
import * as Icons from 'react-icons/md';
import { usePathname } from 'next/navigation';
const Sidebar = () => {
  const pathname = usePathname();

  return (
    <section
      className={`col-span-2 bg-white dark:bg-black flex flex-col space-y-3 p-3`}
    >
      <Link href={'/auth/dashboard/profile'}>
        <div
          className={`flex items-center ${
            pathname === '/auth/dashboard/profile'
              ? 'bg-gray-100 dark:bg-gray-900'
              : ''
          } gap-2 p-2 rounded`}
        >
          <Icons.MdPerson size="1.5rem" />
          <p className="text-sm">profile</p>
        </div>
      </Link>
      <Link href={'/auth/dashboard/security'}>
        <div
          className={`flex items-center ${
            pathname === '/auth/dashboard/security'
              ? 'bg-gray-100 dark:bg-gray-900'
              : ''
          } gap-2 p-2 rounded`}
        >
          <Icons.MdSecurity size="1.5rem" />
          <p className="text-sm">security</p>
        </div>
      </Link>
      <Link href={'/auth/dashboard/avatar'}>
        <div
          className={`flex items-center ${
            pathname === '/auth/dashboard/avatar'
              ? 'bg-gray-100 dark:bg-gray-900'
              : ''
          } gap-2 p-2 rounded`}
        >
          <Icons.MdUpload size="1.5rem" />
          <p className="text-sm">avatar</p>
        </div>
      </Link>
    </section>
  );
};

export default Sidebar;
