import NextAuth, { User } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials" 
import { usersTable } from "./database/schema";
import { db } from "./database/db";
import { eq } from "drizzle-orm";
import { compare } from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
session: { 
    strategy: "jwt" ,
},
providers: [CredentialsProvider({
        async authorize(credentials) {
            if(!credentials?.email || !credentials?.password) {
                return null;
            }

            const user = await db
                .select()
                .from(usersTable)
                .where(eq(usersTable.email,credentials.email.toString()))
                .limit(1);

            if(user.length === 0)  return null;
            
            const isPasswordValid = await compare(credentials.password.toString(), user[0].password);

            if(!isPasswordValid) return null;

            return { id: user[0].userId.toString(), name: user[0].fullName, email: user[0].email }  as User;         
     },
 })],




 //When authentication is required (e.g., when trying to access a protected page), NextAuth automatically redirects users to a sign-in page.
  pages: {                        
    signIn: "auth/sign-in"            //the sign-in page
  },




  callbacks: {
    //jwt callback: Modifies JWT token, Adds user id and name to token when user is present, Called when token is created/updated
    async jwt({ token, user }){
      if(user){
        token.id = user.id;
        token.name = user.name;
      }

      return token;
    },



    //session callback: Modifies session object, Syncs session data with token data, Adds id and name to session.user
    async session({ session, token }) {
      //If a Session exist
      if(session.user){
        session.user.id = token.id as string;
        session.user.name = token.name as string;

      }

      return session;
    },
  }
});