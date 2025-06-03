'use server'

import { signInFormSchema, signUpFormSchema } from '../validators'
import { signIn, signOut } from '@/auth'
import { isRedirectError } from 'next/dist/client/components/redirect-error'
import { hashSync } from 'bcrypt-ts-edge'
import { prisma } from '@/db/prisma' 

export async function signInWithCredentials(
  prevState: unknown,
  formData: FormData
) {
  try {
    const user = signInFormSchema.parse({
      email: formData.get('email'),
      password: formData.get('password')
    }) 
    await signIn('credentials', user)
    return { success: true, message: 'Signed in successfully'}
  } catch (error) {
    if (isRedirectError(error)) {
      throw error
    }
    return { success: false, message: 'Invalid email or password'}
  }
}

export async function signOutUser() {
  await signOut()
}

export async function signUpUser(prevState: unknown, formData: FormData) {

}