import {
  Inbox,
  Trash2,
  LayoutGrid,
  ScrollText,
  Settings,
  ChartNetwork,
  TextSearch,
  Users,
  BotMessageSquare,
  LucideIcon
} from 'lucide-react'

type MainNav = {
  href: string
  label: string
  icon: LucideIcon
  count?: number
  children?: NavItem[]
}

type NavItem = {
  href: string
  label: string
  icon: LucideIcon
}

export const navItems: MainNav[] = [
  {
    href: '/archive',
    label: '아카이브',
    icon: Inbox,
    count: 123,
    children: [
      {
        /* TODO: 루트 변경 */
        href: '/archive',
        label: '휴지통',
        icon: Trash2
      }
    ]
  },
  {
    href: '/space',
    label: '스페이스',
    icon: LayoutGrid,
    count: 50,
    children: [
      {
        /* TODO: 루트 변경 */
        href: '/space',
        label: '차트 보기',
        icon: ChartNetwork
      },
      {
        /* TODO: 루트 변경 */
        href: '/space',
        label: '자세히 보기',
        icon: TextSearch
      },
      {
        /* TODO: 루트 변경 */
        href: '/space',
        label: '팀원 관리',
        icon: Users
      },
      {
        /* TODO: 루트 변경 */
        href: '/space',
        label: 'Ai 추천 받기',
        icon: BotMessageSquare
      },
      {
        /* TODO: 루트 변경 */
        href: '/space',
        label: '휴지통',
        icon: Trash2
      }
    ]
  },
  { href: '/news', label: '뉴스', icon: ScrollText },

  { href: '/profile', label: '계정 관리', icon: Settings }
  /* TODO: 루트 변경 */
  // { href: '/profile', label: '계정 관리', icon: Settings }
]
