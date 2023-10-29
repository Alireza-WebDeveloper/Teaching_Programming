'use client';
import { CourseState } from '@/app/Models/Course';
import * as Icons from 'react-icons/md';
import Image from 'next/image';
import { LoadPartialImageType } from '@/app/Models/Imag';
import Link from 'next/link';
interface CourseItemProps {
  course: CourseState;
}
const loadImage = ({ src, width, quality }: LoadPartialImageType) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};
const CourseItem: React.FC<CourseItemProps> = ({ course }) => {
  const { image, name, createAt, description, categories, title, _id, price } =
    course;
  const covertDate = new Intl.DateTimeFormat('en-Us', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  }).format(new Date(createAt));

  return (
    <section className="relative">
      <div className="relative w-full h-96">
        {/* Cover Image */}
        <Image
          loader={loadImage}
          src={`http://localhost:8000${image}`}
          alt={'image'}
          fill
          className="object-fill rounded-xl"
          priority
          sizes="(max-width: 1200px) 100vw"
        />
      </div>
      {/* Opacity Image */}
      <div className="absolute top-0 w-full h-full bg-black rounded-xl opacity-10 z-10"></div>
      {/* Content */}
      <div className="absolute flex flex-col  justify-between p-2 top-0 w-full h-full z-50 opacity-100">
        <div className="flex items-center justify-between p-1">
          <section className="space-x-1 flex">
            {categories.map((category, index) => {
              return (
                <span
                  key={index}
                  className="px-3 py-1.5 text-sm font-semibold rounded-2xl  bg-slate-200 dark:bg-slate-900"
                >
                  {category}
                </span>
              );
            })}
          </section>
          <span className="cursor-pointer">
            <Icons.MdAddShoppingCart className="text-gray-100" />
          </span>
        </div>
        <div className="flex flex-col space-y-3">
          <Link href={`/courses/${_id}`}>
            <section className="font-bold text-white w-[90%]  ml-[5%] rounded-2xl flex items-center gap-2 text-xl">
              {title}
            </section>
          </Link>
          <Link href={`/courses/${_id}`}>
            <section className="font-bold text-white w-[90%]  ml-[5%] rounded-2xl text-sm  flex items-center gap-2">
              {description.split(' ').slice(0, 8).join(' ')}
            </section>
          </Link>
          <section className="bg-gradient-to-t flex justify-between from-gray-900 shadow-lg bottom-3 w-[95%] text-white ml-[2.5%] rounded-2xl p-3    items-center gap-2">
            <section>
              <span className="text-sm font-semibold">{name}</span>
              <span> . </span>
              <span className="text-sm">{covertDate}</span>
            </section>
            <section>
              <span className="font-semibold"> cost : ‌</span>
              <span>
                {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                }).format(Number(price))}
              </span>
            </section>
            <button className="bg-blue-700 px-2 py-1 rounded-full">
              Join Course
            </button>
          </section>
        </div>
      </div>
    </section>
  );
};

export default CourseItem;
