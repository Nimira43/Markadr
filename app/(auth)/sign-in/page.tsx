import { Card, CardHeader } from '@/components/ui/card';
import { Metadata } from 'next'
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sign In'
}

const SignInPage = () => {
  return ( 
    <div className='w-full max-w-md mx-auto'>
      <Card>
        <CardHeader className='space-y-4'>
          <Link href='/' className='flex-center'>
            <Image
              src='/images/logo1.png'
              width={100}
              height={100}
              alt={'Markaðr logo'}
            />
          </Link>
        </CardHeader>
      </Card>
    </div>
   );
}
 
export default SignInPage;