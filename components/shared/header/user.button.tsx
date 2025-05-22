import Link from 'next/link'
import { auth } from '@/auth'
import { signOutUser } from '@/lib/actions/user.actions'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

const UserButton = () => {
  return ( 
    <>
      User
    </>
   )
}
 
export default UserButton