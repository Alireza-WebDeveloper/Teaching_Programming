'use client';
import Image from 'next/image';
import { LoadPartialImageType } from '@/app/Models/Imag';
import useGetUser from '@/app/Hooks/Auth/useGetUser';
const loadImage = ({ src, width, quality }: LoadPartialImageType) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};
const Avatar = () => {
  const { data: user } = useGetUser();
  return (
    <div className="relative w-44 h-44">
      <Image
        loader={loadImage}
        src={`http://localhost:8000/img/user/${user?.avatar}`}
        alt={'image'}
        fill
        className="object-fill rounded-xl"
        priority
        sizes="(max-width: 1200px) 100vw"
      />
    </div>
  );
};

export default Avatar;
