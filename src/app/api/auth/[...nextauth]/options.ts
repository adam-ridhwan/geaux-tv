import env from '@/util/env';
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
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'example@example.com' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials: { email?: string; password?: string }) {
        if (credentials.email) {
          const user: User | null = await getUser(credentials.email);

          if (user && (await bcrypt.compare(credentials.password || '', user.password))) {
            const { password, ...userDetailsWithoutPassword } = user;
            return userDetailsWithoutPassword;
          }
        }
        return null;
      },
    }),
  ],
};
