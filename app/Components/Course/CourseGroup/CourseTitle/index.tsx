import * as Icons from 'react-icons/io';
import Link from 'next/link';
import React from 'react';

// Type
interface CourseTitleProps {
  title: string;
  moreLink: boolean;
}

const CourseTitle: React.FC<CourseTitleProps> = ({ title, moreLink }) => {
  return (
    <div className="flex justify-between items-center ">
      <h1 className="text-3xl font-bold">{title}</h1>
      {moreLink && (
        <Link href={'/courses'}>
          <button className="w-full space-x-2 text-xl capitalize items-center justify-center rounded-md px-4 py-2 flex relative flex-row bg-gradient-to-r dark:hover:from-orange-500 dark:hover:to-red-500 hover:from-red-400 hover:to-orange-400">
            <span className="font-bold text-lg">more</span>
            <Icons.IoMdArrowRoundForward size="1.7rem" />
          </button>
        </Link>
      )}
    </div>
  );
};

export default CourseTitle;
