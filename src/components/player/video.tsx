'use client';

import { FC, useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import chalk from 'chalk';

import { useMountedStore } from '@/store/useMountedStore';
import { Channel, useTvStore } from '@/store/useTvStore';

type VideoProps = {
  channel: Channel;
};

const Video: FC<VideoProps> = ({ channel }) => {
  const [setIsMounted] = useMountedStore(state => [state.setIsMounted]);
  const [src, setSrc] = useState<string>('' as string);

  useEffect(() => {
    setTimeout(() => setIsMounted(true), 500);
    setSrc(channel.episodes[0].videoId);
  }, [channel.episodes, setIsMounted]);

  // if (process.env.NEXT_PUBLIC_NODE_ENV === 'development') {
  //   return (
  //     <iframe
  //       src='https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1&mute=1&si=4TsNcMV-2nlMOMFX'
  //       allow='autoplay; encrypted-media'
  //       className='m-auto block aspect-video h-full w-full border-none'
  //     />
  //   );
  // }

  if (src) return <iframe src={src} allow='autoplay' className='m-auto block aspect-video h-full w-full border-none' />;
};

export default Video;
