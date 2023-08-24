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
  currentChannel: Channel;
};

type Action = {
  setChannels: (channels: Channels) => void;
  setCurrentChannel: (channel: Channel) => void;
};

const initialState: Channel = {
  channelName: 'The Dive',
  channelIcon: 'https://geaux-channel-icons.nyc3.digitaloceanspaces.com/the-dive.png',
  channelDescription: 'Our Global music video channel featuring the Geaux Music Live countdown show',
  episodes: [
    {
      title: 'Geaux Music Live',
      videoId:
        'https://play.streamingvideoprovider.com/popplayer.php?it=4k5rhewj81a8&is_link=1&w=1080&h=720&pause=0&title=GeauxKids&skin=3&repeat=&brandNW=1&start_volume=50&bg_gradient1=%23ffffff&bg_gradient2=%23e9e9e9&fullscreen=1&fs_mode=2&skinAlpha=50&colorBase=%231277a3&colorIcon=%23ffffff&colorHighlight=%237f54f8&direct=false&no_ctrl=1&auto_hide=1&viewers_limit=0&cc_position=bottom&cc_positionOffset=70&cc_multiplier=0.03&cc_textColor=%23ffffff&cc_textOutlineColor=%23ffffff&cc_bkgColor=%23000000&cc_bkgAlpha=0.1&image=https%3A%2F%2Fmember.streamingvideoprovider.com%2Fpanel%2Fserver%2Fclip%3Fa%3DGenerateThumbnail%26clip_id%3D3973769%26size%3Dlarge&mainBg_Color=%23ffffff&aspect_ratio=16%3A9&play_button=0&play_button_style=static&sleek_player=0&stretch=&auto_play=1&auto_play_type=unMute&floating_player=none',
    },
  ],
  channelNumber: 465,
};

export const useTvStore = create<State & Action>(set => ({
  channels: {},
  currentChannel: initialState,
  setChannels: (channels: Channels) => set({ channels }),
  setCurrentChannel: (currentChannel: Channel) => set({ currentChannel }),
}));
