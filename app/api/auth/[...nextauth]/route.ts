import { prisma } from "@/lib/prismadb";
import { compare } from "bcrypt";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password required");
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user || !user.hashedPassword) {
          throw new Error("Invalid email or password");
        }

        const isValidPassword = await compare(
          credentials.password,
          user.hashedPassword,
        );
        if (!isValidPassword) {
          throw new Error("Invalid email or password");
        }

        return user;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
