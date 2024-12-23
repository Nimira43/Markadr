'use client'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { 
  DropdownMenu, 
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuContent, 
  DropdownMenuCheckboxItem
} from '@/components/ui/dropdown-menu'
import { useTheme } from 'next-themes'
import { FiSun, FiMoon } from 'react-icons/fi'
import { LuSunMoon } from 'react-icons/lu'

const ModeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return ( 
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='outline' className='focus-visible:ring-0 focus-visible:ring-offset-0'>
            { 
              theme === 'system' ? (
                <LuSunMoon />
              ) : theme === 'dark' ? (
                <FiMoon />
              ) : (
                <FiSun />
              )
            }
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Appearance</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem 
            checked={ theme === 'system' } 
            onClick={ () => setTheme('system')}
          >
            System
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem 
            checked={ theme === 'dark' } 
            onClick={ () => setTheme('dark')}
          >
            Dark
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem 
            checked={ theme === 'light' } 
            onClick={ () => setTheme('light')}
          >
            Light
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
   )
}
 
export default ModeToggle