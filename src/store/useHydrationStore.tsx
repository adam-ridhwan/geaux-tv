import { create } from 'zustand';

type state = {
  isHydrated: boolean;
};

type actions = {
  setIsHydrated: (state: boolean) => void;
};

export const useHydrationStore = create<state & actions>(set => ({
  isHydrated: false,
  setIsHydrated: (state: boolean) => set({ isHydrated: state }),
}));
