'use client';

import Image, { ImageProps } from 'next/image';
import React, { useState } from 'react';

// Generates a shimmer SVG for the loading placeholder
const shimmer = (isDark: boolean) => `
<svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="${isDark ? '#383838' : '#E2E2E2'}" offset="20%" />
      <stop stop-color="${isDark ? '#A0A09C' : '#F6F6F6'}" offset="50%" />
      <stop stop-color="${isDark ? '#383838' : '#E2E2E2'}" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="${isDark ? '#383838' : '#E2E2E2'}" />
  <rect id="r" width="100%" height="100%" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-100%" to="100%" dur="1s" repeatCount="indefinite" />
</svg>`;

// Encodes a string to Base64
const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

interface ImageWithFallBackProps extends ImageProps {
  fallbackSrc?: string;
  isDarkTheme?: boolean;
}

export const ImageWithFallBack = ({
  src,
  fallbackSrc = '/images/image-load-failed.png',
  isDarkTheme = true,
  loader,
  ...rest
}: ImageWithFallBackProps) => {
  const [isError, setIsError] = useState(false);

  return (
    <Image
      {...rest}
      loader={isError ? undefined : loader}
      src={isError ? fallbackSrc : src}
      blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(isDarkTheme))}`}
      placeholder="blur"
      onError={() => setIsError(true)}
    />
  );
};
