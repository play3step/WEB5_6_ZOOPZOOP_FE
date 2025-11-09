import { spaceQueryKeys, SpaceStatus } from '@/entities/space'
import { getInitialSpaceList } from '@/entities/space/api/space.ssr'
import { SpaceList } from '@/features/space/list'
import SpaceTab from '@/widgets/space/space-tab/ui/SpaceTab'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient
} from '@tanstack/react-query'

interface Props {
  searchParams: Promise<{ page?: string; state?: SpaceStatus }>
}

// 스페이스 메인 페이지
export default async function Space({ searchParams }: Props) {
  const queryClient = new QueryClient()
  const params = await searchParams
  const currentPage = Number(params?.page) || 1
  const currentState = (params?.state as SpaceStatus) ?? undefined

  await queryClient.prefetchQuery({
    queryKey: spaceQueryKeys.state(currentPage, currentState),
    queryFn: () =>
      getInitialSpaceList({
        page: currentPage,
        state: currentState
      })
  })

  return (
    <div className="px-8 min-h-[calc(100vh-152px)] flex flex-col">
      <SpaceTab />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <SpaceList />
      </HydrationBoundary>
    </div>
  )
}
