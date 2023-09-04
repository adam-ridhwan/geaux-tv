'use server';

import 'server-only';

import { cache } from 'react';

import { Channel, ChannelNumber } from '@/store/useTvStore';
import { connectToDatabase } from '@/lib/connectToDatabase';

export const getChannel = cache(async (channelNumber: ChannelNumber): Promise<Channel | null> => {
  try {
    const { channelsCollection } = await connectToDatabase();

    // FIX: not sure why this is not working
    // const channel = await channelsCollection.findOne({ number: channelNumber }, { projection: { _id: 0 } });

    const channels = await channelsCollection.findOne();

    for (let category in channels) {
      const categoryChannels = channels[category];
      if (Array.isArray(categoryChannels)) {
        for (let channel of categoryChannels) {
          if (channel.channelNumber === channelNumber) {
            return channel;
          }
        }
      }
    }
    return null;
  } catch (error) {
    console.error('Error getting channel:', error);
    throw new Error('Error occurred while fetching channel');
  }
});
