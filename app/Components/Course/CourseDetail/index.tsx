import { CourseDetailState } from '@/app/Models/Course';
import React from 'react';
import CourseIntroduction from './CourseIntroduction';
import CourseContent from './CourseContent';
import CourseChapter from './CourseChapter';
import CourseComment from './CourseComment';

interface CourseDetailProps {
  course: CourseDetailState;
}

const CourseDetail: React.FC<CourseDetailProps> = ({ course }) => {
  return (
    <div className="flex flex-col space-y-5">
      <CourseIntroduction course={course} />
      <CourseChapter course={course} />
      <CourseComment course={course} />
    </div>
  );
};

export default CourseDetail;
