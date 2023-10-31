import CourseGroup from './Components/Course/CourseGroup';
import { asyncGetCourseByLimit } from './StateManagement/Service/Course';

export const revalidate = false;
export const dynamic = 'force-dynamic';
const HomePage = async () => {
  try {
    const {
      data: { course: courses },
    } = await asyncGetCourseByLimit(6);

    return (
      <div className="grid grid-cols-1 p-2  container mx-auto">
        <CourseGroup courses={courses} title={'Discover Our New Courses'} />
      </div>
    );
  } catch (err: any) {
    throw new Error(err);
  }
};

export default HomePage;
