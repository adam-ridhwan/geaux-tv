import { create } from 'zustand';

import { middleware } from '@/store/middleware';

type state = {
  isHydrated: boolean;
};

type actions = {
  setIsHydrated: (state: boolean) => void;
};

type SetFunction = (
  partial: Partial<state> | ((state: state) => Partial<state>),
  replace?: boolean,
  actionName?: string
) => void;

export const useHydrationStore = create<state & actions>()(
  middleware((set: SetFunction) => ({
    isHydrated: false,
    setIsHydrated: (state: boolean) => set({ isHydrated: state }, false, 'setIsHydrated'),
  }))
);
