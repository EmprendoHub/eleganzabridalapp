import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import dbConnect from '@/lib/db';
import User from '@/models/User';
import bcrypt from 'bcrypt';
import { signJwtToken } from '@/lib/jwt';
import { Account, AuthUser } from 'next-auth';

export const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      id: 'credentials',
      name: 'credentials',
      type: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
          placeholder: 'Enter your email',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: ' Enter your password',
        },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials;

        await dbConnect();
        const user = await User.findOne({ email });

        if (!user) {
          throw new Error('Invalid input');
        }
        const compraPasses = bcrypt.compare(password, user.password);

        if (!compraPasses) {
          throw new Error('Invalid Input');
        } else {
          const { password, ...currentUser } = user._doc;
          const accessToken = signJwtToken(currentUser, { expiresIn: '6d' });

          return {
            ...currentUser,
            accessToken,
          };
        }
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider == 'credentials') {
        return true;
      }
      if (account?.provider == 'google') {
        await dbConnect();
        try {
          const existingUser = await User.findOne({ email: user.email });
          if (!existingUser) {
            const newUser = new User({
              email: user.email,
              username: user.name,
            });

            await newUser.save();
            return true;
          }
          return true;
        } catch (error) {
          console.log('error saving google user', error);
          return false;
        }
      }
    },
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token._id = user._id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user._id = token._id;
        session.user.accessToken = token.accessToken;
      }

      return session;
    },
  },
};
