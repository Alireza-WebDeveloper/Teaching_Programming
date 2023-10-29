import React from 'react';
import { CourseState } from '@/app/Models/Course';
import CourseTitle from './CourseTitle';
import CourseList from './CourseList';
interface CourseGroupProps {
  courses: CourseState[];
}

const CourseGroup: React.FC<CourseGroupProps> = ({ courses }) => {
  return (
    <div className="flex flex-col space-y-5">
      <CourseTitle title={'Discover Our New Courses'} />
      <CourseList courses={courses} />
    </div>
  );
};

export default CourseGroup;
