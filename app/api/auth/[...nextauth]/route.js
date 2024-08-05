import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectToDB } from "@utils/database";
import User from "@models/user";


const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      try {
        const sessionUser = await User.findOne({ email: session.user.email });
        if (sessionUser) {
          session.user.id = sessionUser._id.toString();
        }
      } catch (error) {
        console.error("Error retrieving session user:", error.message);
      }
      return session;
    },
    async signIn({ profile }) {
      try {
        await connectToDB();
        const existingUser = await User.findOne({ email: profile.email });
        if (!existingUser) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture,
          });
        }
        return true;
      } catch (error) {
        console.error("Error in signIn callback:", error.message);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
