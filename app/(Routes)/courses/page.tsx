import CourseGroup from '@/app/Components/Course/CourseGroup';
import { asyncGetAllCourse } from '@/app/StateManagement/Service/Course';

// Site settings in terms of server
export const revalidate = false;
export const dynamic = 'force-dynamic';

const Page = async () => {
  try {
    const {
      data: { course: courses },
    } = await asyncGetAllCourse();

    return (
      <div className="grid grid-cols-1 p-2  container mx-auto">
        <CourseGroup
          moreLink={false}
          courses={courses}
          title="Access All Courses Here"
        />
      </div>
    );
  } catch (err: any) {
    throw new Error(err);
  }
};

export default Page;
