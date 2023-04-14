import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import db from "@/utils/db";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: "asdfghjkl",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        await db.connect();
        const user = await User.findOne({
          email: credentials.email,
        });
        await db.disconnect();
        if (user && credentials.password === user.password) {
          return {
            _id: user._id,
            name: user.name,
            email: user.email,
            image: "f",
            role: user.role,
          };
        }
        throw new Error("Invalid Email and password");
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user?._id) token._id = user._id;
      if (user?.role) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      if (token?.role === "admin") {
        session.user = token;
        return session;
      }
      return null;
    },
  },
});
