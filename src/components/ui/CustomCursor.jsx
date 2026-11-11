import { useEffect, useState } from "react";
import { m } from "framer-motion";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [seenPointer, setSeenPointer] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const query = window.matchMedia(
      "(pointer: fine) and (min-width: 768px) and (prefers-reduced-motion: no-preference)",
    );
    const check = () => setEnabled(query.matches);
    check();
    query.addEventListener("change", check);
    return () => query.removeEventListener("change", check);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const move = (event) => {
      setSeenPointer(true);
      setMousePosition({ x: event.clientX, y: event.clientY });
      setIsHovering(Boolean(event.target.closest("a, button, [role=button]")));
    };
    const leave = () => setSeenPointer(false);
    window.addEventListener("pointermove", move);
    document.documentElement.addEventListener("pointerleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", leave);
    };
  }, [enabled]);

  useEffect(() => {
    if (!enabled || !seenPointer) return;
    document.documentElement.classList.add("custom-cursor-active");
    return () =>
      document.documentElement.classList.remove("custom-cursor-active");
  }, [enabled, seenPointer]);

  if (!enabled || !seenPointer) return null;
  return (
    <div aria-hidden="true">
      <m.div
        className="fixed top-0 left-0 w-3 h-3 bg-primary rounded-full pointer-events-none z-[100]"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovering ? 2.5 : 1,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />
      <m.div
        className="fixed top-0 left-0 w-12 h-12 border border-primary/50 rounded-full pointer-events-none z-[99]"
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? "rgba(40,102,92,0.08)" : "transparent",
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.3 }}
      />
    </div>
  );
}
