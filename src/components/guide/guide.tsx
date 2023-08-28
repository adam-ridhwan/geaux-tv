import Image from 'next/image';
import { GRADIENTS } from '@/util/constants/gradients';

import { Channels } from '@/store/useTvStore';
import { getAllChannels } from '@/lib/getAllChannels';
import ChannelButton from '@/components/ui/channel-button';
import HorizontalSeparator from '@/components/ui/horizontal-separator';
import Footer from '@/components/footer/footer';
import ChannelCategoriesDropdown from '@/components/guide/channel-categories-dropdown';
import ChannelCategoriesSidebar from '@/components/guide/channel-categories-sidebar';
import ChannelContainer from '@/components/guide/channel-container';
import OptionsButton from '@/components/guide/options-button';
import TvDataConsumer from '@/components/guide/tv-data-consumer';

const Guide = async () => {
  const CHANNELS: Channels | null = await getAllChannels();

  if (!CHANNELS) return <div>Failed to get channels</div>;

  const CHANNEL_CATEGORIES = ['Previously watched', ...Object.keys(CHANNELS).map(channel => channel), 'Favorites'];

  let increment = 0;
  const incrementGradientObject = () => {
    if (increment === 10) increment = 0;
    increment++;
    return increment;
  };

  return (
    <>
      <TvDataConsumer {...{ CHANNELS, CHANNEL_CATEGORIES }} />

      <div
        className='relative flex h-full w-full flex-col items-center overflow-hidden bg-primary-void
        tablet:min-h-[304px] tablet:flex-1 tablet:flex-row tablet:items-start desktop:h-[304px] desktop:min-h-[304px]'
      >
        {/* CHANNEL CATEGORIES */}
        <div
          className='hide-scrollbar flex w-full justify-center bg-primary-void tablet:h-full
          tablet:w-[250px] tablet:min-w-[250px] tablet:flex-col tablet:justify-start tablet:overflow-y-auto tablet:p-2'
        >
          <ChannelCategoriesDropdown />
          <ChannelCategoriesSidebar />
        </div>

        <div className='hide-scrollbar flex h-full w-full flex-col overflow-y-auto desktop:flex-row'>
          {/* TITLE */}
          {Object.keys(CHANNELS).map(category => (
            <div key={category} className='flex flex-col pb-[40px] tablet:pb-0 '>
              <div className='flex flex-row bg-primary-void pt-[20px]'>
                <HorizontalSeparator className='relative mb-[32px] bg-accent-light tablet:mb-[20px]'>
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
                className='hide-scrollbar flex h-full flex-col overflow-auto
                border-b border-b-primary-dark tablet:flex-row tablet:gap-4 tablet:border-none tablet:p-4 '
              >
                {CHANNELS[category].map(channel => {
                  const index = incrementGradientObject();
                  const firstColor = GRADIENTS[index][0];
                  const secondColor = GRADIENTS[index][1];
                  return (
                    <ChannelContainer key={channel.channelNumber} {...{ channel, firstColor, secondColor }}>
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
                    </ChannelContainer>
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
