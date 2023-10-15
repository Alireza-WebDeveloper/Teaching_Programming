'use client';
import useGetUser from '@/app/Hooks/Auth/useGetUser';
import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import { Fragment } from 'react';
import * as Icons from 'react-icons/md';

export default function Example() {
  const { data: user, isError, isLoading } = useGetUser();
  if (isLoading || isError) return <></>;
  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full items-center justify-center rounded-md bg-black text-white dark:text-black dark:bg-gray-200  px-4 py-2 text-sm font-medium   hover:bg-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <Icons.MdArrowDropDown className="mr-1" />
            <span>{user?.name}</span>
            <Icons.MdPerson
              className="ml-2 -mr-1 h-5 w-5 text-white dark:text-black hover:text-violet-100 "
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <Link href={'/auth/dashboard'}>
                    <button
                      className={`${
                        active ? 'bg-violet-500 text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <Icons.MdDashboard
                          className="mr-2 h-5 w-5"
                          aria-hidden="true"
                        />
                      ) : (
                        <Icons.MdDashboardCustomize
                          className="mr-2 h-5 w-5"
                          aria-hidden="true"
                        />
                      )}
                      dashboard
                    </button>
                  </Link>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
