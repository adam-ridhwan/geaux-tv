import { connectToDatabase } from '@/database/mongodb';
import { getAllChannels } from '@/lib/getAllChannels';
import ChannelCategoriesDropdown from '@/components/guide/channel-categories-dropdown';

type Episode = {
  videoId: string;
  title: string;
};

type Channel = {
  channelNumber: string;
  channelName: string;
  channelDescription: string;
  episodes: Episode[];
};

type ChannelsGroup = {
  [key: string]: Channel[];
};

type ChannelData = {
  _id: string;
  channels: ChannelsGroup;
};

const Guide = async () => {
  const data = await getAllChannels();

  return (
    <div
      className='relative w-full h-full bg-secondary-darkest pb-[30px] gap-[10px] px-3
      mobile:flex-1 mobile:min-h-[300px]
      desktop:h-[300px] desktop:min-h-[300px]'
    >
      <ChannelCategoriesDropdown />
      <div className='flex-1'>
        <h1>Channels</h1>
        {Object.keys(data[0].channels).map(category => {
          return <div key={category}>{category}</div>;
        })}
      </div>
    </div>
  );
};

export default Guide;
