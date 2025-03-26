import NextAuth from 'next-auth'

export const config = {
  pages: {
    signIn: '/sign-in',
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth(config)