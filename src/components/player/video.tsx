'use client';

import { useEffect, useState } from 'react';

import { useTvStore } from '@/store/useTvStore';
import LoadingScreen from '@/components/player/loading-screen';

const Video = () => {
  const [currentChannel] = useTvStore(state => [state.currentChannel]);
  const [isHydrated, setIsHydrated] = useState<boolean>(false);
  const [src, setSrc] = useState<string>('' as string);

  /**
   * We need to have this because of the iframe.
   * If we don't have this, next.js will complain because the server component is different from the client component.
   */
  useEffect(() => {
    if (currentChannel) {
      setSrc(currentChannel.episodes[0]['videoId']);
      setTimeout(() => {
        setIsHydrated(true);
      }, 500);
    }
  }, [currentChannel]);

  return (
    <>
      <LoadingScreen {...{ isHydrated }} />
      {src && <iframe src={src} allow='autoplay' className='m-auto block aspect-video h-full w-full border-none' />}
    </>
  );
};

export default Video;
