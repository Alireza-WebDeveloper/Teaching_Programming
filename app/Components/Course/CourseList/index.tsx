import { CourseState } from '@/app/Models/Course';
import React from 'react';
import CourseItem from '../CourseItem';

interface CourseListProps {
  courses: CourseState[];
}
const CourseList: React.FC<CourseListProps> = ({ courses }) => {
  const courseItems = () => {
    return courses.map((course) => {
      return <CourseItem key={course._id} course={course} />;
    });
  };
  return <div className="grid grid-cols-4 gap-3">{courseItems()}</div>;
};

export default CourseList;
