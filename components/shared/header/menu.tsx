import { Button } from '@/components/ui/button'
import ModeToggle from './mode-toggle'
import { Link } from 'lucide-react'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { RiUser3Line } from 'react-icons/ri'

const Menu = () => {
  return ( 
    <div className='flex justify-end gap-3'>
      <nav className='hidden md:flex w-full max-w-xs gap-1'>
        <ModeToggle />
        <Button asChild variant='outline'>
          <Link href='/cart'>
            <MdOutlineShoppingCart /> Cart
          </Link>
        </Button>
        <Button asChild>
          <Link href='/sign-in'>
            <RiUser3Line /> Sign In
          </Link>
        </Button>
      </nav>
    </div>
   )
}
 
export default Menu