'use client'
import { useState } from 'react'

import { useUserStore } from '@/entities/user'
import NavHeader from './NavHeader'
import NavItems from './NavItems'
import { navItems } from '@/shared/constants'

function Navbar() {
  const user = useUserStore(state => state.user)

  const [menuState, setMenuState] = useState<{
    main: string | null
    sub: string | null
  }>({ main: null, sub: null })

  const toggleMainMenu = (label: string) => {
    setMenuState(prev => ({
      main: prev.main === label ? null : label,
      sub: null
    }))
  }
  const toggleSubMenu = (label: string) => {
    setMenuState(prev => ({
      ...prev,
      sub: prev.sub === label ? null : label
    }))
  }
  return (
    <nav
      aria-label="Primary navigation"
      className="flex flex-col py-4 px-2 cursor-pointer border-r-1 h-screen">
      <NavHeader user={user} />
      <ul>
        {navItems.map(item => (
          <NavItems
            menuState={menuState}
            toggleMainMenu={toggleMainMenu}
            toggleSubMenu={toggleSubMenu}
            item={item}
            key={item.label}
          />
        ))}
      </ul>
    </nav>
  )
}
export default Navbar
