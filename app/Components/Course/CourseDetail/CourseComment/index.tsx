import { CourseDetailState } from '@/app/Models/Course';
import React from 'react';

interface CourseCommentProps {
  course: CourseDetailState;
}

const CourseComment: React.FC<CourseCommentProps> = () => {
  return <section>comment</section>;
};

export default CourseComment;
