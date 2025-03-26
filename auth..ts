import NextAuth from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'

export const config = {
  pages: {
    signIn: '/sign-in',
    error: '/sign-in',
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
    
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth(config)