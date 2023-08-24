'use client';

import { useEffect, useState } from 'react';

import { useTvStore } from '@/store/useTvStore';

const Video = () => {
  const [currentChannel] = useTvStore(state => [state.currentChannel]);
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    setSrc(currentChannel.episodes[0]['videoId']);
  }, [currentChannel]);

  return (
    <>{src && <iframe src={src} allow='autoplay' className='m-auto block aspect-video h-full w-full border-none' />}</>
  );
};

export default Video;
