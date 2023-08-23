import { Channels } from '@/store/useTvStore';
import { getAllChannels } from '@/lib/getAllChannels';
import HorizontalSeparator from '@/components/ui/horizontal-separator';
import ChannelCategoriesDropdown from '@/components/guide/channel-categories-dropdown';

const Guide = async () => {
  const data: Channels | null = await getAllChannels();

  if (!data) return <div>Failed to get channels</div>;

  const CHANNEL_CATEGORIES = ['Previously watched', ...Object.keys(data).map(channel => channel), 'Favorites'];

  return (
    <div
      className='relative w-full h-full bg-secondary-darkest  gap-[10px] flex flex-col items-center overflow-auto
      mobile:flex-1 mobile:min-h-[300px]
      desktop:h-[300px] desktop:min-h-[300px]'
    >
      <ChannelCategoriesDropdown data={data} CHANNEL_CATEGORIES={CHANNEL_CATEGORIES} />

      <div className='w-full pb-[40px] overflow-auto'>
        {Object.keys(data).map(category => (
          <div key={category} className='flex flex-col mx-3 pb-[20px]'>
            <div className='flex flex-row gap-4'>
              <span className='text-primary-lightest text-fs-500 font-bold whitespace-nowrap'>{category}</span>
              <HorizontalSeparator className='bg-tertiary-light' />
            </div>

            {data[category].map(channel => (
              <div key={channel.channelNumber}>
                <span className='text-primary-lighter text-fs-400 font-bold tracking-wider'>
                  {channel.channelNumber}
                </span>
                <span className='text-primary-light text-fs-300'>{channel.channelName}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guide;
