import { Card, CardHeader } from '@/components/ui/card';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign In'
}

const SignInPage = () => {
  return ( 
    <div className='w-full max-w-md mx-auto'>
      <Card>
        <CardHeader className='space-y-4'>
          
        </CardHeader>
      </Card>
    </div>
   );
}
 
export default SignInPage;