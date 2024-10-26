import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import connectMongo from '../../../lib/mongodb';
import User from '../../../models/User';

connectMongo();

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      authorize: async (credentials) => {
        const user = await User.findOne({ email: credentials.email });
        if (user && user.password === credentials.password) {
          return user;
        }
        return null;
      },
    }),
  ],
  session: {
    jwt: true,
  },
  callbacks: {
    async session({ session, token }) {
      session.userId = token.sub;
      return session;
    },
  },
});
