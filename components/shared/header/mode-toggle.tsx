'use client'
import { useState, useEffect } from 'react'
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
          <Button variant='outline'>
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
      </DropdownMenu>
    </>
   )
}
 
export default ModeToggle