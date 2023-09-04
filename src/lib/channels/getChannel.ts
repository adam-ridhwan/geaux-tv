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

    const channels = await channelsCollection.findOne({}, { projection: { _id: 0 } });

    /*
     * Set the first channel to the first channel in the list
     * TODO: Set the first channel to the first channel in 'last watched' history
     */
    for (let category in channels) {
      for (let channel of channels[category]) {
        if (channel.channelNumber === 465) {
          return channel;
        }
      }
    }
    return null;
  } catch (error) {
    console.error('Error getting channel:', error);
    throw new Error('Error occurred while fetching channel');
  }
});
