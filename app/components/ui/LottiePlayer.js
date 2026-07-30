'use client';

import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

/**
 * Reusable LottiePlayer Component for Next.js App Router
 * Accepts either:
 * - `animationData`: direct JSON object
 * - `src`: string URL or path to a JSON file (e.g. `/animations/hero.json`)
 */
export default function LottiePlayer({
  animationData,
  src,
  loop = true,
  autoplay = true,
  className = '',
  style = {},
  lottieRef,
  ...props
}) {
  const [data, setData] = useState(animationData);
  const [loading, setLoading] = useState(Boolean(src && !animationData));
  const [error, setError] = useState(null);

  useEffect(() => {
    if (animationData) {
      setData(animationData);
      setLoading(false);
      return;
    }

    if (src) {
      setLoading(true);
      fetch(src)
        .then((res) => {
          if (!res.ok) throw new Error(`Failed to load Lottie JSON from ${src}`);
          return res.json();
        })
        .then((json) => {
          setData(json);
          setLoading(false);
        })
        .catch((err) => {
          console.error('LottiePlayer error:', err);
          setError(err.message);
          setLoading(false);
        });
    }
  }, [animationData, src]);

  if (loading) {
    return (
      <div className={`flex items-center justify-center p-4 min-h-[100px] ${className}`} style={style}>
        <div className="w-8 h-8 border-2 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
      </div>
    );
  }

  if (error || !data) {
    return null;
  }

  return (
    <Lottie
      lottieRef={lottieRef}
      animationData={data}
      loop={loop}
      autoplay={autoplay}
      className={className}
      style={style}
      {...props}
    />
  );
}
