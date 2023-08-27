import { devtools } from 'zustand/middleware';

export const logger = config => (set, get, api) =>
  config(
    args => {
      if (process.env.NODE_ENV === 'production') {
        set(args);
        return;
      }
      console.log('  applying', args);
      set(args);
      console.log('  new state', get());
    },
    get,
    api
  );

export const middleware = f => logger(devtools(f));
