'use client'
import { APP_NAME } from '@/lib/constants'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const NotFoundPage = () => {
  return ( 
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <Image 
        src='/images/dragon-logo.png' 
        width={48} 
        height={48} 
        alt={`${APP_NAME} 
        logo`} 
        priority={true} 
      />
      <div className='p-6 w-1/3 rounded-lg shadow-md text-center'>
        <h1 className='text-3xl mb-4 text-[#ff4500]'>Page Not Found</h1>
        <p className='text-[#111]'>We could not find the page you were looking for</p>
        <Button
          className='mt-4 ml-2 uppercase' 
          onClick={() => {
            (window.location.href = '/')
          }}
        >Home</Button>
      </div>
    </div>
   )
}
 
export default NotFoundPage