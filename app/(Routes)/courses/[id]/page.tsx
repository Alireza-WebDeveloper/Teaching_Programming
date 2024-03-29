// Types
import Comment from '@/app/Components/Course/Comment';
import CourseDetail from '@/app/Components/Course/CourseDetail';
import { asyncGetCourseById } from '@/app/StateManagement/Service/Course';
import { NextPage } from 'next';
interface PageProps {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

const Page: NextPage<PageProps> = async ({ params: { id } }) => {
  try {
    const { data: courseData } = await asyncGetCourseById({ id });
    const { course } = courseData;

    return (
      <div className="grid grid-cols-1 space-y-4 container mx-auto p-3">
        <CourseDetail course={course} />
        <Comment />
      </div>
    );
  } catch (err: any) {
    throw new Error(err);
  }
};

export default Page;
