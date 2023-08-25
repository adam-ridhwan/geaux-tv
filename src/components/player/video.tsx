'use client';

import { useEffect, useState } from 'react';

import { useHydrationStore } from '@/store/useHydrationStore';
import { useTvStore } from '@/store/useTvStore';

const Video = () => {
  const [currentChannel] = useTvStore(state => [state.currentChannel]);
  const [setIsHydrated] = useHydrationStore(state => [state.setIsHydrated]);
  const [src, setSrc] = useState<string>('' as string);

  /**
   * We need to have this because of the iframe.
   * If we don't have this, next.js will complain because the server component is different from the client component.
   */
  useEffect(() => {
    if (!currentChannel) return;

    setSrc(currentChannel.episodes[0]['videoId']);
    setTimeout(() => setIsHydrated(true), 500);
  }, [currentChannel]);

  if (src) return <iframe src={src} allow='autoplay' className='m-auto block aspect-video h-full w-full border-none' />;
};

export default Video;
