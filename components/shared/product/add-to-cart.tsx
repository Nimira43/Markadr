'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { CartItem } from '@/types'
import { FiPlus } from 'react-icons/fi'
import { useToast } from '@/hooks/use-toast'
import { ToastAction } from '@/components/ui/toast'
import { addItemToCart } from '@/lib/actions/cart.actions'

const AddToCart = ({ item } : {
  item: CartItem 
}) => {
  const router = useRouter()
  const { toast } = useToast() 

  const handleAddToCart = async () => {
    const res = await addItemToCart(item)
    if (!res.success) {
      toast({
        variant: 'destructive',
        description: 'res.message'
      })
      return
    }
  }

  return ( 
    <Button
      className='w-full uppercase font-medium'
      type='button'
      onClick={handleAddToCart}
    >
      Add To Cart
    </Button>
   )
}
 
export default AddToCart