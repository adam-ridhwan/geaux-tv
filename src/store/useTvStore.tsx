import { create } from 'zustand';

type Episode = {
  videoId: string;
  title: string;
};

type Channel = {
  channelNumber: string;
  channelName: string;
  channelDescription: string;
  episodes: Episode[];
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
