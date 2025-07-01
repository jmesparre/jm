"use client";

import Image from 'next/image';
import React from 'react';

interface ImagePreloaderProps {
  imageUrls: string[];
}

const ImagePreloader: React.FC<ImagePreloaderProps> = ({ imageUrls }) => {
  return (
    <div style={{ display: 'none' }}>
      {imageUrls.map((src) => (
        <Image
          key={src}
          src={src}
          alt="Preloaded image"
          width={1}
          height={1}
        />
      ))}
    </div>
  );
};

export default ImagePreloader;
