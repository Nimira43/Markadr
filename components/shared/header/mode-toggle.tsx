'use Client'
import { Button } from '@/components/ui/button'
import { 
  DropdownMenu, 
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuContent, 
} from '@/components/ui/dropdown-menu'
import { useTheme } from 'next-themes'
import { FiSun, FiMoon } from 'react-icons/fi'
import { LuSunMoon } from 'react-icons/lu'

const ModeToggle = () => {
  const { theme, setTheme } = useTheme()

  return ( 
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='outline'>
            <FiSun />
          </Button>
        </DropdownMenuTrigger>
      </DropdownMenu>
    </>
   )
}
 
export default ModeToggle