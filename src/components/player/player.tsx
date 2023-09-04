import { FC } from 'react';

import { Channel } from '@/store/useTvStore';
import Video from '@/components/player/video';

type PlayerProps = {
  channel: Channel;
};

const Player: FC<PlayerProps> = ({ channel }) => {
  return (
    <div className='relative flex justify-center bg-black tablet:min-h-[100px] desktop:flex-grow'>
      <div className='pointer-events-none w-full max-w-[1700px] select-none bg-black'>
        {/*<Video {...{ channel }} />*/}
        <iframe
          src={channel.episodes[0].videoId}
          allow='autoplay'
          className='m-auto block aspect-video h-full w-full border-none'
        />
      </div>
    </div>
  );
};

export default Player;
