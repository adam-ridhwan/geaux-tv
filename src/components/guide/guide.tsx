import ChannelCategoriesDropdown from '@/components/guide/channel-categories-dropdown';

const Guide = () => {
  return (
    <>
      <div
        className='relative w-full bg-mauve-2 pb-[30px] gap-[10px] px-3 flex flex-col
        mobile:flex-1 mobile:min-h-[300px]
        desktop:h-[300px] desktop:min-h-[300px]'
      >
        <ChannelCategoriesDropdown />
        <div>Channels</div>
      </div>
    </>
  );
};

export default Guide;
