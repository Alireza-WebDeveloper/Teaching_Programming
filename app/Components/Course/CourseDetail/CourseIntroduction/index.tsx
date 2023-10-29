'use client';
import { CourseDetailState } from '@/app/Models/Course';
import React from 'react';
import { LoadPartialImageType } from '@/app/Models/Imag';
import Link from 'next/link';
import Image from 'next/image';
interface CourseIntroductionProps {
  course: CourseDetailState;
}

const loadImage = ({ src, width, quality }: LoadPartialImageType) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const CourseIntroduction: React.FC<CourseIntroductionProps> = ({ course }) => {
  const { categories, name, title, image, description, _id } = course;
  return (
    <section className="grid grid-cols-12 gap-2 bg-white dark:bg-gray-800 p-2 rounded">
      <article className="lg:col-span-4 col-span-12">
        <div className="relative w-full h-96">
          {/* Cover Image */}
          <Image
            loader={loadImage}
            src={`http://localhost:8000${image}`}
            alt={'image'}
            fill
            className="object-cover rounded-xl"
            priority
            sizes="(max-width: 1200px) 100vw"
          />
        </div>
      </article>
      <article className="lg:col-span-8 col-span-12 space-y-5">
        <section className="space-x-1 flex">
          {categories.map((category, index) => {
            return (
              <span
                key={index}
                className="px-4 py-2 text-sm font-semibold rounded-2xl  bg-slate-200 dark:bg-slate-900"
              >
                {category}
              </span>
            );
          })}
        </section>
        <p className="text-xl font-bold">
          {name} . {title}
        </p>
        <p className="text-sm">{description}</p>
        <button className="bg-blue-700 px-4 py-2 rounded-full">
          Join Course
        </button>
      </article>
    </section>
  );
};

export default CourseIntroduction;
