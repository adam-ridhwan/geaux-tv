import { ObjectId } from 'bson';
import { create } from 'zustand';

type Episode = {
  videoId: string;
  title: string;
};

export type ChannelNumber = number;

export type Channel = {
  _id?: ObjectId;
  ageRating?: string;
  channelName: string;
  channelIcon: string;
  channelDescription: string;
  episodes: Episode[];
  channelNumber: ChannelNumber;
};

export type Channels = {
  [key: string]: Channel[];
};

type State = {
  channels: Channels;
  channelCategories: string[];
};

type Action = {
  setChannels: (channels: Channels) => void;
  setCategories: (channelCategories: string[]) => void;
};

export const useTvStore = create<State & Action>(set => ({
  channels: {},
  channelCategories: [],
  setChannels: (channels: Channels) => set({ channels }),
  setCategories: (channelCategories: string[]) => set({ channelCategories }),
}));
