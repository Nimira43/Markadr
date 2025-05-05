'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { signInDefaultValues } from '@/lib/constants'
import Link from 'next/link'
import { signInWithCredentials } from '@/lib/actions/user.actions'
import { useFormStatus } from 'react-dom'
import { useActionState } from 'react'

const CredentialsSignInForm = () => {
  return (  
    <form >
      <div className='space-y-6'>
        
        <div>
          <Label htmlFor='email'>Email</Label>
          <Input
            id='email'  
            name='email'  
            type='email'
            required
            autoComplete='email'  
            defaultValue={signInDefaultValues.email}
          />
        </div>
        
        <div>
          <Label htmlFor='password'>Password</Label>
          <Input
            id='password'  
            name='password'  
            type='password'
            required
            autoComplete='password'  
            defaultValue={signInDefaultValues.password}
          />
        </div>

        <div>
          <Button
            className='w-full uppercase'
            variant='default'
          >
            Sign Up
          </Button>
        </div>
        <div className="text-sm text-center text-muted-foreground">
        Dont&apos;t have an account? {' '}
          <Link
            href='/signup'
            target='_self'
            className='link'
          >
            Sign Up
          </Link>
        </div>
      </div>     
    </form>
  );
}
 
export default CredentialsSignInForm;