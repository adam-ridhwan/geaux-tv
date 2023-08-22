import { useEffect, useState } from 'react';

export const MOBILE = 'mobile';
export const DESKTOP = 'desktop';
export const LARGE_DESKTOP = 'large desktop';

export type Devices = typeof MOBILE | typeof DESKTOP | typeof LARGE_DESKTOP | undefined;

const useWindowSize = (): Devices => {
  const [currentDevice, setCurrentDevice] = useState<Devices>(undefined);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width >= 1700) {
        setCurrentDevice(LARGE_DESKTOP);
      } else if (width >= 750) {
        setCurrentDevice(DESKTOP);
      } else {
        setCurrentDevice(MOBILE);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return currentDevice;
};

export default useWindowSize;
