import { MainNav } from '@/shared/constants/navigation'
import { tw } from '@/shared/lib'
import Link from 'next/link'

interface Props {
  toggleMainMenu: (label: string) => void
  isMainMenuOpen: boolean
  mainItem: MainNav
}

function MainNavItem({ toggleMainMenu, isMainMenuOpen, mainItem }: Props) {
  const { icon, href, label, count } = mainItem
  const Icon = icon

  return (
    <li>
      <Link
        href={href}
        onClick={() => {
          toggleMainMenu(label)
        }}
        className={tw(
          'flex items-center justify-center sm:justify-start px-2.5 py-2 rounded-md font-bold text-base hover:bg-orange-accent lg:px-3 mb-2',
          !isMainMenuOpen
            ? 'bg-white text-black'
            : 'bg-green-normal text-white',
          ' px-2.5 py-2 w-10 h-10 lg:w-auto lg:h-auto lg:px-3 lg:gap-4'
        )}>
        {Icon && (
          <span title={label}>
            <Icon
              size={20}
              className={tw(!isMainMenuOpen ? 'text-darker' : 'text-white')}
            />
          </span>
        )}
        <p className="hidden lg:block flex-1">{label}</p>
        {typeof count !== 'undefined' && (
          <span className="hidden lg:block">{count}</span>
        )}
      </Link>
    </li>
  )
}
export default MainNavItem
