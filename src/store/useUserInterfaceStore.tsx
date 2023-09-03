import { create } from 'zustand';

import { Channel } from '@/store/useTvStore';

type AvatarDropdownState = {
  isAvatarDropdownOpen: boolean;
  setIsAvatarDropdownOpen: (state: boolean) => void;
  openAvatarDropdown: () => void;
  closeAvatarDropdown: () => void;
};

export const useAvatarDropdownStore = create<AvatarDropdownState>(set => ({
  isAvatarDropdownOpen: false,
  setIsAvatarDropdownOpen: (state: boolean) => {
    set({ isAvatarDropdownOpen: state });
    useLogOutToastStore.getState().closeLogOutToast();
  },
  openAvatarDropdown: () => set({ isAvatarDropdownOpen: true }),
  closeAvatarDropdown: () => {
    set({ isAvatarDropdownOpen: false });
    useTranslatePopoverStore.getState().closeTranslatePopover();
  },
}));

type TranslatePopoverState = {
  isTranslatePopoverOpen: boolean;
  setIsTranslatePopoverOpen: (state: boolean) => void;
  openTranslatePopover: () => void;
  closeTranslatePopover: () => void;
};

export const useTranslatePopoverStore = create<TranslatePopoverState>(set => ({
  isTranslatePopoverOpen: false,
  setIsTranslatePopoverOpen: (state: boolean) => set({ isTranslatePopoverOpen: state }),
  openTranslatePopover: () => set({ isTranslatePopoverOpen: true }),
  closeTranslatePopover: () => set({ isTranslatePopoverOpen: false }),
}));

type OptionsPopupState = {
  isOptionsPopupOpen: boolean;
  setIsOptionsPopupOpen: (state: boolean) => void;
  openOptionsPopup: () => void;
  closeOptionsPopup: () => void;
  selectedChannel: Channel | null;
  setSelectedChannel: (channel: Channel) => void;
};

export const useOptionsPopupStore = create<OptionsPopupState>(set => ({
  isOptionsPopupOpen: false,
  setIsOptionsPopupOpen: (state: boolean) => set({ isOptionsPopupOpen: state }),
  openOptionsPopup: () => set({ isOptionsPopupOpen: true }),
  closeOptionsPopup: () => set({ isOptionsPopupOpen: false }),
  selectedChannel: null,
  setSelectedChannel: (channel: Channel) => set({ selectedChannel: channel }),
}));

type LogOutToastState = {
  isLogOutToastOpen: boolean;
  setIsLogOutToastOpen: (state: boolean) => void;
  openLogOutToast: () => void;
  closeLogOutToast: () => void;
};

export const useLogOutToastStore = create<LogOutToastState>(set => ({
  isLogOutToastOpen: false,
  setIsLogOutToastOpen: (state: boolean) => set({ isLogOutToastOpen: state }),
  openLogOutToast: () => set({ isLogOutToastOpen: true }),
  closeLogOutToast: () => set({ isLogOutToastOpen: false }),
}));
