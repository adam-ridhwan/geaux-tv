import { notFound } from 'next/navigation';

import { Channel, Channels } from '@/store/useTvStore';
import { getAllChannels } from '@/lib/channels/getAllChannels';
import { getChannel } from '@/lib/channels/getChannel';

type Params = {
  params: {
    channelNumber: string;
  };
};

export async function generateStaticParams() {
  const channels: Channels | null = await getAllChannels();

  const channelNumbers: string[] = [];

  Object.values(channels ?? {}).forEach(category => {
    category.forEach(channel => {
      channelNumbers.push(String(channel.channelNumber));
    });
  });

  return Array.from(new Set(channelNumbers)).map(num => ({ channelNumber: num }));
}

// TODO: Create metadata function

export default async function PlayerPage({ params: { channelNumber } }: Params) {
  const channel: Channel | null = await getChannel(Number(channelNumber));

  if (!channel) notFound();

  return (
    <div className='relative flex justify-center bg-black tablet:min-h-[100px] desktop:flex-grow'>
      <div className='pointer-events-none w-full max-w-[1700px] select-none bg-black'>
        <iframe
          src={channel.episodes[0].videoId}
          allow='autoplay'
          className='m-auto block aspect-video h-full w-full border-none'
        />
      </div>
    </div>
  );
}
