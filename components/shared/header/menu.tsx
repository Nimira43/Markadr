import { Button } from '@/components/ui/button'
import ModeToggle from './mode-toggle'
import Link from 'next/link'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { RiUser3Line } from 'react-icons/ri'
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { IoEllipsisVerticalCircleOutline } from 'react-icons/io5'

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
      <nav className='md:hidden'>
        <Sheet>
          <SheetTrigger className='align-middle'>
            <IoEllipsisVerticalCircleOutline />
          </SheetTrigger>
          <SheetContent className='flex flex-col items-start' >
            <SheetTitle>Menu</SheetTitle>
            <ModeToggle />
            <Button asChild>
              <Link href=''>
                <MdOutlineShoppingCart /> Cart
              </Link>
            </Button>
            <SheetDescription></SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
   )
}
 
export default Menu