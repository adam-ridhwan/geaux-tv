import { Channels } from '@/store/useTvStore';
import { getAllChannels } from '@/lib/getAllChannels';
import ChannelCategoriesDropdown from '@/components/guide/channel-categories-dropdown';

const Guide = async () => {
  const data: Channels = await getAllChannels();
  const CHANNEL_CATEGORIES = ['Previously watched', ...Object.keys(data).map(channel => channel), 'Favorites'];

  return (
    <div
      className='relative w-full h-full bg-secondary-darkest pb-[30px] gap-[10px] px-3
      mobile:flex-1 mobile:min-h-[300px]
      desktop:h-[300px] desktop:min-h-[300px]'
    >
      <ChannelCategoriesDropdown data={data} CHANNEL_CATEGORIES={CHANNEL_CATEGORIES} />

      <div className='flex-1'>
        {CHANNEL_CATEGORIES.map(category => (
          <div key={category}>{category}</div>
        ))}
      </div>
    </div>
  );
};

export default Guide;
