import { Card } from './card';

const BenefitsPage = () => {
  const benefits = [
    {
      title: 'Diverse Content',
      description: 'Watch content that reflects the world around you',
      image: 'https://illustrations.popsy.co/white/work-party.svg',
    },
    {
      title: 'Watch Anywhere',
      description: 'Free to stream on your phone, tablet or laptop anytime',
      image: 'https://illustrations.popsy.co/white/remote-work.svg',
    },
    {
      title: 'Game Changers',
      description: 'Affect the outcome of the shows you watch in real time',
      image: 'https://illustrations.popsy.co/white/man-riding-a-rocket.svg',
    },
    {
      title: 'Special Channels',
      description: 'Watch certain channels that are only available to users',
      image: 'https://illustrations.popsy.co/white/home-office.svg',
    },
    {
      title: 'Buying Power',
      description: 'Ability to buy what you see on certain channels',
      image: 'https://illustrations.popsy.co/white/rich.svg',
    },
  ];
  return (
    <div className='overflow-y-scroll'>
      <h2 className='flex w-full flex-col items-center justify-between px-24 py-10 text-fs-700 tracking-tight'>
        Benefits
      </h2>
      <div className='mx-auto mb-12 flex flex-wrap items-center justify-center gap-6 px-4'>
        {benefits.map((benefit, index) => (
          <Card key={index} {...benefit} />
        ))}
      </div>
    </div>
  );
};

export default BenefitsPage;
