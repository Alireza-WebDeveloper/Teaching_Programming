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
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
      {courseItems()}
    </div>
  );
};

export default CourseList;
