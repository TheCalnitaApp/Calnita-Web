import axios from "axios";
import { error } from "console";
import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { toast } from "react-toastify";
import { brandSignInMutation } from "./Functions/structures";

interface tokenProps {
  token: {
    user: {
      brandLogin: any;
    };
  };
}

export const options: NextAuthOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "email" },
        password: { label: "Password" },
      },

      async authorize(credentials) {
        const { email, password } = credentials as any;
        
        const res = await axios.post("https://calnita-api-gateway.onrender.com/auth", 
         {
          query: brandSignInMutation,
          variables: {
            email: email,
            password: password
          }
         } ,
        )
        
       
        const  {data:user}  = await res.data;
          console.log(user)
        // If no error and we have user data, return i
        if (user.brandEmailSignIn) {
          console.log(user.brandEmailSignIn);
          console.log("data gotten successfully");
          
          return user.brandEmailSignIn;
        } else if (user && user.errors){ 
          return Promise.reject(user.errors.message); 
        } else  {
          console.log("error my gee")
          return null
        }
        // Return null if user data could not be retrieved
      },
    }),
  ],

  pages: {
    signIn: "/",
  },
  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async jwt({ token, user,trigger, session }) {
      if(trigger === "update"  && session.user) {
        token.user = session.user
      }
     
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      const tokenData = token.user;
      session.user = tokenData;
      return session;
    },
  },
};