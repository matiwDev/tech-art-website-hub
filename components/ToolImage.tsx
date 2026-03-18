import React from 'react';

export interface ToolImageProps {
  src: string | string[];
  alt?: string;
  layout?: 'full' | 'portrait' | 'side-by-side';
  className?: string;
}

export const ToolImage: React.FC<ToolImageProps> = ({ 
  src, 
  alt = "Tool Visualization", 
  layout = 'full',
  className = ''
}) => {
  const baseClasses = "relative rounded-2xl border border-zinc-800 shadow-2xl bg-zinc-900 w-full h-auto object-cover";

  if (layout === 'side-by-side') {
    const srcArray = Array.isArray(src) ? src : [src, src];
    return (
      <div className={`grid grid-cols-2 gap-4 ${className}`}>
        <img src={srcArray[0]} alt={`${alt} - 1`} className={baseClasses} />
        <img src={srcArray[1]} alt={`${alt} - 2`} className={baseClasses} />
      </div>
    );
  }

  const singleSrc = Array.isArray(src) ? src[0] : src;

  if (layout === 'portrait') {
    return (
      <div className={`flex justify-center ${className}`}>
        <img src={singleSrc} alt={alt} className={`${baseClasses} max-w-md`} />
      </div>
    );
  }

  // Default 'full'
  return (
    <img src={singleSrc} alt={alt} className={`${baseClasses} ${className}`} />
  );
};
