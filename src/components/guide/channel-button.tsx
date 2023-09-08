'use client';

import { ButtonHTMLAttributes, forwardRef, ForwardRefRenderFunction, ReactNode } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { cn } from '@/utils/cn';
import useWindowSize, { DESKTOP, TABLET } from '@/utils/useWindowSize';
import isEqual from 'lodash/isEqual';

import { Channel, useTvStore } from '@/store/useTvStore';

type ChannelButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  isActive?: boolean;
  children: ReactNode;
  colorIndex?: number;
  channel: Channel;
};

const ChannelButton: ForwardRefRenderFunction<HTMLButtonElement, ChannelButtonProps> = (
  { className, isActive, children, colorIndex, channel, ...props },
  ref
) => {
  const router = useRouter();
  const params = useParams();
  const currentDevice = useWindowSize();

  return (
    <button
      ref={ref}
      className={cn(
        `flex h-[72px] w-full flex-row items-center gap-4 border-t border-t-primary-dark px-3`,
        className,
        { 'ring-4 ring-inset ring-accent-lightest': isEqual(channel.channelNumber, Number(params.channelNumber)) },
        { 'aspect-video min-h-[150px] rounded-weak border-none': currentDevice === TABLET },
        { 'h-full min-w-[180px] max-w-[180px] flex-col rounded-weak border-none py-5': currentDevice === DESKTOP }
      )}
      {...props}
      onClick={() => router.replace(`/tv/${channel.channelNumber}`)}
    >
      {children}
    </button>
  );
};

export default forwardRef(ChannelButton);
