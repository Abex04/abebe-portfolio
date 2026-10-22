import React, { useState } from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackIcon?: React.ReactNode;
  fallbackTitle?: string;
  fallbackSubtitle?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  fallbackIcon,
  fallbackTitle,
  fallbackSubtitle
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (hasError || !src) {
    return (
      <div className={`flex flex-col items-center justify-center bg-gradient-to-br from-navy-800 to-navy-900 border border-slate-700/60 text-slate-300 p-6 text-center select-none ${className}`}>
        {fallbackIcon && (
          <div className="w-14 h-14 rounded-xl bg-electric-500/10 border border-electric-500/20 text-electric-400 flex items-center justify-center mb-3 shadow-inner">
            {fallbackIcon}
          </div>
        )}
        {fallbackTitle && <p className="font-semibold text-slate-200 text-sm">{fallbackTitle}</p>}
        {fallbackSubtitle && <p className="text-xs text-slate-400 mt-1 max-w-[200px] leading-relaxed">{fallbackSubtitle}</p>}
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-navy-800/80 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-electric-400 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
        className={`w-full h-full object-cover transition-transform duration-500 hover:scale-105 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
      />
    </div>
  );
};
