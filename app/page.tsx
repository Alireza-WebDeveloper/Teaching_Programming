import Course from './Components/Course';
import { asyncGetCourseByLimit } from './StateManagement/Service/Course';

export const revalidate = false;
export const dynamic = 'force-dynamic';
const HomePage = async () => {
  try {
    const {
      data: { course: courses },
    } = await asyncGetCourseByLimit();

    return (
      <div className="grid grid-cols-1 p-2  container mx-auto">
        <Course courses={courses} />
      </div>
    );
  } catch (err: any) {
    throw new Error(err);
  }
};

export default HomePage;
