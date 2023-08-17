import { create } from 'zustand';

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
