'use server'

import { cookies } from 'next/headers'
import { CartItem } from '@/types'

export async function addItemToCart(data: CartItem) {
  try {
    
  } catch (error) {
    
  }
  
  
  return {
    success: true,
    message: 'Item added to Cart.'
  }
}
