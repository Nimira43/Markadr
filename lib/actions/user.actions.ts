'use server'

import { signInFormSchema } from '../validators'
import { signIn, signOut } from '@/auth'
import { isRedirectError } from 'next/dist/client/components/redirect'

export async function signInWithCredentials(
  prevState: unknown,
  formData: FormData
) {
  
}