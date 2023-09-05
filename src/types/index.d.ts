declare module 'server-only';

type WithId<T> = T & { _id: any };

type Provider = 'credentials' | 'google';

type User = {
  _id?: string;
  provider: Provider;
  age?: number;
  createdAt: Date;
  email: string;
  emailVerified: boolean;
  favoriteChannels?: string[];
  gender?: string;
  lastLogin: Date;
  name: string;
  phone?: string;
  photoUrl?: string;
  updatedAt: Date;
  password?: string;
};
