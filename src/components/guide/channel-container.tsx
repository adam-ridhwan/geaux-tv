'use client';

import { FC, ReactNode } from 'react';
import { cn } from '@/utils/cn';
import useWindowSize, { DESKTOP } from '@/utils/useWindowSize';

import { Channel } from '@/store/useTvStore';

type ChannelContainerProps = {
  channel: Channel;
  firstColor: string;
  secondColor: string;
  children: ReactNode;
};

const ChannelContainer: FC<ChannelContainerProps> = ({ firstColor, secondColor, children }) => {
  const currentDevice = useWindowSize();
  return (
    <div
      className={cn(
        `channel-button relative transform duration-300`,
        `tablet:rounded-weak tablet:transition-all tablet:hover:scale-[1.075] tablet:hover:outline 
        tablet:hover:outline-offset-2`
      )}
      style={{
        background: currentDevice === DESKTOP ? `linear-gradient(120deg, ${firstColor}, ${secondColor})` : '',
      }}
    >
      {children}
    </div>
  );
};

export default ChannelContainer;
