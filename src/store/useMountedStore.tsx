import { create } from 'zustand';

import { middleware } from '@/store/middleware';

type state = {
  isMounted: boolean;
};

type actions = {
  setIsMounted: (state: boolean) => void;
};

type SetFunction = (
  partial: Partial<state> | ((state: state) => Partial<state>),
  replace?: boolean,
  actionName?: string
) => void;

export const useMountedStore = create<state & actions>()(
  middleware((set: SetFunction) => ({
    isMounted: false,
    setIsMounted: (state: boolean) => set({ isMounted: state }, false, 'setIsMounted'),
  }))
);
