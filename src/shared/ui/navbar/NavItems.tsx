import { MainNav } from '@/shared/constants/navigation'
import MainNavItem from './MainNavItem'
import SubNavItem from './SubNavItem'

interface Props {
  item: MainNav
  menuState: { main: string | null; sub: string | null }
  toggleMainMenu: (label: string) => void
  toggleSubMenu: (label: string) => void
}

function NavItems({ item, menuState, toggleMainMenu, toggleSubMenu }: Props) {
  const isMainMenuOpen = menuState.main === item.label
  return (
    <>
      <MainNavItem
        toggleMainMenu={toggleMainMenu}
        isMainMenuOpen={isMainMenuOpen}
        mainItem={item}
      />

      {isMainMenuOpen && item.children && (
        <ul className="flex flex-col gap-1 border-l-2 ml-4 border-green-normal">
          {item.children.map((child, idx) => {
            const isSubMenuOpen = menuState.sub === child.label
            return (
              <SubNavItem
                key={idx}
                isSubMenuOpen={isSubMenuOpen}
                toggleSubMenu={toggleSubMenu}
                subItem={child}
              />
            )
          })}
        </ul>
      )}
    </>
  )
}
export default NavItems
