'use client';

import { FC, useEffect } from 'react';
import chalk from 'chalk';

import { Channels, useTvStore } from '@/store/useTvStore';

type TvDataConsumerProps = {
  CHANNELS: Channels;
  CHANNEL_CATEGORIES: string[];
};

const TvDataConsumer: FC<TvDataConsumerProps> = ({ CHANNELS, CHANNEL_CATEGORIES }) => {
  const [channels, setChannels, setCategories] = useTvStore(state => [
    state.channels,
    state.setChannels,
    state.setCategories,
  ]);

  useEffect(() => {
    // Set channels in global store
    if (CHANNELS && CHANNELS !== channels) {
      setChannels(CHANNELS);
      setCategories(CHANNEL_CATEGORIES);
    }
  }, [CHANNELS, CHANNEL_CATEGORIES, channels, setCategories, setChannels]);

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_NODE_ENV === 'development') {
      console.log(
        chalk.bgCyan.black(`Looks like you're on development mode.\n`) +
          chalk.bgBlue.black(`Here's a video for you to watch while you're developing.`)
      );
    }
  }, []);

  return null;
};

export default TvDataConsumer;
