import Image from 'next/image';

import { Channels } from '@/store/useTvStore';
import { getAllChannels } from '@/lib/getAllChannels';
import ChannelButton from '@/components/ui/channel-button';
import HorizontalSeparator from '@/components/ui/horizontal-separator';
import ChannelCategoriesDropdown from '@/components/guide/channel-categories-dropdown';
import OptionsButton from '@/components/guide/options-button';

import '@/styles/index.css';

import Overlay from '@/components/ui/overlay';

const Guide = async () => {
  const TV_DATA: Channels | null = await getAllChannels();

  if (!TV_DATA) return <div>Failed to get channels</div>;

  const CHANNEL_CATEGORIES = ['Previously watched', ...Object.keys(TV_DATA).map(channel => channel), 'Favorites'];

  const colors: {
    number: string[];
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
      className='relative w-full h-full bg-gradient-bottom-to-top gap-[8px] flex flex-col items-center overflow-auto
      mobile:flex-1 mobile:min-h-[304px]
      desktop:h-[304px] desktop:min-h-[304px]'
    >
      <ChannelCategoriesDropdown TV_DATA={TV_DATA} CHANNEL_CATEGORIES={CHANNEL_CATEGORIES} />

      <div className='w-full pb-[40px] overflow-auto hide-scrollbar'>
        {Object.keys(TV_DATA).map(category => (
          <div key={category} className='flex flex-col pt-[8px] pb-[40px]'>
            <div className='flex flex-row'>
              <HorizontalSeparator className='relative bg-tertiary-light mb-[32px]'>
                <span
                  className='absolute left-[16px] top-1/2 transform -translate-y-1/2 text-primary-lightest text-fs-400
                  font-bold whitespace-nowrap bg-tertiary-darkest border border-tertiary-light rounded-weak px-3 py-1'
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
                        <span className='text-primary-light text-fs-300 font-semibold tracking-wider'>
                          {channel.channelNumber}
                        </span>
                        <span className='text-primary-lighter text-fs-400 font-bold whitespace-nowrap'>
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
      </div>
    </div>
  );
};

export default Guide;
