'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { GRADIENTS } from '@/constants/gradients';
import { cn } from '@/utils/cn';

import { useTvStore } from '@/store/useTvStore';
import Footer from '@/components/footer/footer';
import CategoriesDropdown from '@/components/guide/categories-dropdown';
import ChannelCategoriesSidebar from '@/components/guide/categories-sidebar';
import ChannelButton from '@/components/guide/channel-button';
import ChannelContainer from '@/components/guide/channel-container';
import OptionsButton from '@/components/guide/options-button';
import PlayingIcon from '@/components/guide/playing-icon';

const ChannelList = () => {
  const [channels] = useTvStore(state => [state.channels]);
  const scrollableContainerRef = useRef(null);
  const categoriesRef = useRef<{ [key: string]: HTMLDivElement | null }>({});

  let increment = 0;
  const incrementGradientObject = () => {
    if (increment === 10) increment = 0;
    increment++;
    return increment;
  };

  const scrollToCategory = (category: string) => {
    const ref = categoriesRef.current[category];
    if (ref) {
      ref.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  };

  useEffect(() => {}, [categoriesRef]);

  return (
    <>
      <div
        className={cn(
          `relative flex h-full max-h-full w-full flex-col items-center overflow-hidden bg-primary-void`,
          `tablet:items-start, tablet:min-h-[304px] tablet:flex-1 tablet:flex-row`,
          `desktop:h-[304px] desktop:min-h-[304px]`
        )}
      >
        {/* SIDEBAR AND DROPDOWN */}
        <div
          className={cn(
            `hide-scrollbar my-3 flex w-full justify-center bg-primary-void`,
            `tablet:h-full tablet:w-[250px] tablet:min-w-[250px] tablet:flex-col tablet:justify-start 
            tablet:overflow-y-auto tablet:p-2 tablet:pb-10 tablet:pt-9`
          )}
        >
          <CategoriesDropdown {...{ scrollToCategory }} />
          <ChannelCategoriesSidebar {...{ scrollToCategory }} />
        </div>

        {/* CHANNEL LIST   */}
        <div
          ref={scrollableContainerRef}
          className={cn(
            `hide-scrollbar flex h-full w-full flex-col overflow-auto tablet:pt-[20px]`,
            `desktop:flex-row`
          )}
        >
          {Object.keys(channels).map(category => (
            <div
              key={category}
              ref={channelContainer => (categoriesRef.current[category] = channelContainer)}
              className={cn(`flex flex-col pb-[40px] tablet:pb-0`)}
            >
              <div className='flex flex-row bg-primary-void'>
                <span className={cn(`whitespace-nowrap px-3 py-1 text-fs-400 font-bold text-primary-lightest`)}>
                  {category}
                </span>
              </div>

              {/* CHANNELS */}
              <div
                className={cn(
                  `hide-scrollbar flex h-full flex-col overflow-auto overflow-y-hidden border-b border-b-primary-dark`,
                  `tablet:flex-row tablet:gap-4 tablet:border-none tablet:p-4`
                )}
              >
                {channels[category].map(channel => {
                  const index = incrementGradientObject();
                  const firstColor = GRADIENTS[index][0];
                  const secondColor = GRADIENTS[index][1];
                  return (
                    <ChannelContainer key={channel.channelNumber} {...{ channel, firstColor, secondColor }}>
                      <ChannelButton {...{ channel }}>
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
                        <div
                          className={cn(
                            `flex flex-col items-start text-left leading-5`,
                            `tablet:mt-24 tablet:h-full`,
                            `desktop:ml-6 desktop:mt-0 desktop:w-full desktop:items-start desktop:justify-start desktop:gap-2`
                          )}
                        >
                          <span className='flex h-[25px] items-center gap-2 text-fs-300 font-semibold tracking-wider text-primary-light'>
                            <PlayingIcon {...{ channel }} />
                            {channel.channelNumber}
                          </span>
                          <span
                            className={cn(
                              `whitespace-nowrap text-fs-400 font-bold text-primary-lighter`,
                              `tablet:flex tablet:whitespace-normal`
                            )}
                          >
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

export default ChannelList;
