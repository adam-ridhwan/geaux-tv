import { cn } from '@/utils/cn';

import { Channels } from '@/store/useTvStore';
import { getAllChannels } from '@/lib/channels/getAllChannels';
import Footer from '@/components/footer/footer';
import CategoriesDropdown from '@/components/guide/categories-dropdown';
import ChannelCategoriesSidebar from '@/components/guide/categories-sidebar';
import ChannelList from '@/components/guide/channel-list';
import TvDataConsumer from '@/components/guide/tv-data-consumer';

const Guide = async () => {
  const CHANNELS: Channels | null = await getAllChannels();

  if (!CHANNELS) return <div>Failed to get channels</div>;

  const CHANNEL_CATEGORIES = ['Previously watched', ...Object.keys(CHANNELS).map(channel => channel), 'Favorites'];

  return (
    <>
      <TvDataConsumer {...{ CHANNELS, CHANNEL_CATEGORIES }} />

      <ChannelList />
    </>
  );
};

export default Guide;
