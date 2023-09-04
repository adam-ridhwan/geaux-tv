import { notFound } from 'next/navigation';

import { Channel, Channels } from '@/store/useTvStore';
import { getAllChannels } from '@/lib/channels/getAllChannels';
import { getChannel } from '@/lib/channels/getChannel';
import Player from '@/components/player/player';

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

const ChannelPage = async ({ params: { channelNumber } }: Params) => {
  const channel: Channel | null = await getChannel(Number(channelNumber));

  if (!channel) notFound();

  return <Player {...{ channel }} />;
};

export default ChannelPage;
