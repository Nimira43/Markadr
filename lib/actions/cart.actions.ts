'use server'

import { cookies } from 'next/headers'
import { CartItem } from '@/types'
import { convertToPlainObject, formatError } from '../utils'
import { auth } from '@/auth'
import { prisma } from '@/db/prisma'
import { cartItemSchema } from '../validators'

export async function addItemToCart(data: CartItem) {
  try {
    const sessionCartId = (await cookies()).get('sessionCartId')?.value

    if (!sessionCartId) throw new Error('Cart session not found.')
    
    const session = await auth()
    const userId = session?.user?.id ? (session.user.id as string) : undefined

    const cart = await getMyCart()
    const item = cartItemSchema.parse(data)

    console.log({
      'Session Cart Id': sessionCartId,
      'User ID': userId,
      'Item Requested': item,
    })

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

export async function getMyCart() {
  const session = await auth()
  const userId = session?.user?.id ? (session.user.id as string) : undefined

  const cart = await prisma.cart.findFirst({
    where: userId ? { userId: userId } : { sessionCartId: sessionCartId },
  })

  if (!cart) return undefined

  return convertToPlainObject({
    ...cart,
    items: cart.item as CartItem[],
    itemsPrice: cart.itemsPrice.toString(),
    totalPrice: cart.totalPrice.toString(),
    shippingPrice: cart.shippingPrice.toString(),
    taxPrice: cart.taxPrice.toString(),
  })
}