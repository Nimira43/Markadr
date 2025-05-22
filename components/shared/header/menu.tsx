import { Button } from '@/components/ui/button'
import ModeToggle from './mode-toggle'
import Link from 'next/link'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { RiUser3Line } from 'react-icons/ri'
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { IoEllipsisVerticalOutline } from 'react-icons/io5'
import UserButton from './user.button'

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
        <UserButton />
      </nav>
      <nav className='md:hidden'>
        <Sheet>
          <SheetTrigger className='align-middle'>
            <IoEllipsisVerticalOutline />
          </SheetTrigger>
          <SheetContent className='flex flex-col items-start' >
            <SheetTitle>Menu</SheetTitle>
            <ModeToggle />
            <Button asChild variant='outline'>
              <Link href='/cart'>
                <MdOutlineShoppingCart /> Cart
              </Link>
            </Button>
            <UserButton />
            <SheetDescription></SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
   )
}
 
export default Menu