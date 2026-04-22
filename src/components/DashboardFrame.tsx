import { useRef, useState, useEffect, ReactNode } from "react";

/**
 * Scales its children (a dashboard mockup) to always fit the available
 * container width, using the CSS `zoom` property so layout collapses
 * proportionally and no horizontal scroll is introduced.
 */
const DashboardFrame = ({
  children,
  naturalWidth = 900,
}: {
  children: ReactNode;
  naturalWidth?: number;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        const w = containerRef.current.offsetWidth;
        setZoom(Math.min(1, w / naturalWidth));
      }
    };

    update();

    const observer = new ResizeObserver(update);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [naturalWidth]);

  return (
    <div ref={containerRef} className="w-full overflow-hidden rounded-2xl">
      <div style={{ zoom }}>
        {children}
      </div>
    </div>
  );
};

export default DashboardFrame;
