import { CourseState } from '@/app/Models/Course';
import { LoadPartialImageType } from '@/app/Models/Imag';
import Image from 'next/image';
import CourseManager from '@/app/Helpers/CourseManager';
import useDeleteCourse from '@/app/Hooks/Auth/useDeleteCourse';
import Link from 'next/link';
const loadImage = ({ src, width, quality }: LoadPartialImageType) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

// Type Props
interface ShopItemProps {
  course: CourseState;
}
const newCourseManager = new CourseManager();
// State

const ShopItem: React.FC<ShopItemProps> = ({ course }) => {
  // State
  const { mutate } = useDeleteCourse();
  // Action Delete Course
  const handleDeleteCourse = () => {
    mutate(course._id);
  };
  const { image, name, title, price } = course;
  return (
    <section className="grid  rounded-xl border-2  md:grid-cols-4 grid-cols-1 gap-5 place-items-center grid-flow-row-dense">
      <div className="relative w-full h-72">
        <Link href={`/courses/${course._id}`}>
          {/* Cover Image */}
          <Image
            loader={loadImage}
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/Course/${image}`}
            alt={'image'}
            fill
            className="object-cover rounded-xl"
            priority
            sizes="(max-width: 1200px) 100vw"
          />
        </Link>
      </div>

      <div className="space-y-2 text-center">
        <h1 className="text-xl font-bold">{name}</h1>
        <p className="text-lg text-gray-500 dark:text-gray-300">{title}</p>
      </div>
      <div>
        <button
          className="text-white capitalize font-bold text-lg bg-blue-700 dark:bg-blue-400 dark:text-black rounded px-4 py-2"
          onClick={handleDeleteCourse}
        >
          remove
        </button>
      </div>
      <div>
        <p className="text-lg font-semibold">
          {newCourseManager.formatPrice(price)}
        </p>
      </div>
    </section>
  );
};

export default ShopItem;
