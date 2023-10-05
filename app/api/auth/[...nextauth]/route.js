import { connectToDB } from "@/lib/database";
import User from "@/models/user";
import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from "bcrypt";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "email" },
                password: { type: "password" },
            },
            async authorize(credentials, req) {
                try {
                    await connectToDB();
                    if (credentials) {
                        const user = await User.findOne({
                            email: credentials.email
                        });
                        if (!user) {
                            throw new Error('User not found');
                        }

                        const storedHashedPassword = user.password;

                        // Compare the provided password with the stored hashed password
                        const passwordMatches = await bcrypt.compare(credentials.password, storedHashedPassword);

                        if (!passwordMatches) {
                            throw new Error('Invalid password');
                        }
                        return { id: user._id.toString(), name: user.username, email: user.email };
                    }


                } catch (error) {
                    return { error: error.message };  
                }
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async session({ session }) {
            const sessionUser = await User.findOne({
                email: session.user.email
            })
            session.user.id = sessionUser._id.toString();
            return session;
        },

        async signIn({ profile }) {
            try {
                await connectToDB();
                const userExists = await User.findOne({
                    email: profile.email
                });

                if (!userExists) {
                    await User.create({
                        email: profile.email,
                        username: profile.name,
                        image: profile.picture
                    })
                }

                return true;
            } catch (error) {
                return false;
            }
        }
    }
});

export { handler as GET, handler as POST };
