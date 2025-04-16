
import { useEffect, useRef } from 'react';

interface FadeUpElementProps {
  children: React.ReactNode;
  delay?: number;
}

const FadeUpElement = ({ children, delay = 0 }: FadeUpElementProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={elementRef} 
      className="overflow-hidden"
      style={{ '--delay': delay } as React.CSSProperties}
    >
      <div className="fade-up-element">{children}</div>
    </div>
  );
};

export default FadeUpElement;
