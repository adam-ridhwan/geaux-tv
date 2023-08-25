import { create } from 'zustand';

import { Channel } from '@/store/useTvStore';

type AvatarDropdownState = {
  isAvatarDropdownOpen: boolean;
  setIsAvatarDropdownOpen: (state: boolean) => void;
  closeAvatarDropdown: () => void;
};

export const useAvatarDropdownStore = create<AvatarDropdownState>(set => ({
  isAvatarDropdownOpen: false,
  setIsAvatarDropdownOpen: (state: boolean) => set({ isAvatarDropdownOpen: state }),
  closeAvatarDropdown: () => {
    set({ isAvatarDropdownOpen: false });
    useTranslatePopoverStore.getState().closeTranslatePopover();
  },
}));

type TranslatePopoverState = {
  isTranslatePopoverOpen: boolean;
  setIsTranslatePopoverOpen: (state: boolean) => void;
  closeTranslatePopover: () => void;
};

export const useTranslatePopoverStore = create<TranslatePopoverState>(set => ({
  isTranslatePopoverOpen: false,
  setIsTranslatePopoverOpen: (state: boolean) => set({ isTranslatePopoverOpen: state }),
  closeTranslatePopover: () => set({ isTranslatePopoverOpen: false }),
}));

type OptionsPopupState = {
  isOptionsPopupOpen: boolean;
  setIsOptionsPopupOpen: (state: boolean) => void;
  closeOptionsPopup: () => void;
  selectedChannel: Channel | null;
  setSelectedChannel: (channel: Channel) => void;
};

export const useOptionsPopupStore = create<OptionsPopupState>(set => ({
  isOptionsPopupOpen: false,
  setIsOptionsPopupOpen: (state: boolean) => set({ isOptionsPopupOpen: state }),
  closeOptionsPopup: () => set({ isOptionsPopupOpen: false }),
  selectedChannel: null,
  setSelectedChannel: (channel: Channel) => set({ selectedChannel: channel }),
}));

type LoadingOverlayState = {
  isLoadingOverlayOpen: boolean;
  setIsLoadingOverlayOpen: (state: boolean) => void;
};
