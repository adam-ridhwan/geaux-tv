import Image from 'next/image';
import { GRADIENTS } from '@/util/constants/gradients';

import { Channels } from '@/store/useTvStore';
import { getAllChannels } from '@/lib/channels/getAllChannels';
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

  // const newUser: User = {
  //   age: 25,
  //   createdAt: new Date(),
  //   email: 'adamridhwan@hotmail.com',
  //   emailVerified: false,
  //   favoriteChannels: [],
  //   gender: 'male',
  //   lastLogin: new Date(),
  //   name: 'Adam Ridhwan',
  //   phone: '6178164892',
  //   photoUrl: 'https://geaux-avatar-icons.nyc3.digitaloceanspaces.com/011-man.png',
  //   updatedAt: new Date(),
  //   password: '123',
  // };
  //
  // await createNewUser(newUser);

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
        className='relative flex h-full max-h-full w-full flex-col items-center overflow-hidden bg-primary-void
        tablet:min-h-[304px] tablet:flex-1 tablet:flex-row tablet:items-start desktop:h-[304px] desktop:min-h-[304px]'
      >
        {/* CATEGORIES */}
        <div
          className='hide-scrollbar my-3 flex w-full justify-center bg-primary-void
          tablet:h-full tablet:w-[250px] tablet:min-w-[250px] tablet:flex-col tablet:justify-start tablet:overflow-y-auto tablet:p-2'
        >
          <ChannelCategoriesDropdown />
          <ChannelCategoriesSidebar />
        </div>

        {/* CHANNELS */}
        <div className='hide-scrollbar flex h-full w-full flex-col overflow-auto desktop:flex-row'>
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
                className='hide-scrollbar flex h-full flex-col overflow-auto overflow-y-hidden
                border-b border-b-primary-dark tablet:flex-row tablet:gap-4 tablet:border-none tablet:p-4'
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
                          className='h-auto w-[55px] max-w-[55px] tablet:w-[72px] tablet:max-w-[72px]'
                        />
                        <div className='flex flex-col items-start text-left leading-5 tablet:mt-24 tablet:h-full'>
                          <span className='text-fs-300 font-semibold tracking-wider text-primary-light'>
                            {channel.channelNumber}
                          </span>
                          <span
                            className='whitespace-nowrap text-fs-400 font-bold text-primary-lighter
                            tablet:flex tablet:whitespace-normal'
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

export default Guide;
