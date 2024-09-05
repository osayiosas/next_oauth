import NextAuth from "next-auth";

import GoogleProvider from "next-auth/providers/google";

import GithubProvider from "next-auth/providers/github";



export const {

    handlers: {
        GET, POST
    },

    auth,
    signIn,
    signOut,
    
} = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,

            authorization: {
                params: {
                    access_type: "offline",
                    prompt: "consent",
                },
            },
        }),


    ]
})