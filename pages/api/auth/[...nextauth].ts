import NextAuth from "next-auth"

import GithubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";

export default NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_ID,
            clientSecret: process.env.FACEBOOK_SECRET,
        }),
    ],
    theme: {
        colorScheme: "light",
    },
    debug: true,
    callbacks: {
        async jwt({ token }) {
            token.userRole = "admin"
            console.log(token)
            return token
        },
    },
})