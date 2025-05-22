import Link from 'next/link'
import { auth } from '@/auth'
import { signOutUser } from '@/lib/actions/user.actions'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { RiUser3Line } from 'react-icons/ri'

const UserButton = async () => {
  const session = await auth()

  if (!session) {
    return (
      <Button asChild>
        <Link href='/sign-in'>
          <RiUser3Line /> Sign In
        </Link>
      </Button>
    )
  }

  const firstInitial = session.user?.name?.charAt(0).toUpperCase() ?? ''

  return ( 
    <>
      
    </>
   )
}
 
export default UserButton