'use client'

import { Label } from '@/components/ui/label'

const CredentialsSignInForm = () => {
  return (  
    <form >
      <div className='space-y-6'>
        <Label htmlFor='email'>Email</Label>
      </div>
    </form>
  );
}
 
export default CredentialsSignInForm;