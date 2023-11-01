import React from 'react';
import { CourseState } from '@/app/Models/Course';
import CourseTitle from './CourseTitle';
import CourseList from './CourseList';
// Type
interface CourseGroupProps {
  courses: CourseState[];
  title: string;
  moreLink: boolean;
}

const CourseGroup: React.FC<CourseGroupProps> = ({
  courses,
  title,
  moreLink,
}) => {
  return (
    <div className="flex flex-col space-y-5">
      <CourseTitle title={title} moreLink={moreLink} />
      <CourseList courses={courses} />
    </div>
  );
};

export default CourseGroup;
