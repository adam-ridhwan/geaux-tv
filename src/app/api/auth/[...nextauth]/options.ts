import { AuthErrorCodes } from '@/constants/authError';
import env from '@/util/env';
import { wait } from '@/util/wait';
import bcrypt from 'bcrypt';
import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

import { getUser } from '@/lib/user/getUser';

const { GOOGLE_ID, GOOGLE_SECRET } = env;

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
        // check if credentials exists
        if (!credentials?.email || !credentials?.password) return null;

        // check if user exists
        const [, user] = (await Promise.all([wait(1000), getUser(credentials.email)])) as [void, User | null];
        if (!user) throw new Error(AuthErrorCodes.NO_USER_FOUND);

        // check if password is correct
        const isPasswordCorrect = await bcrypt.compare(credentials.password || '', user.password);
        if (!isPasswordCorrect) throw new Error(AuthErrorCodes.INVALID_PASSWORD);

        // return user details without password
        if (user && isPasswordCorrect) {
          const { password, ...userDetailsWithoutPassword } = user;
          return user;
        }

        return null;
      },
    }),
  ],
};
