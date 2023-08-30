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
        GithubProvider({
            clientId: process.env.clientIdG as string
            ,clientSecret: process.env.cientSceretG as string
        }),
        CredentialProvider({
            name: "credentials",
            credentials:{
                email: {label: "Email", type: "text" , placeholder: "ray" },
                password: {label: "Password", type: "password" , placeholder: "password" }
            },

            async authorize(credentials)  {
                const User = {id:1, email: "a@gmail.com", name: "Abhi"}
                return User as any
            },
        }),
        
    ],


    
    
    secret: process.env.NEXTAUTH_SECRET,
    
}
