import ChannelCategoriesDropdown from '@/components/guide/channel-categories-dropdown';

const Guide = () => {
  return (
    <>
      <div
        className='relative w-full h-full bg-secondary-darkest pb-[30px] gap-[10px] px-3
        mobile:flex-1 mobile:min-h-[300px]
        desktop:h-[300px] desktop:min-h-[300px]'
      >
        <ChannelCategoriesDropdown />
        <div className='flex-1'>Channels</div>
      </div>
    </>
  );
};

export default Guide;
