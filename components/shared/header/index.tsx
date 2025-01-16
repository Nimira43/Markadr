import { MdOutlineShoppingCart } from 'react-icons/md'
import { RiUser3Line } from 'react-icons/ri'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { APP_NAME } from '@/lib/constants'
import ModeToggle from './mode-toggle'

const Header = () => {
  return ( 
    <header className='w-full border-b'>
      <div className='wrapper flex-between'>
        <div className='flex-start'>
          <Link href='/' className='flex-start'>
            <Image 
              src='/images/logo1.png' 
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
        <div className='space-x-2'>
          
        </div>
      </div>
    </header>
   )
}
 
export default Header