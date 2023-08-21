import * as Tooltip from '@radix-ui/react-tooltip';

const AvatarTooltip = () => {
  return (
    <>
      <Tooltip.Provider delayDuration={300} skipDelayDuration={0} disableHoverableContent>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity' />
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              className='data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade
              shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px]
              select-none bg-primary-darkest rounded-dropdown-radius px-[15px] py-[10px] text-fs-300 leading-none
              will-change-[transform,opacity]'
              sideOffset={5}
              align='end'
            >
              <div className='flex flex-col p-2 gap-2.5'>
                <span className='text-primary-lightest'>Adam Ridhwan Amir Hamzah</span>
                <span className='text-primary-lighter'>adamridhwan.1@gmail.com</span>
              </div>
              <Tooltip.Arrow className='fill-slate-1' height={10} width={15} />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    </>
  );
};

export default AvatarTooltip;
