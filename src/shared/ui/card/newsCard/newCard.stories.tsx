import { StoryObj } from '@storybook/nextjs-vite'
import { BaseNewsCard } from './BaseNewsCard'

const meta = {
  title: 'Components/NewsCard',
  component: BaseNewsCard,
  parameters: {
    layout: 'centered'
  }
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: '경제 뉴스 제목이 여기에 표시되며 독자의 관심을 끌도록 작성됩니다',
    content:
      '경제 관련 뉴스의 핵심 내용을 간략하게 정리한 요약문이 표시됩니다.',
    imageUrl: '/image.png',
    category: '정치',
    createdAt: '2025.01.01'
  }
}
