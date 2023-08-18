import { useEffect, useState } from 'react';

const MOBILE = 'mobile';
const DESKTOP = 'desktop';
const LARGE_DESKTOP = 'large-desktop';

export type Breakpoint = typeof MOBILE | typeof DESKTOP | typeof LARGE_DESKTOP | undefined;

const useWindowSize = (): Breakpoint => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>(undefined);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width >= 1700) {
        setBreakpoint(LARGE_DESKTOP);
      } else if (width >= 750) {
        setBreakpoint(DESKTOP);
      } else {
        setBreakpoint(MOBILE);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return breakpoint;
};

export default useWindowSize;
