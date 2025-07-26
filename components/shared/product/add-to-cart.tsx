'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { CartItem } from '@/types'

const AddToCart = ({ item } : {
  item: CartItem 
}) => {
  return ( 
    <>
      Add To Cart
    </>
   )
}
 
export default AddToCart