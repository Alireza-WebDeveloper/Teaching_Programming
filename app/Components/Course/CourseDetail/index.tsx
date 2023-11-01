import { CourseDetailState } from '@/app/Models/Course';
import React from 'react';
import CourseIntroduction from './CourseIntroduction';
import CourseChapter from './CourseChapter';

interface CourseDetailProps {
  course: CourseDetailState;
}

const CourseDetail: React.FC<CourseDetailProps> = ({ course }) => {
  return (
    <div className="flex flex-col space-y-5">
      <CourseIntroduction course={course} />
      <CourseChapter course={course} />
    </div>
  );
};

export default CourseDetail;
