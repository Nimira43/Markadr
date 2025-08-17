'use server'

import { cookies } from 'next/headers'
import { CartItem } from '@/types'
import { formatError } from '../utils'
import { auth } from '@/auth'

export async function addItemToCart(data: CartItem) {
  try {
    const sessionCartId = (await cookies()).get('sessionCartId')?.value

    if (!sessionCartId) throw new Error('Cart session not found.')
    
    const session = await auth()


    return {
      success: true,
      message: 'Item added to Cart.'
    }
  } catch (error) {
    return {
      success: false,
      message: formatError(error)
    }
  }
}
