import { useState, useCallback, useEffect, useRef } from "react";
export function useCounter(end) {
  const [count, setCount] = useState(0);
  const hasStarted = useRef(false);
  const frame = useRef(0);
  useEffect(() => () => cancelAnimationFrame(frame.current), []);
  const startCounting = useCallback(() => {
    if (hasStarted.current) return;
    hasStarted.current = true;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(end);
      return;
    }
    const duration = 2000; // 2 seconds
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easeOut * end);
      setCount(currentCount);
      if (progress < 1) {
        frame.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    frame.current = requestAnimationFrame(animate);
  }, [end]);
  return { count, startCounting };
}
