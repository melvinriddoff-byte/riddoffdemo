import { useState, useEffect } from "react";
import { currentBreakpoint, isBreakpoint, BREAKPOINTS } from "@/lib/responsive-antigravity";

export interface UseResponsiveEngineReturn {
  /** Current breakpoint name: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' */
  breakpoint: string;
  /** True if viewport is at or above the given breakpoint */
  is: (bp: string) => boolean;
  /** True when viewport is below md (768px) */
  isMobile: boolean;
  /** True when viewport is md..lg (768–1023px) */
  isTablet: boolean;
  /** True when viewport is lg+ (1024px+) */
  isDesktop: boolean;
  /** Raw viewport width in px */
  width: number;
}

/**
 * React hook that tracks the current breakpoint reactively.
 * Re-renders only on breakpoint boundary crossings, not every resize event.
 *
 * @example
 * const { is, isMobile, breakpoint } = useResponsiveEngine();
 * if (is('md')) { ... }
 */
export function useResponsiveEngine(): UseResponsiveEngineReturn {
  const [bp, setBp]     = useState(() => currentBreakpoint());
  const [width, setWidth] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    let lastBp = currentBreakpoint();

    const handler = () => {
      const newBp = currentBreakpoint();
      setWidth(window.innerWidth);
      if (newBp !== lastBp) {
        lastBp = newBp;
        setBp(newBp);
      }
    };

    window.addEventListener("resize", handler, { passive: true });
    return () => window.removeEventListener("resize", handler);
  }, []);

  return {
    breakpoint: bp,
    is: isBreakpoint,
    isMobile:  !isBreakpoint("md"),
    isTablet:   isBreakpoint("md") && !isBreakpoint("lg"),
    isDesktop:  isBreakpoint("lg"),
    width,
  };
}

// Re-export the raw utilities so consumers can import from one place
export { isBreakpoint, currentBreakpoint, BREAKPOINTS };
