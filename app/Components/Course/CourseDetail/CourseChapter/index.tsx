import { CourseDetailState } from '@/app/Models/Course';
import React from 'react';
import ChapterList from './ChapterList';

interface CourseChapterProps {
  course: CourseDetailState;
}

const CourseChapter: React.FC<CourseChapterProps> = ({ course }) => {
  return (
    <section className="flex flex-col space-y-5">
      <h1 className="text-xl font-bold">
        Exploring the Comprehensive Modules of the React Mastery Course:
        Unveiling the Core Topics!
      </h1>
      <ChapterList chapters={course.chapters} />
    </section>
  );
};

export default CourseChapter;
