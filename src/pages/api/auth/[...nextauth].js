import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import GitHubProvider from 'next-auth/providers/github';
import TwitterProvider from 'next-auth/providers/twitter';
import LinkedInProvider from 'next-auth/providers/linkedin';
import AppleProvider from 'next-auth/providers/apple';
import DiscordProvider from 'next-auth/providers/discord'; 
 


export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'text', placeholder: 'email@site.com' },
        password: { type: 'password' }, // Removed the label, as it's not needed here
      },
      async authorize(credentials) {
        try { 
          const res = await fetch("https://backend-yip.cyclic.app/login", {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: {
              'Content-Type': 'application/json',
            },
          });
          let data = await res.json();
          // Check if the authentication was successful
          if (!res.ok || !data) {
            throw new Error(data.message); // Throw an error on failed login
          } 
           return data;
        } catch (error) {
          throw new Error(error.message);
        }
      },
    }),
    GoogleProvider({
      clientId: '658610802573-0sr6lgevgmutajr5mrgq6cfkicmfjqoa.apps.googleusercontent.com',
      clientSecret: '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',
      redirectUri: 'http://localhost:3000/api/auth/callback/google', 
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
    }),
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
    }),
    AppleProvider({
      clientId: process.env.APPLE_CLIENT_ID,
      clientSecret: {
        appleId: process.env.APPLE_ID,
        teamId: process.env.APPLE_TEAM_ID,
        privateKey: process.env.APPLE_PRIVATE_KEY,
        keyId: process.env.APPLE_KEY_ID,
      },
    }),
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET
    }) 
  ],
  session: { jwt: true },
  callbacks: { 
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token, user }) {
      session.accessToken = token.accessToken;
      return session;
    },
    async onError(error, context) {
      console.error('Authentication error:', error);
      return null;
    },
 
    async credentialsError(error, context) {
      console.error('Credentials authentication error:', error);
      return null;
    },
  },
});
  





// muhammadarshad@0123