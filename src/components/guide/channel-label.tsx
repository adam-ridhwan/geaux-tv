import { FC } from 'react';
import { cn } from '@/utils/cn';

import { type Channel } from '@/store/useTvStore';
import PlayingIcon from '@/components/guide/playing-icon';

type ChannelLabelProps = {
  channel: Channel;
};

const ChannelLabel: FC<ChannelLabelProps> = ({ channel }) => {
  return (
    <>
      <div
        className={cn(
          `flex flex-col items-start text-left leading-5`,
          `tablet:mt-24 tablet:h-full`,
          `desktop:ml-6 desktop:mt-0 desktop:w-full desktop:items-start desktop:justify-start desktop:gap-2`
        )}
      >
        <span className='flex h-[25px] items-center gap-2 text-fs-300 font-semibold tracking-wider text-primary-light'>
          <PlayingIcon {...{ channel }} />
          {channel.channelNumber}
        </span>
        <span
          className={cn(
            `whitespace-nowrap text-fs-400 font-bold text-primary-lighter`,
            `tablet:flex tablet:whitespace-normal`
          )}
        >
          {channel.channelName}
        </span>
      </div>
    </>
  );
};

export default ChannelLabel;
