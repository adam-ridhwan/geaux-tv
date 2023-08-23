import { create } from 'zustand';

type Episode = {
  videoId: string;
  title: string;
};

export type Channel = {
  channelName: string;
  channelIcon: string;
  channelDescription: string;
  episodes: Episode[];
  channelNumber: string;
};

export type Channels = {
  [key: string]: Channel[];
};

type State = {
  channels: Channels;
};

type Action = {
  setChannels: (channels: Channels) => void;
};

export const useTvStore = create<State & Action>(set => ({
  channels: {},
  setChannels: (channels: Channels) => set({ channels }),
}));
