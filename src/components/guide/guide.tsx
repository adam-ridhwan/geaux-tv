import Image from 'next/image';
import { GRADIENTS } from '@/constants/gradients';
import { cn } from '@/utils/cn';

import { Channels } from '@/store/useTvStore';
import { getAllChannels } from '@/lib/channels/getAllChannels';
import SeparatorHorizontal from '@/components/ui/separator-horizontal';
import Footer from '@/components/footer/footer';
import CategoriesContainer from '@/components/guide/categories-container';
import ChannelButton from '@/components/guide/channel-button';
import ChannelButtonContainer from '@/components/guide/channel-button-container';
import ChannelLabel from '@/components/guide/channel-label';
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
        className={cn(
          `relative flex h-full max-h-full w-full flex-col items-center overflow-hidden bg-primary-void`,
          `tablet:items-start, tablet:min-h-[304px] tablet:flex-1 tablet:flex-row`,
          `desktop:h-[304px] desktop:min-h-[304px]`
        )}
      >
        {/* CATEGORIES SIDEBAR AND DROPDOWN */}
        <CategoriesContainer />

        {/* CATEGORY TITLE */}
        <div className={cn(`hide-scrollbar flex h-full w-full flex-col overflow-auto`, `desktop:flex-row`)}>
          {Object.keys(CHANNELS).map(category => (
            <div key={category} className='flex flex-col pb-[40px] tablet:pb-0 '>
              <div className='flex flex-row bg-primary-void pt-[20px]'>
                <SeparatorHorizontal className='relative mb-[32px] bg-accent-light tablet:mb-[20px]'>
                  <span
                    className={cn(
                      `absolute left-[16px] top-1/2 -translate-y-1/2 transform whitespace-nowrap rounded-weak border
                      border-accent-light bg-accent-darkest px-3 py-1 text-fs-400 font-bold text-primary-lightest`
                    )}
                  >
                    {category}
                  </span>
                </SeparatorHorizontal>
              </div>

              {/* CHANNELS */}
              <div
                className={cn(
                  `hide-scrollbar flex h-full flex-col overflow-auto overflow-y-hidden border-b border-b-primary-dark`,
                  `tablet:flex-row tablet:gap-4 tablet:border-none tablet:p-4`
                )}
              >
                {CHANNELS[category].map(channel => {
                  const index = incrementGradientObject();
                  const firstColor = GRADIENTS[index][0];
                  const secondColor = GRADIENTS[index][1];
                  return (
                    <ChannelButtonContainer key={channel.channelNumber} {...{ channel, firstColor, secondColor }}>
                      <ChannelButton channel={channel}>
                        <div className='flex desktop:min-h-[80px] desktop:items-center'>
                          <Image
                            src={channel.channelIcon}
                            alt={channel.channelName}
                            width={500}
                            height={500}
                            className={cn(
                              `h-auto w-[55px] max-w-[55px]`,
                              `tablet:w-[72px] tablet:max-w-[72px]`,
                              `desktop:h-auto desktop:w-auto`
                            )}
                          />
                        </div>
                        <ChannelLabel {...{ channel }} />
                      </ChannelButton>
                      <OptionsButton {...{ channel }} />
                    </ChannelButtonContainer>
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
