import React from 'react';
import Image from 'next/image';

export default function ImagePreview(): JSX.Element {
  return (
    <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 xl:h-112 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-xl overflow-hidden">
      <Image
        src={'/images/car-wash-spray.jpg'}
        className="object-cover"
        alt="motor"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}
