import { ObjectId } from 'bson';
import { create } from 'zustand';

type Episode = {
  videoId: string;
  title: string;
};

export type ChannelNumber = number;

export type Channel = {
  _id?: ObjectId;
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
  currentChannel: Channel | undefined;
  channelCategories: string[];
};

type Action = {
  setChannels: (channels: Channels) => void;
  setCurrentChannel: (channel: Channel) => void;
  setCategories: (channelCategories: string[]) => void;
};

export const useTvStore = create<State & Action>(set => ({
  channels: {},
  currentChannel: undefined,
  channelCategories: [],
  setChannels: (channels: Channels) => set({ channels }),
  setCurrentChannel: (currentChannel: Channel) => set({ currentChannel }),
  setCategories: (channelCategories: string[]) => set({ channelCategories }),
}));
