'use client'

import { NavItem } from '@/shared/constants/navigation'
import { tw } from '@/shared/lib'
import Link from 'next/link'

interface Props {
  toggleSubMenu: (label: string) => void
  subItem: NavItem
  isSubMenuOpen: boolean
}

function SubNavItem({ toggleSubMenu, subItem, isSubMenuOpen }: Props) {
  const { icon, href, label } = subItem
  const Icon = icon

  return (
    <li onClick={() => toggleSubMenu(label)}>
      <Link
        href={href}
        className={tw(
          'flex items-center gap-4 px-3 py-2 rounded-r-md rounded-br-md  text-base  hover:bg-gray-100',
          !isSubMenuOpen
            ? 'bg-white text-dark'
            : 'bg-green-light-active font-bold text-black'
        )}>
        {Icon && (
          <Icon
            size={20}
            className={tw(!isSubMenuOpen ? 'text-dark' : 'text-black')}
          />
        )}
        <p className="hidden sm:block">{label}</p>
      </Link>
    </li>
  )
}
export default SubNavItem
