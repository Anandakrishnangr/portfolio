'use client'
import { useEffect, useRef, useState } from 'react';

const MouseSpotlight = () => {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const [intense, setIntense] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      const spotlight = spotlightRef.current;
      if (spotlight) {
        const currentX = parseFloat(spotlight.style.left || '0');
        const currentY = parseFloat(spotlight.style.top || '0');
        const newX = currentX + (pos.current.x - currentX) * 0.08;
        const newY = currentY + (pos.current.y - currentY) * 0.08;

        spotlight.style.left = `${newX}px`;
        spotlight.style.top = `${newY}px`;
      }

      requestAnimationFrame(animate);
    };

    const handleClick = () => {
      setIntense(true);
      setTimeout(() => setIntense(false), 300); // lasts for 300ms
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div
      ref={spotlightRef}
      className={`pointer-events-none fixed top-0 left-0 w-[800px] h-[800px] rounded-full 
        bg-cyan-400 ${intense ? 'opacity-40 scale-110' : 'opacity-15 scale-100'} 
        mix-blend-lighten blur-[200px] transition-all duration-300 ease-out 
        -translate-x-1/2 -translate-y-1/2 z-0`}
    />
  );
};

export default MouseSpotlight;
