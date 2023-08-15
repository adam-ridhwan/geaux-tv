import * as Tooltip from '@radix-ui/react-tooltip';

export default function NameEmailTooltip() {
  return (
    <>
      <Tooltip.Provider delayDuration={0}>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity' />
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              className='data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade
              data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade
              data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade
              data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade
              text-white select-none rounded-md bg-slate-3 px-[15px] py-[10px] text-[15px] leading-none
              shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px]
              will-change-[transform,opacity] max-w-[200px]'
              sideOffset={5}
              align='end'
            >
              Adam Ridhwan Amir Hamzah
              <Tooltip.Arrow className='fill-slate-3' height={10} width={15} />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    </>
  );
}
