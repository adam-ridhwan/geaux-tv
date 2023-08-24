'use client';

import { useEffect, useState } from 'react';

import { useTvStore } from '@/store/useTvStore';
import LoadingScreen from '@/components/player/loading-screen';

const Video = () => {
  const [currentChannel] = useTvStore(state => [state.currentChannel]);
  const [src, setSrc] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (currentChannel) {
      setSrc(currentChannel.episodes[0]['videoId']);

      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }, [currentChannel]);

  return (
    <>
      <LoadingScreen isLoading={loading} />
      {src && <iframe src={src} allow='autoplay' className='m-auto block aspect-video h-full w-full border-none' />}
    </>
  );
};

export default Video;
