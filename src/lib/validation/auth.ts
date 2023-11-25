import { NextAuthOptions } from 'next-auth'

import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'
import CredentialProvider from 'next-auth/providers/credentials'





function getGoogleCredentials() {
    const clientId = process.env.GOOGLE_CLIENT_ID
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET

    if (!clientId || clientId.length === 0) {
        throw new Error('Missing GOOGLE_CLIENT_ID')
    }

    if (!clientSecret || clientSecret.length === 0) {
        throw new Error('Missing GOOGLE_CLIENT_SECRET')
    }

    return { clientId, clientSecret }
}

export const authOptions: NextAuthOptions = {



    providers: [
        GoogleProvider({
            clientId: getGoogleCredentials().clientId,
            clientSecret: getGoogleCredentials().clientSecret,
        }),
        // GithubProvider({
        //     clientId: process.env.clientIdG as string
        //     ,clientSecret: process.env.cientSceretG as string
        // }),
        // CredentialProvider({
        //     name: "credentials",
        //     credentials:{

        //         name: {label: "Name", type: "text" , placeholder: "Abhijeet Ray" },
        //         email: {label: "Email", type: "text" , placeholder: "ray@gmail.com" },
        //         password: {label: "Password", type: "password" , placeholder: "password" }
        //     },

        //     async authorize(credentials)  {
        //         const User = {id:1, email: credentials?.email, name: credentials?.name}
        //         return User as any
        //     },
        // }),
        
    ],


    
    
    secret: process.env.NEXTAUTH_SECRET,
    
}
