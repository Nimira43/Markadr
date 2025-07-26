'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { CartItem } from '@/types'
import { FiPlus } from 'react-icons/fi'
import { useToast } from '@/hooks/use-toast'
import { ToastAction } from '@/components/ui/toast'

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