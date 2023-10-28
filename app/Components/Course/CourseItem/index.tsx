import { CourseState } from '@/app/Models/Course';

interface CourseItemProps {
  course: CourseState;
}
const CourseItem: React.FC<CourseItemProps> = ({ course }) => {
  return <>CourseItem</>;
};

export default CourseItem;
