'use client';
import { CourseChapter } from '@/app/Models/Course';
import React from 'react';

import ChapterItem from '../ChapterItem';
import Index from '../../../../Header/Navigation/Logout/index';
interface ChapterListProps {
  chapters: CourseChapter[];
}
const ChapterList: React.FC<ChapterListProps> = ({ chapters }) => {
  const ChapterItems = () => {
    return chapters.map((chapter, index) => {
      return <ChapterItem index={index} chapter={chapter} key={chapter._id} />;
    });
  };
  return (
    <div className="flex flex-col space-y-5 p-2 rounded bg-white dark:bg-gray-900">
      {ChapterItems()}
    </div>
  );
};

export default ChapterList;
