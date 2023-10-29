import { CourseDetailState } from '@/app/Models/Course';
import React from 'react';

interface CourseContentProps {
  course: CourseDetailState;
}

const CourseContent: React.FC<CourseContentProps> = () => {
  return <section>content</section>;
};

export default CourseContent;
