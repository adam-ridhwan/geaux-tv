'use client';

import { FC, ReactNode } from 'react';
import useWindowSize, { DESKTOP } from '@/util/useWindowSize';

import { Channel } from '@/store/useTvStore';

type ChannelContainerProps = {
  channel: Channel;
  firstColor: string;
  secondColor: string;
  children: ReactNode;
};

const ChannelContainer: FC<ChannelContainerProps> = ({ channel, firstColor, secondColor, children }) => {
  const currentDevice = useWindowSize();
  return (
    <>
      <div
        className='channel-button relative transform  duration-300
        tablet:rounded-weak tablet:transition-all tablet:hover:scale-[1.075] tablet:hover:outline tablet:hover:outline-offset-2'
        style={{
          background: currentDevice === DESKTOP ? `linear-gradient(120deg, ${firstColor}, ${secondColor})` : '',
        }}
      >
        {children}
      </div>
    </>
  );
};

export default ChannelContainer;
