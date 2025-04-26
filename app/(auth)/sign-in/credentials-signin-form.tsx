'use client'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { signInDefaultValues } from '@/lib/constants'

const CredentialsSignInForm = () => {
  return (  
    <form >
      <div className='space-y-6'>
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
    </form>
  );
}
 
export default CredentialsSignInForm;