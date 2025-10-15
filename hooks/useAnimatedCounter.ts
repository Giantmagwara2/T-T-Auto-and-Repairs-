
import { useState, useEffect, useRef } from 'react';

// Easing function for a smoother animation
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export const useAnimatedCounter = (endValue: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  // FIX: Initialize useRef with `undefined` to provide the required initial value. Update type to allow undefined.
  const frameRef = useRef<number | undefined>(undefined);
  // FIX: Initialize useRef with `undefined` to provide the required initial value. Update type to allow undefined.
  const startTimeRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (startTimeRef.current === undefined) {
        startTimeRef.current = timestamp;
      }

      const elapsedTime = timestamp - startTimeRef.current;
      const progress = Math.min(elapsedTime / duration, 1);
      const easedProgress = easeOutCubic(progress);

      const currentCount = Math.floor(easedProgress * endValue);
      setCount(currentCount);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      startTimeRef.current = undefined;
    };
  }, [endValue, duration]);

  return count;
};
