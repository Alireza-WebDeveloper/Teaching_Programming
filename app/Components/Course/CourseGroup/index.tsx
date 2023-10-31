import React from 'react';
import { CourseState } from '@/app/Models/Course';
import CourseTitle from './CourseTitle';
import CourseList from './CourseList';
interface CourseGroupProps {
  courses: CourseState[];
  title: string;
}

const CourseGroup: React.FC<CourseGroupProps> = ({ courses, title }) => {
  return (
    <div className="flex flex-col space-y-5">
      <CourseTitle title={title} />
      <CourseList courses={courses} />
    </div>
  );
};

export default CourseGroup;
