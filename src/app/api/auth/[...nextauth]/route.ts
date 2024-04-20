import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ],
};

// Export the handler function for GET requests
export const GET = NextAuth(authOptions);

// Export the handler function for POST requests
export const POST = NextAuth(authOptions);
