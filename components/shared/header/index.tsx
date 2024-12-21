import { MdOutlineShoppingCart } from 'react-icons/md'
import { RiUser3Line } from 'react-icons/ri'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { APP_NAME } from '@/lib/constants'

const Header = () => {
  return ( 
    <header className='w-full border-b'>
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href='/' className='flex-start'>
            <Image 
              src='/images/dragon-logo.png' 
              alt={`${APP_NAME} logo`} 
              height={48} 
              width={48}
              priority={true}
            />
            <span className='hidden lg:block font-bold text-2xl ml-3 app-name'>
              {APP_NAME}
            </span>
          </Link>
        </div>
        <div className="space-x-2">
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
        </div>
      </div>
    </header>
   )
}
 
export default Header