import { notFound } from 'next/navigation';

import { ChannelNumber, Channels } from '@/store/useTvStore';
import { getAllChannels } from '@/lib/channels/getAllChannels';
import Player from '@/components/player/player';

export async function generateStaticParams() {
  const CHANNELS: Channels | null = await getAllChannels();

  const channelNumbers: string[] = [];

  Object.values(CHANNELS ?? {}).forEach(category => {
    category.forEach(channel => {
      channelNumbers.push(String(channel.channelNumber));
    });
  });

  const uniqueChannelNumbers = Array.from(new Set(channelNumbers));

  return uniqueChannelNumbers.map(num => ({ channelNumber: num }));
}

const ChannelPage = async () => {
  const CHANNELS: Channels | null = await getAllChannels();

  const channelNumbers: ChannelNumber[] = [];

  Object.values(CHANNELS ?? {}).forEach(category => {
    category.forEach(channel => {
      channelNumbers.push(channel.channelNumber);
    });
  });

  const uniqueChannelNumbers = Array.from(new Set(channelNumbers));

  if (!uniqueChannelNumbers) notFound();

  return <Player />;
};

export default ChannelPage;
