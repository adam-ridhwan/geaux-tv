'use client';

import { FC } from 'react';

import { Channels, useTvStore } from '@/store/useTvStore';

type TvDataConsumerProps = {
  CHANNELS: Channels;
  CHANNEL_CATEGORIES: string[];
};

const TvDataConsumer: FC<TvDataConsumerProps> = ({ CHANNELS, CHANNEL_CATEGORIES }) => {
  const [channels, setChannels, setCurrentChannel, setCategories] = useTvStore(state => [
    state.channels,
    state.setChannels,
    state.setCurrentChannel,
    state.setCategories,
  ]);

  // Set channels in global store
  if (CHANNELS && CHANNELS !== channels) {
    setChannels(CHANNELS);
    setCurrentChannel(CHANNELS[CHANNEL_CATEGORIES[1]][0]); // change this to last watched channel-button in the future
    setCategories(CHANNEL_CATEGORIES);
  }

  return null;
};

export default TvDataConsumer;
