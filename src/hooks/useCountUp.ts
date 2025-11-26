import { useState, useEffect, useRef } from 'react';

interface UseCountUpOptions {
  start?: number;
  end: number;
  duration?: number;
  delay?: number;
  decimals?: number;
  onComplete?: () => void;
}

/**
 * Hook for animated number counting (used in statistics)
 */
export const useCountUp = ({
  start = 0,
  end,
  duration = 2000,
  delay = 0,
  decimals = 0,
  onComplete,
}: UseCountUpOptions) => {
  const [count, setCount] = useState(start);
  const countRef = useRef(start);
  const startTimeRef = useRef<number | null>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const startAnimation = () => {
      const animate = (timestamp: number) => {
        if (!startTimeRef.current) {
          startTimeRef.current = timestamp;
        }

        const progress = timestamp - startTimeRef.current;
        const percentage = Math.min(progress / duration, 1);

        // Easing function (ease-out)
        const easeOut = 1 - Math.pow(1 - percentage, 3);
        
        const currentCount = start + (end - start) * easeOut;
        countRef.current = currentCount;
        setCount(Number(currentCount.toFixed(decimals)));

        if (percentage < 1) {
          animationFrameRef.current = requestAnimationFrame(animate);
        } else {
          onComplete?.();
        }
      };

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const timeoutId = setTimeout(startAnimation, delay);

    return () => {
      clearTimeout(timeoutId);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [start, end, duration, delay, decimals, onComplete]);

  return count;
};

/**
 * Hook for animated percentage counting
 */
export const usePercentageCountUp = (
  end: number,
  duration: number = 1500,
  delay: number = 0
) => {
  return useCountUp({ start: 0, end, duration, delay, decimals: 0 });
};

