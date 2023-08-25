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
  channelNumber: number;
};

export type Channels = {
  [key: string]: Channel[];
};

type State = {
  channels: Channels;
  currentChannel: Channel | undefined;
};

type Action = {
  setChannels: (channels: Channels) => void;
  setCurrentChannel: (channel: Channel) => void;
};

export const useTvStore = create<State & Action>(set => ({
  channels: {},
  currentChannel: undefined,
  setChannels: (channels: Channels) => set({ channels }),
  setCurrentChannel: (currentChannel: Channel) => set({ currentChannel }),
}));
