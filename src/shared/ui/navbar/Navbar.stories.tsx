'use client'
import { useState, useEffect } from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import NavItems from './NavItems'
import { ChartNetwork, LayoutGrid, TextSearch } from 'lucide-react'
import { MainNav } from '@/shared/constants/navigation'

const mockNav: MainNav = {
  href: '/space',
  label: '스페이스',
  icon: LayoutGrid,
  count: 50,
  children: [
    { href: '/space', label: '차트 보기', icon: ChartNetwork },
    { href: '/space', label: '자세히 보기', icon: TextSearch }
  ]
}

const meta: Meta<typeof NavItems> = {
  title: 'Components/Navigation/NavItems',
  component: NavItems,
  argTypes: {
    menuState: { control: 'object' }
  }
}

export default meta
type Story = StoryObj<typeof NavItems>

// Wrapper: 내부 상태 + Controls 동기화
const Wrapper = ({
  item,
  menuState: menuStateArg
}: {
  item: MainNav
  menuState: { main: string | null; sub: string | null }
}) => {
  const [menuState, setMenuState] = useState(menuStateArg)

  useEffect(() => {
    setMenuState(menuStateArg)
  }, [menuStateArg])

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
    <div className="w-64 border border-gray-200 p-4">
      <NavItems
        item={item}
        menuState={menuState}
        toggleMainMenu={toggleMainMenu}
        toggleSubMenu={toggleSubMenu}
      />
    </div>
  )
}

// --- 스토리 케이스 ---
export const Closed: Story = {
  render: () => (
    <Wrapper
      item={mockNav}
      menuState={{ main: null, sub: null }}
    />
  ),
  name: '메뉴 닫힘'
}

export const MainOpen: Story = {
  render: () => (
    <Wrapper
      item={mockNav}
      menuState={{ main: '스페이스', sub: null }}
    />
  ),
  name: '메인 메뉴 열림'
}

export const SubOpen: Story = {
  render: () => (
    <Wrapper
      item={mockNav}
      menuState={{ main: '스페이스', sub: '차트 보기' }}
    />
  ),
  name: '서브 메뉴 열림'
}
