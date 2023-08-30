import { AuthErrorCodes } from '@/util/constants/authError';
import env from '@/util/env';
import bcrypt from 'bcrypt';
import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

import { getUser } from '@/lib/user/getUser';

const { GOOGLE_ID, GOOGLE_SECRET } = env;

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

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
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'example@example.com' },
        password: { label: 'Password', type: 'password' },
      },
      // @ts-ignore
      async authorize(credentials: { email?: string; password?: string }) {
        if (!credentials.email || !credentials.password) return null;

        const [, user] = (await Promise.all([sleep(1000), getUser(credentials.email)])) as [void, User | null];

        if (!user) throw new Error(AuthErrorCodes.NO_USER_FOUND);

        const isPasswordCorrect = await bcrypt.compare(credentials.password || '', user.password);

        if (!isPasswordCorrect) throw new Error(AuthErrorCodes.INVALID_PASSWORD);

        if (user && isPasswordCorrect) {
          const { password, ...userDetailsWithoutPassword } = user;
          return userDetailsWithoutPassword;
        }
      },
    }),
  ],
};
