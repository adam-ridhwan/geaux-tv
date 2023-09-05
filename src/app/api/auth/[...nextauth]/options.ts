import { AuthErrorCodes } from '@/constants/authError';
import env from '@/util/env';
import { wait } from '@/util/wait';
import bcrypt from 'bcrypt';
import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

import { createNewUser } from '@/lib/user/createNewUser';
import { getUser } from '@/lib/user/getUser';

const { GOOGLE_ID, GOOGLE_SECRET } = env;

type GoogleProfile = {
  iss: string;
  azp: string;
  aud: string;
  sub: string;
  email: string;
  email_verified: boolean;
  at_hash: string;
  name: string;
  picture: string;
  given_name: string;
  family_name: string;
  locale: string;
  iat: number;
  exp: number;
};

type GoogleAccount = {
  provider: string;
  type: string;
  providerAccountId: string;
  access_token: string;
  expires_at: number;
  scope: string;
  token_type: string;
  id_token: string;
};

export const options: NextAuthOptions = {
  pages: {
    signIn: '/sign-in',
  },
  providers: [
    GoogleProvider({
      clientId: GOOGLE_ID,
      clientSecret: GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: 'Credentials',
      // @ts-ignore huh! this is weird. cant figure out the type for authorize()
      async authorize(credentials: any): Promise<Omit<User, 'password'> | null> {
        if (!credentials?.email || !credentials?.password) return null;

        // check if user exists. (has artificial delay of 1s)
        const [, user] = (await Promise.all([wait(1000), getUser(credentials.email)])) as [void, User | null];
        if (!user) throw new Error(AuthErrorCodes.NO_USER_FOUND);

        /*
         * - Check if user is credentials user
         * - This only checks if the user is created using credentials provider.
         * - If the user is created using oauth provider, this will return error no user found
         */
        if (user.provider !== 'credentials') throw new Error(AuthErrorCodes.NO_USER_FOUND);
        if (!user.password) throw new Error(AuthErrorCodes.NO_PASSWORD_FOUND);

        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
        if (!isPasswordCorrect) throw new Error(AuthErrorCodes.INVALID_PASSWORD);

        // return user details without password
        if (user && isPasswordCorrect) {
          const { password, ...userDetailsWithoutPassword } = user;
          return userDetailsWithoutPassword;
        }
      },
    }),
  ],
  callbacks: {
    // @ts-ignore huh! this is weird. cant figure out the type for signIn()
    async signIn({ account, profile }: { account: GoogleAccount; profile: GoogleProfile }) {
      if (account?.provider === 'google') {
        /*
         * 1) if there is a profile, check if user exists
         * 2) if user does not exist, create new user
         * 3) if user exists, update lastLogin
         */

        if (!profile) return;

        const user = await getUser(profile.email);

        if (!user) {
          const newUser: User = {
            age: 0,
            createdAt: new Date(),
            email: profile.email,
            emailVerified: profile.email_verified,
            favoriteChannels: [],
            gender: '',
            lastLogin: new Date(),
            name: profile.name,
            provider: account.provider,
            updatedAt: new Date(),
          };

          await createNewUser(newUser);
        }

        if (user) {
          // TODO: update last login
        }
      }
      return Promise.resolve(true);
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith('/')) return `${baseUrl}${url}`;
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
};
