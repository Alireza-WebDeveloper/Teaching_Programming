import * as Icons from 'react-icons/md';
import Link from 'next/link';
import React from 'react';

interface CourseTitleProps {
  title: string;
}

const CourseTitle: React.FC<CourseTitleProps> = ({ title }) => {
  return (
    <div className="flex justify-between items-center ">
      <h1 className="text-xl">{title}</h1>
      <Link href={'/courses'}>
        <button className="w-full space-x-2 text-xl capitalize items-center justify-center rounded-md px-4 py-2 flex relative flex-row bg-gradient-to-r dark:hover:from-orange-500 dark:hover:to-red-500 hover:from-red-400 hover:to-orange-400">
          <span>more</span>
          <Icons.MdArrowForwardIos />
        </button>
      </Link>
    </div>
  );
};

export default CourseTitle;
