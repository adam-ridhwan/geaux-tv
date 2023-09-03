'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import chalk from 'chalk';

import { useMountedStore } from '@/store/useMountedStore';
import { useTvStore } from '@/store/useTvStore';

const Video = () => {
  const params = useParams();
  const [channels] = useTvStore(state => [state.channels]);
  const [isMounted, setIsMounted] = useMountedStore(state => [state.isMounted, state.setIsMounted]);
  const [src, setSrc] = useState<string>('' as string);

  useEffect(() => {
    setTimeout(() => setIsMounted(true), 500);

    for (const category in channels) {
      for (const channel of channels[category]) {
        if (channel.channelNumber === Number(params.channelNumber)) {
          setSrc(channel.episodes[0]?.videoId);
        }
      }
    }
  }, [channels, params.channelNumber, setIsMounted]);

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
