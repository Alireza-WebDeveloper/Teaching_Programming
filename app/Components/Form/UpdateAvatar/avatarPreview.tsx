'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { LoadPartialImageType } from '@/app/Models/Imag';
const loadImage = ({ src, width, quality }: LoadPartialImageType) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};
interface AvatarPreviewProps {
  file: any;
}

const AvatarPreview: React.FC<AvatarPreviewProps> = ({ file }) => {
  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setPreview(reader.result);
      };
    }
  }, [file]);

  return (
    <div className="relative w-80  h-80 rounded-full">
      {preview ? (
        <Image
          loader={loadImage}
          src={preview as string}
          alt={'image'}
          fill
          className="object-fill rounded"
          priority
          sizes="(max-width: 1200px) 100vw"
        />
      ) : (
        <div className="w-full h-full rounded-full bg-gray-300 animate-pulse" />
      )}
    </div>
  );
};

export default AvatarPreview;
