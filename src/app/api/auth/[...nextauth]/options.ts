import env from '@/util/env';
import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

export const options: NextAuthOptions = {
  pages: {
    signIn: '/sign-in',
  },
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_ID,
      clientSecret: env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'example@example.com' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        /* this is where you need to retrieve user data
         * to verify with credentials */
        const user = { id: 1, email: 'adamridhwan@hotmail.com', password: '123' };

        if (credentials?.email === user.email && credentials?.password === user.password) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
};
