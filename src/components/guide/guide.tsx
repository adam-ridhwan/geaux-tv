import Image from 'next/image';

import { Channels } from '@/store/useTvStore';
import { getAllChannels } from '@/lib/getAllChannels';
import ChannelButton from '@/components/ui/channel-button';
import HorizontalSeparator from '@/components/ui/horizontal-separator';
import Footer from '@/components/footer/footer';
import ChannelCategoriesDropdown from '@/components/guide/channel-categories-dropdown';
import OptionsButton from '@/components/guide/options-button';

import '@/styles/index.css';

const Guide = async () => {
  const TV_DATA: Channels | null = await getAllChannels();

  if (!TV_DATA) return <div>Failed to get channels</div>;

  const CHANNEL_CATEGORIES = ['Previously watched', ...Object.keys(TV_DATA).map(channel => channel), 'Favorites'];

  const colors: {
    [key: string]: string[];
  } = {
    1: ['hsl(227 47.2% 21.0%)', 'hsl(298 34.4% 15.3%)'],
    2: ['hsl(298 34.4% 15.3%)', 'hsl(214 59.4% 15.3%)'],
    3: ['hsl(214 59.4% 15.3%)', 'hsl(55 3.7% 19.9%)'],
    4: ['hsl(55 3.7% 19.9%)', 'hsl(319 41.0% 16.0%)'],
    5: ['hsl(319 41.0% 16.0%)', 'hsl(41 16.4% 15.6%)'],
    6: ['hsl(41 16.4% 15.6%)', 'hsl(335 47.2% 19.3%)'],
    7: ['hsl(335 47.2% 19.3%)', 'hsl(227 50.0% 24.1%)'],
    8: ['hsl(227 50.0% 19.1%)', 'hsl(192 92.6% 15.1%)'],
    9: ['hsl(192 92.6% 15.1%)', 'hsl(172 75.8% 10.1%)'],
    10: ['hsl(172 75.8% 10.1%)', 'hsl(297 36.8% 18.3%)'],
  };

  let increment = 0;
  const incrementColorsObject = () => {
    if (increment === 10) increment = 0;
    increment++;
    return increment;
  };

  return (
    <div
      className='relative flex h-full w-full flex-col items-center overflow-auto
      mobile:min-h-[304px] mobile:flex-1
      desktop:h-[304px] desktop:min-h-[304px]'
    >
      <div className='flex w-full justify-center bg-black'>
        <ChannelCategoriesDropdown TV_DATA={TV_DATA} CHANNEL_CATEGORIES={CHANNEL_CATEGORIES} />
      </div>

      <div className='hide-scrollbar w-full overflow-auto'>
        {Object.keys(TV_DATA).map(category => (
          <div key={category} className='flex flex-col pb-[40px]'>
            <div className='sticky top-0 z-10 flex flex-row bg-black pt-[20px]'>
              <HorizontalSeparator className='relative mb-[32px] bg-accent-light'>
                <span
                  className='absolute left-[16px] top-1/2 -translate-y-1/2 transform whitespace-nowrap rounded-weak
                  border border-accent-light bg-accent-darkest px-3 py-1 text-fs-400 font-bold text-primary-lightest'
                >
                  {category}
                </span>
              </HorizontalSeparator>
            </div>

            <div className='border-b border-b-primary-dark'>
              {TV_DATA[category].map(channel => {
                // const index = incrementColorsObject();
                // const firstColor = colors[index][0];
                // const secondColor = colors[index][1];
                return (
                  <div key={channel.channelNumber} className='relative'>
                    <ChannelButton>
                      <Image src={channel.channelIcon} alt={channel.channelName} width={55} height={55} />
                      <div className='flex flex-col items-start leading-5'>
                        <span className='text-fs-300 font-semibold tracking-wider text-primary-light'>
                          {channel.channelNumber}
                        </span>
                        <span className='whitespace-nowrap text-fs-400 font-bold text-primary-lighter'>
                          {channel.channelName}
                        </span>
                      </div>
                    </ChannelButton>
                    <OptionsButton channel={channel} />
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        <Footer />
      </div>
    </div>
  );
};

export default Guide;
