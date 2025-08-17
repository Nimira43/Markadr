'use server'

import { cookies } from 'next/headers'
import { CartItem } from '@/types'
import { formatError } from '../utils'

export async function addItemToCart(data: CartItem) {
  try {
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
