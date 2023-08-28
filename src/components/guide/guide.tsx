import Image from 'next/image';
import { GRADIENTS } from '@/util/constants/gradients';
import { incrementGradientObject } from '@/util/incrementGradientObject';

import { Channels } from '@/store/useTvStore';
import { getAllChannels } from '@/lib/getAllChannels';
import ChannelButton from '@/components/ui/channel-button';
import HorizontalSeparator from '@/components/ui/horizontal-separator';
import Footer from '@/components/footer/footer';
import ChannelCategoriesDropdown from '@/components/guide/channel-categories-dropdown';
import ChannelCategoriesSidebar from '@/components/guide/channel-categories-sidebar';
import OptionsButton from '@/components/guide/options-button';
import TvDataConsumer from '@/components/guide/tv-data-consumer';

const Guide = async () => {
  const CHANNELS: Channels | null = await getAllChannels();

  if (!CHANNELS) return <div>Failed to get channels</div>;

  const CHANNEL_CATEGORIES = ['Previously watched', ...Object.keys(CHANNELS).map(channel => channel), 'Favorites'];

  return (
    <>
      <TvDataConsumer {...{ CHANNELS, CHANNEL_CATEGORIES }} />

      <div
        className='tablet:min-h-[304px] tablet:flex-1 tablet:flex-row tablet:items-start relative flex h-full
        w-full flex-col items-center overflow-hidden bg-primary-void desktop:h-[304px] desktop:min-h-[304px]'
      >
        {/* CHANNEL CATEGORIES */}
        <div
          className='tablet:flex-col tablet:w-[250px] tablet:min-w-[250px] tablet:justify-start
          tablet:p-2 tablet:overflow-y-auto tablet:h-full
          hide-scrollbar flex w-full justify-center bg-primary-void'
        >
          <ChannelCategoriesDropdown />
          <ChannelCategoriesSidebar />
        </div>

        <div className='hide-scrollbar flex h-full w-full flex-col overflow-y-auto desktop:flex-row'>
          {/* TITLE */}
          {Object.keys(CHANNELS).map(category => (
            <div key={category} className='tablet:pb-0 flex flex-col pb-[40px] '>
              <div className='flex flex-row bg-primary-void pt-[20px]'>
                <HorizontalSeparator className='relative mb-[20px] bg-accent-light'>
                  <span
                    className='absolute left-[16px] top-1/2 -translate-y-1/2 transform whitespace-nowrap rounded-weak
                    border border-accent-light bg-accent-darkest px-3 py-1 text-fs-400 font-bold text-primary-lightest'
                  >
                    {category}
                  </span>
                </HorizontalSeparator>
              </div>

              {/* CHANNELS */}
              <div
                className='tablet:gap-4 tablet:flex-row tablet:border-none tablet:p-4
                flex h-full flex-col overflow-auto border-b border-b-primary-dark '
              >
                {CHANNELS[category].map(channel => {
                  const index = incrementGradientObject();
                  const firstColor = GRADIENTS[index][0];
                  const secondColor = GRADIENTS[index][1];
                  return (
                    <div
                      key={channel.channelNumber}
                      className='channel-button tablet:rounded-weak tablet:transition-all tablet:hover:scale-[1.075]
                      tablet:hover:outline tablet:hover:outline-offset-2 relative transform duration-300'
                      style={{
                        background: `linear-gradient(120deg, ${firstColor}, ${secondColor})`,
                      }}
                    >
                      <ChannelButton channel={channel}>
                        <Image
                          src={channel.channelIcon}
                          alt={channel.channelName}
                          width={500}
                          height={500}
                          className='h-[55px] w-auto'
                        />
                        <div className='flex flex-col items-start leading-5'>
                          <span className='text-fs-300 font-semibold tracking-wider text-primary-light'>
                            {channel.channelNumber}
                          </span>
                          <span className='whitespace-nowrap text-fs-400 font-bold text-primary-lighter'>
                            {channel.channelName}
                          </span>
                        </div>
                      </ChannelButton>
                      <OptionsButton {...{ channel }} />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Guide;
