import React from 'react';
import { CourseState } from '../../Models/Course';
import CourseTitle from './CourseTitle';
import CourseList from './CourseList';
interface CourseProps {
  courses: CourseState[];
}

const Course: React.FC<CourseProps> = ({ courses }) => {
  return (
    <div className="flex flex-col space-y-5">
      <CourseTitle title={'Discover Our New Courses'} />
      <CourseList courses={courses} />
    </div>
  );
};

export default Course;
